const NOTIFICATION_EMAIL = "sidramareddy432@gmail.com";
const SHEET_NAME = "Registration Leads";
const PHONE = "+91 6361702540";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const name = clean_(data.name);
    const email = clean_(data.email);
    const phone = clean_(data.phone);
    const course = clean_(data.course);
    const receivedAt = new Date();

    if (!name || !email || !phone) {
      throw new Error("Name, email, and phone number are required.");
    }

    getLeadSheet_().appendRow([
      receivedAt,
      name,
      email,
      phone,
      course,
      clean_(data.source),
      clean_(data.submittedAt),
      "New",
    ]);

    sendAdmissionsEmail_(name, email, phone, course, receivedAt, data.source);
    sendConfirmationEmail_(name, email);

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error) });
  }
}

function sendAdmissionsEmail_(name, email, phone, course, receivedAt, source) {
  const safeName = escapeHtml_(name);
  const safeEmail = escapeHtml_(email);
  const safePhone = escapeHtml_(phone);
  const safeCourse = escapeHtml_(course);
  const safeSource = escapeHtml_(clean_(source));
  const subjectCourse = course ? " - " + course : "";
  const plainBody = [
    "New course enquiry received.",
    "",
    "Name: " + name,
    "Email: " + email,
    "Phone: " + phone,
    "Course: " + course,
    "Received: " + receivedAt,
    "Source: " + clean_(source),
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#16343b;max-width:620px">
      <h2 style="margin:0 0 12px;font-size:20px">New course enquiry</h2>
      <p style="margin:0 0 18px">A learner submitted the website enquiry form.</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Name</td><td style="padding:11px;border-bottom:1px solid #e7efed;font-weight:700">${safeName}</td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Email</td><td style="padding:11px;border-bottom:1px solid #e7efed"><a href="mailto:${safeEmail}" style="color:#087f7a">${safeEmail}</a></td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Phone</td><td style="padding:11px;border-bottom:1px solid #e7efed"><a href="tel:${safePhone}" style="color:#087f7a">${safePhone}</a></td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Course</td><td style="padding:11px;border-bottom:1px solid #e7efed">${safeCourse}</td></tr>
          <tr><td style="padding:11px;border-bottom:1px solid #e7efed;color:#718489">Received</td><td style="padding:11px;border-bottom:1px solid #e7efed">${receivedAt}</td></tr>
          <tr><td style="padding:11px;color:#718489">Source</td><td style="padding:11px">${safeSource}</td></tr>
        </table>
    </div>`;

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: "Course enquiry from " + name + subjectCourse,
    body: plainBody,
    htmlBody: htmlBody,
    replyTo: email,
    name: "SV CurioTech Website",
  });
}

function sendConfirmationEmail_(name, email) {
  const safeName = escapeHtml_(name);
  const plainBody = [
    "Dear " + name + ",",
    "",
    "Thank you for contacting SV CurioTech.",
    "",
    "We have received your course enquiry. Our admissions team will contact you shortly with course details and batch timing.",
    "",
    "For urgent help, call " + PHONE + " or reply to this email.",
    "",
    "Regards,",
    "SV CurioTech Admissions",
  ].join("\n");
  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#16343b;max-width:620px;line-height:1.6">
        <h2 style="margin:0 0 16px;font-size:20px">Thank you for contacting SV CurioTech</h2>
        <p>Dear ${safeName},</p>
        <p>We have received your course enquiry. Our admissions team will contact you shortly with course details and batch timing.</p>
        <p>For urgent help, call <strong>${PHONE}</strong> or reply to this email.</p>
        <p style="margin-top:24px">Regards,<br><strong>SV CurioTech Admissions</strong></p>
    </div>`;

  MailApp.sendEmail({
    to: email,
    subject: "SV CurioTech received your course enquiry",
    body: plainBody,
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
    sheet.appendRow(["Received At", "Name", "Email", "Phone", "Course", "Source Page", "Submitted At", "Status"]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 8)
      .setFontWeight("bold")
      .setBackground("#087f7a")
      .setFontColor("#ffffff");
    sheet.autoResizeColumns(1, 8);
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
