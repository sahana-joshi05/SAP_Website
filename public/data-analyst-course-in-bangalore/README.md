# SV CurioTech - Data Analytics Course in Bangalore
## Responsive Business Website (Senior Developer Handoff)

This repository contains the complete production-grade source code for the **SV CurioTech Data Analytics Course in Bangalore** business landing page.

---

### 🎨 Design System & Theme Specifications
- **Main Background:** Warm cream / off-white (`#FAF8F5`, `#F4EFE6`)
- **Primary Buttons & Key Accents:** Deep forest green (`#1B4332`, hover: `#122F23`)
- **Headings:** Dark charcoal with deep forest green undertone (`#152219`)
- **Cards & Enquiry Form:** Soft white (`#FFFFFF`) and warm cream (`#F8F5EE`)
- **Borders & Dividers:** Beige / light grey (`#E5DFD5`, `#EFE9DF`)
- **Highlights & Badges:** Muted sage green (`#588157`, soft tint: `#EBF1EA`)
- **Consistency Rule:** Zero purple-and-black or blue themes applied to website structure.

---

### 📁 Project Structure & Deliverables
```
├── index.html                                  # Semantic HTML5, Schema.org SEO, OpenGraph
├── README.md                                   # Comprehensive documentation & developer handoff
├── sv-curiotech-data-analytics-bangalore.zip   # Complete portable distribution archive
└── assets/
    ├── css/
    │   └── styles.css                          # Responsive CSS, AspireIT-style marquee, animations
    ├── js/
    │   └── main.js                             # Navigation drawer, FAQ accordion, marquee touch & form
    └── images/
        ├── sv-curiotech-logo.png               # Official SV CurioTech company logo
        ├── certificate/
        │   ├── sv-curiotech-official-certificate.pdf # Official certificate PDF asset
        │   └── sv-curiotech-official-certificate.svg # Crisp vector rendering of official certificate
        └── placements/                         # All 17 genuine student placement photos:
            ├── placement-01-nirmal-highbar.jpg
            ├── placement-02-karthick-neovatic.jpg
            ├── placement-03-sivaguru-primus.jpg
            ├── placement-04-naveen-novelveritas.jpg
            ├── placement-05-ramesh-sapphire.jpg
            ├── placement-06-madhan-inecom.jpg
            ├── placement-07-prabhu-apsolut.jpg
            ├── placement-08-mohankumar-bosch.jpg
            ├── placement-09-senthilkumar-2isolutions.jpg
            ├── placement-10-siri-skysurge.jpg
            ├── placement-11-nikitha-neovatic.jpg
            ├── placement-12-aishwarya-accenture.jpg
            ├── placement-13-pradeepkumar-ikyam.jpg
            ├── placement-14-vikash-abb.jpg
            ├── placement-15-anupama-accenture.jpg
            ├── placement-16-kavitha-carelon.jpg
            └── placement-17-sahana-truerize.jpg
```

---

### 📋 Course Details Incorporated
* **Fee:** ₹30,000 (Transparent, all-inclusive)
* **Duration:** 3 Months (flexible weekday and weekend batches)
* **Mode:** 100% Online training available across India
* **Curriculum:** 6 modules (Excel, SQL & Databases, Statistics for Analysts, Power BI, Python for Analytics, and Tableau Desktop)
* **Projects:** 7 hands-on business projects (Sales, Customer Churn, HR Analytics, Financial Variance, Marketing ROI, E-Commerce KPI Dashboard)
* **Certification:** SV CurioTech Institute Certificate (Code: `SVC257`, verified via svcuriotech.com)
* **Contact:** Direct Phone: `+91 6361702540` | Email: `svcuriotech@gmail.com` | WhatsApp chat integrated

---

### 🔄 Student Placements Marquee
- Model: Continuous right-to-left infinite CSS loop (`aspireit.net` gallery concept).
- **Pause on hover:** `.marquee-track:hover { animation-play-state: paused; }`
- **Mobile Touch support:** Pauses on touch-and-hold, resumes smoothly on touch release.
- **Genuine Alumni Records:** Features all 17 genuine graduate photos uploaded by the client. Zero stock or AI-generated people.

---

### 🚀 Deployment & Running
Serve locally using any static web server:
```bash
npx serve .
# or
python -m http.server 8080
```
Or upload directly to Firebase Hosting, Vercel, Netlify, or Apache/Nginx web roots.
