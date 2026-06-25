const NOTIFICATION_EMAIL = "svcuriotech@gmail.com";
const SHEET_NAME = "Registration Leads";
const PHONE = "+91 6361702540";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const name = clean_(data.name);
    const email = clean_(data.email);
    const phone = clean_(data.phone);
    const receivedAt = new Date();

    if (!name || !email || !phone) {
      throw new Error("Name, email, and phone number are required.");
    }

    getLeadSheet_().appendRow([
      receivedAt,
      name,
      email,
      phone,
      clean_(data.source),
      clean_(data.submittedAt),
      "New",
    ]);

    sendAdmissionsEmail_(name, email, phone, receivedAt, data.source);
    sendConfirmationEmail_(name, email);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function sendAdmissionsEmail_(name, email, phone, receivedAt, source) {
  const safeName = escapeHtml_(name);
  const safeEmail = escapeHtml_(email);
  const safePhone = escapeHtml_(phone);
  const safeSource = escapeHtml_(clean_(source));

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#16343b;max-width:620px;margin:auto">
      <div style="background:#087f7a;color:#fff;padding:22px 26px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;font-size:22px">New Website Registration</h2>
        <p style="margin:7px 0 0;color:#d8f4ef">A prospective learner has requested admission guidance.</p>
      </div>
      <div style="border:1px solid #dce9e6;border-top:0;padding:26px;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Name</td><td style="padding:11px;border-bottom:1px solid #e7efed;font-weight:700">${safeName}</td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Email</td><td style="padding:11px;border-bottom:1px solid #e7efed"><a href="mailto:${safeEmail}" style="color:#087f7a">${safeEmail}</a></td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Phone</td><td style="padding:11px;border-bottom:1px solid #e7efed"><a href="tel:${safePhone}" style="color:#087f7a">${safePhone}</a></td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Received</td><td style="padding:11px;border-bottom:1px solid #e7efed">${receivedAt}</td></tr>
          <tr><td style="padding:11px;color:#718489">Source</td><td style="padding:11px">${safeSource}</td></tr>
        </table>
        <p style="margin:22px 0 0;padding:14px;background:#f1f7f5;border-radius:8px;font-size:13px">Please contact this learner to discuss course selection, schedule, fees, and the admission process.</p>
      </div>
    </div>`;

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "New website registration - " + name,
    body: "New registration\n\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nReceived: " + receivedAt,
    htmlBody: htmlBody,
    replyTo: email,
    name: "SV CurioTech Website",
  });
}

function sendConfirmationEmail_(name, email) {
  const safeName = escapeHtml_(name);
  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#16343b;max-width:620px;margin:auto">
      <div style="background:#087f7a;color:#fff;padding:25px 28px;border-radius:12px 12px 0 0">
        <h2 style="margin:0;font-size:23px">Thank you for registering</h2>
      </div>
      <div style="border:1px solid #dce9e6;border-top:0;padding:30px 28px;border-radius:0 0 12px 12px;line-height:1.7">
        <p>Dear ${safeName},</p>
        <p>Thank you for registering with <strong>SV CurioTech</strong>. We have received your contact details successfully.</p>
        <p>A member of our admissions team will contact you shortly to understand your learning goals and guide you through the suitable SAP course, schedule, fees, and admission process.</p>
        <p>If you need immediate assistance, please call <strong>${PHONE}</strong> or reply to this email.</p>
        <p style="margin-top:26px">Warm regards,<br><strong>Admissions Team</strong><br>SV CurioTech<br><span style="color:#718489">Innovating Education Through Technology</span></p>
      </div>
    </div>`;

  MailApp.sendEmail({
    to: email,
    subject: "Thank you for registering with SV CurioTech",
    body: "Dear " + name + ",\n\nThank you for registering with SV CurioTech. We have received your details successfully. Our admissions team will contact you shortly.\n\nWarm regards,\nAdmissions Team\nSV CurioTech",
    htmlBody: htmlBody,
    replyTo: NOTIFICATION_EMAIL,
    name: "SV CurioTech Admissions",
  });
}

function getLeadSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(["Received At", "Name", "Email", "Phone", "Source Page", "Submitted At", "Status"]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 7)
      .setFontWeight("bold")
      .setBackground("#087f7a")
      .setFontColor("#ffffff");
    sheet.autoResizeColumns(1, 7);
  }

  return sheet;
}

function clean_(value) {
  return String(value || "").trim();
}

function escapeHtml_(value) {
  return clean_(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
