# Optional Google Sheets lead archive

The website now sends registration emails through the backend `/api/lead` route
using SMTP settings. Use `.env.example` for the required mail variables.

This Google Apps Script is optional. Use it only if you also want to save every
lead to a Google Sheet from a separate workflow.

1. Create a new Google Sheet while signed in to the Google account that should own the registrations.
2. Name it `SV CurioTech Course Registrations`.
3. In the Sheet, open **Extensions > Apps Script**.
4. Delete the sample code and paste the contents of `Code.gs`.
5. Click **Save**.
6. Click **Deploy > New deployment**.
7. Select **Web app** as the deployment type.
8. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**, approve the requested Google permissions, and copy the Web app URL ending in `/exec`.

After this optional setup:

- Each submission handled by the script is saved in a sheet named `Registration Leads`.
- The admissions team receives a professionally formatted lead email.
- The person who registered receives a professional confirmation email automatically.

For the main website mail flow, configure these environment variables instead:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=svcuriotech@gmail.com
SMTP_PASS=your-16-character-app-password
MAIL_FROM="SV CurioTech <svcuriotech@gmail.com>"
LEAD_TO_EMAIL=svcuriotech@gmail.com
LEAD_CC_EMAIL=
```
