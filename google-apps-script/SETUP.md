# Optional: save course registrations to Google Sheets and email

The website sends registrations to `svcuriotech@gmail.com` by default. Complete these
steps only if you also want each registration saved in a Google Sheet.

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
11. Add:

   `VITE_LEAD_WEBHOOK_URL=PASTE_YOUR_WEB_APP_URL_HERE`

12. Stop the development server with `Ctrl + C`, then restart it with:

   `npm run dev`

After this setup:

- Each submission is saved in a sheet named `Registration Leads`.
- The admissions team receives a professionally formatted lead email.
- The person who registered receives a professional confirmation email automatically.

If an Apps Script deployment already exists, create a **new version** and redeploy it
after replacing `Code.gs`, otherwise the previous email behavior will remain active.
