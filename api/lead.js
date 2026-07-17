const LEAD_EMAIL = "sidramareddy432@gmail.com";
const LEAD_WEBHOOK_URL =
  globalThis.process?.env?.LEAD_WEBHOOK_URL ||
  globalThis.process?.env?.VITE_LEAD_WEBHOOK_URL ||
  "";

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
    autoresponse: String(body._autoresponse || "").trim(),
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

  if (LEAD_WEBHOOK_URL) {
    try {
      const webhook = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...lead,
          _replyto: lead.email,
          _subject: subject,
        }),
      });
      const responseText = await webhook.text();
      const result = responseText ? JSON.parse(responseText) : {};

      if (!webhook.ok || result.ok === false) {
        return res.status(502).json({
          ok: false,
          error: result.error || responseText || "Lead webhook rejected the request.",
        });
      }

      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(502).json({
        ok: false,
        error: error instanceof Error ? error.message : "Lead webhook is unreachable.",
      });
    }
  }

  return res.status(503).json({
    ok: false,
    error: `Lead email is not configured. Add LEAD_WEBHOOK_URL so requests can be sent to ${LEAD_EMAIL}.`,
  });
}
