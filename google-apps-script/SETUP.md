# Optional: save course registrations to Google Sheets and email

The website can send registrations to `sidramareddy432@gmail.com` through the
default FormSubmit email endpoint. Complete these steps only if you also want a
more controlled Google Apps Script flow that saves each lead to Google Sheets and
sends the email from your Google account.

1. Create a new Google Sheet while signed in to the Google account that should own the registrations.
2. Name it `SV CurioTech Course Registrations`.
3. In the Sheet, open **Extensions → Apps Script**.
4. Delete the sample code and paste the contents of `Code.gs`.
5. Click **Save**.
6. Click **Deploy → New deployment**.
7. Select **Web app** as the deployment type.
8. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**, approve the requested Google permissions, and copy the Web app URL ending in `/exec`.
10. In the website project root, create a file named `.env`.
11. Add both values:

   ```env
   VITE_LEAD_WEBHOOK_URL=PASTE_YOUR_WEB_APP_URL_HERE
   LEAD_WEBHOOK_URL=PASTE_YOUR_WEB_APP_URL_HERE
   ```

12. Stop the development server with `Ctrl + C`, then restart it with:

   `npm run dev`

After this setup:

- Each submission is saved in a sheet named `Registration Leads`.
- The admissions team receives a professionally formatted lead email.
- The person who registered receives a professional confirmation email automatically.

Inbox delivery notes:

- If FormSubmit messages land in Spam, use this Google Apps Script webhook
  instead. The email is sent by the Google account that owns the script, which is
  more trusted than a shared third-party form sender.
- In Gmail, open one test email from Spam and click **Report not spam**. Add the
  sender account to Contacts. This trains Gmail for future messages.
- If you later use a custom domain email address, configure SPF, DKIM, and DMARC
  records for that domain. Without those DNS records, many inboxes will place
  business emails in Spam.
- Do not send many test submissions to different addresses quickly; repeated
  similar test emails can temporarily reduce inbox placement.

For Vercel production, add the same `LEAD_WEBHOOK_URL` value in the Vercel
project's Environment Variables, then redeploy.

If an Apps Script deployment already exists, create a **new version** and redeploy it
after replacing `Code.gs`, otherwise the previous email behavior will remain active.
