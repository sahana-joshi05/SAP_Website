import nodemailer from "nodemailer";

const ADMISSIONS_EMAIL = process.env.LEAD_TO_EMAIL || "svcuriotech@gmail.com";
const COPY_EMAIL = process.env.LEAD_CC_EMAIL || "";
const PHONE = "+91 6361702540";

function normalizeLead(body = {}) {
  return {
    name: String(body.name || "").trim(),
    email: String(body.email || "").trim(),
    phone: String(body.phone || "").trim(),
    course: String(body.course || "").trim(),
    variant: String(body.variant || "registration").trim(),
    source: String(body.source || "").trim(),
    submittedAt: String(body.submittedAt || "").trim(),
    subject: String(body._subject || "").trim(),
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: String(process.env.SMTP_SECURE || "true") !== "false",
    auth: { user, pass },
  });
}

function buildAdmissionsEmail(lead, subject) {
  const safe = {
    name: escapeHtml(lead.name),
    email: escapeHtml(lead.email),
    phone: escapeHtml(lead.phone),
    course: escapeHtml(lead.course || "Not specified"),
    source: escapeHtml(lead.source || "Website"),
    submittedAt: escapeHtml(lead.submittedAt || new Date().toISOString()),
  };

  const text = [
    "New SAP course enquiry received.",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Course: ${lead.course || "Not specified"}`,
    `Source: ${lead.source || "Website"}`,
    `Submitted At: ${lead.submittedAt || new Date().toISOString()}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#16343b;max-width:640px">
      <h2 style="margin:0 0 12px;font-size:20px">New SAP course enquiry</h2>
      <p style="margin:0 0 18px">A learner submitted the website enquiry form.</p>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Name</td><td style="padding:11px;border-bottom:1px solid #e7efed;font-weight:700">${safe.name}</td></tr>
        <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Email</td><td style="padding:11px;border-bottom:1px solid #e7efed"><a href="mailto:${safe.email}" style="color:#087f7a">${safe.email}</a></td></tr>
        <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Phone</td><td style="padding:11px;border-bottom:1px solid #e7efed"><a href="tel:${safe.phone}" style="color:#087f7a">${safe.phone}</a></td></tr>
        <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Course</td><td style="padding:11px;border-bottom:1px solid #e7efed">${safe.course}</td></tr>
        <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Source</td><td style="padding:11px;border-bottom:1px solid #e7efed">${safe.source}</td></tr>
        <tr><td style="padding:11px;color:#718489">Submitted At</td><td style="padding:11px">${safe.submittedAt}</td></tr>
      </table>
    </div>`;

  return { subject, text, html };
}

function buildConfirmationEmail(lead) {
  const safeName = escapeHtml(lead.name);
  const text = [
    `Dear ${lead.name},`,
    "",
    "Thank you for contacting SV CurioTech.",
    "",
    "We have received your details successfully. Our admissions team will contact you shortly to understand your learning goals and guide you through the suitable SAP course, schedule, and admission process.",
    "",
    `For urgent help, please call ${PHONE} or reply to this email.`,
    "",
    "Warm regards,",
    "Admissions Team",
    "SV CurioTech",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#16343b;max-width:640px;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:20px">Thank you for contacting SV CurioTech</h2>
      <p>Dear ${safeName},</p>
      <p>We have received your details successfully. Our admissions team will contact you shortly to understand your learning goals and guide you through the suitable SAP course, schedule, and admission process.</p>
      <p>For urgent help, please call <strong>${PHONE}</strong> or reply to this email.</p>
      <p style="margin-top:24px">Warm regards,<br><strong>Admissions Team</strong><br>SV CurioTech</p>
    </div>`;

  return {
    subject: "SV CurioTech received your course enquiry",
    text,
    html,
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const lead = normalizeLead(req.body);

  if (!lead.name || !isValidEmail(lead.email) || !lead.phone) {
    return res.status(400).json({ ok: false, error: "Name, valid email, and phone are required." });
  }

  const subject =
    lead.subject ||
    (lead.variant === "course-info"
      ? `Course information request - ${lead.name}`
      : `New website registration - ${lead.name}`);

  try {
    const transporter = createTransporter();
    const from = process.env.MAIL_FROM || `"SV CurioTech" <${process.env.SMTP_USER}>`;
    const admissionsEmail = buildAdmissionsEmail(lead, subject);
    const confirmationEmail = buildConfirmationEmail(lead);

    await transporter.sendMail({
      from,
      to: ADMISSIONS_EMAIL,
      cc: COPY_EMAIL || undefined,
      replyTo: lead.email,
      ...admissionsEmail,
    });

    await transporter.sendMail({
      from,
      to: lead.email,
      replyTo: ADMISSIONS_EMAIL,
      ...confirmationEmail,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Lead email could not be sent.",
    });
  }
}
