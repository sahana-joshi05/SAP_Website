import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

const pages = [
  {
    path: "sap-fico-training-in-bangalore",
    title: "SAP FICO Training in Bangalore | SAP FI CO Course | SV CurioTech",
    description:
      "Join SAP FICO Training in Bangalore at SV CurioTech. Learn SAP FI and CO with SAP S/4HANA practice, real-time projects, expert trainers, interview preparation, flexible batches and placement assistance.",
    keywords:
      "SAP FICO Training Bangalore, SAP FI Course Bangalore, SAP CO Course Bangalore, SAP FICO Institute Bangalore, SAP S/4HANA Finance Training, SAP Finance Training Bangalore, SAP FICO Course with Placement Bangalore",
    canonical: "https://www.svcuriotech.com/sap-fico-training-in-bangalore",
    h1: "SAP FICO Training in Bangalore",
    body:
      "SV CurioTech offers SAP FICO Training in Bangalore for freshers, commerce graduates, MBA Finance learners, accountants and working professionals. The course covers SAP FI, SAP CO, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, Cost Center Accounting, Profit Center Accounting, Internal Orders, Product Costing basics, CO-PA, SAP S/4HANA Finance concepts, real-time projects, interview preparation, flexible batches and placement assistance.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP FICO Training in Bangalore",
      description:
        "SAP FICO training in Bangalore from SV CurioTech covering SAP FI, SAP CO, S/4HANA Finance concepts, real-time projects, interview preparation and placement assistance.",
      provider: {
        "@type": "EducationalOrganization",
        name: "SV CurioTech",
        url: "https://www.svcuriotech.com/",
      },
      areaServed: "Bangalore, Karnataka",
      courseMode: ["Classroom", "Online"],
      url: "https://www.svcuriotech.com/sap-fico-training-in-bangalore",
    },
  },
  {
    path: "sap-training-in-canada",
    title: "SAP Course in Canada | Online SAP Training Canada | SV CurioTech",
    description:
      "Join SV CurioTech for SAP Course in Canada with live online SAP training, S/4HANA server practice, SAP FICO, MM, SD, ABAP, PP, SuccessFactors and placement assistance.",
    keywords:
      "sap course in canada, sap training in canada, online sap training canada, sap fico course canada, sap mm course canada, sap sd course canada, sap abap course canada",
    canonical: "https://www.svcuriotech.com/sap-training-in-canada",
    h1: "SAP Course in Canada",
    body:
      "SV CurioTech offers SAP training in Canada through live online instructor-led classes, practical SAP S/4HANA server access, real business scenarios, interview preparation, resume help and placement assistance. Learners can choose SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP and SAP SuccessFactors courses.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP Course in Canada",
      description:
        "Online SAP course in Canada from SV CurioTech covering SAP FICO, MM, SD, ABAP, PP, SuccessFactors and S/4HANA with placement assistance.",
      provider: {
        "@type": "EducationalOrganization",
        name: "SV CurioTech",
        url: "https://www.svcuriotech.com/",
      },
      areaServed: "Canada",
      courseMode: "Online",
      url: "https://www.svcuriotech.com/sap-training-in-canada",
    },
  },
  {
    path: "sap-course-in-toronto",
    title: "SAP Course in Toronto | SAP Training & Certification Prep | SV CurioTech",
    description:
      "Join SV CurioTech for SAP Course in Toronto with live online SAP training, S/4HANA server practice, SAP FICO, MM, SD, PP, ABAP, SuccessFactors and placement support.",
    keywords:
      "sap course in toronto, sap training in toronto, sap certification preparation toronto, online sap training toronto, sap fico course toronto, sap mm training toronto, sap sd training toronto",
    canonical: "https://www.svcuriotech.com/sap-course-in-toronto",
    h1: "SAP Course in Toronto",
    body:
      "SV CurioTech offers SAP Course in Toronto through live online instructor-led classes, practical SAP S/4HANA server access, business simulations, SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP SuccessFactors, interview preparation, resume help and placement assistance.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP Course in Toronto",
      description:
        "Online SAP course in Toronto from SV CurioTech covering SAP FICO, MM, SD, PP, ABAP, SuccessFactors and S/4HANA with placement assistance.",
      provider: {
        "@type": "EducationalOrganization",
        name: "SV CurioTech",
        url: "https://www.svcuriotech.com/",
      },
      areaServed: "Toronto",
      courseMode: "Online",
      url: "https://www.svcuriotech.com/sap-course-in-toronto",
    },
  },
  {
    path: "sap-training-in-electronic-city",
    title: "Best SAP Training in Electronic City | SV CurioTech",
    description:
      "Join SV CurioTech for SAP training in Electronic City, Bangalore with live projects, practical SAP modules, flexible batches and placement assistance.",
    keywords:
      "sap training in electronic city, best sap training institute in electronic city, sap course bangalore, sap mm training electronic city, sap fico training electronic city",
    canonical: "https://www.svcuriotech.com/sap-training-in-electronic-city",
    h1: "Best SAP Training in Electronic City",
    body:
      "SV CurioTech offers SAP training in Electronic City, Bangalore for IT professionals, fresh graduates and career changers who want practical SAP skills. Learn SAP FICO, MM, SD, ABAP, PP, BASIS and SuccessFactors through instructor-led classes, SAP system practice, live business examples, flexible weekday and weekend batches, interview preparation, resume guidance and placement assistance. Learners from Electronic City, Bommasandra, HSR Layout, Begur, BTM Layout and nearby areas can choose SAP modules based on finance, procurement, sales, technical, HR or enterprise support career goals.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP Training in Electronic City",
      description:
        "Practical SAP training in Electronic City, Bangalore with live projects, module-focused learning and placement assistance.",
      provider: {
        "@type": "EducationalOrganization",
        name: "SV CurioTech",
        url: "https://www.svcuriotech.com/",
      },
      areaServed: "Electronic City, Bangalore",
      courseMode: ["Classroom", "Online"],
      url: "https://www.svcuriotech.com/sap-training-in-electronic-city",
    },
  },
  {
    path: "sap-training-in-nagarbhavi",
    title: "Best SAP Training in Nagarbhavi | SV CurioTech",
    description:
      "Join SV CurioTech for SAP training in Nagarbhavi, Bangalore with live projects, practical SAP modules, flexible batches and placement assistance.",
    keywords:
      "sap training in nagarbhavi, best sap training institute in nagarbhavi, sap course bangalore, sap mm training nagarbhavi, sap fico training nagarbhavi",
    canonical: "https://www.svcuriotech.com/sap-training-in-nagarbhavi",
    h1: "Best SAP Training in Nagarbhavi",
    body:
      "SV CurioTech offers SAP training in Nagarbhavi, Bangalore for students, graduates, job seekers and working professionals who want a practical career skill. Learn SAP FICO, MM, SD, ABAP, PP, BASIS and SuccessFactors through instructor-led classes, SAP server practice, real business examples, flexible weekday and weekend batches, interview preparation, resume guidance and placement assistance. Learners from Nagarbhavi, Vijayanagar, Rajajinagar, Kengeri, Jnanabharathi, Basaveshwaranagar and nearby west Bangalore areas can choose SAP modules based on education, experience and career goals.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP Training in Nagarbhavi",
      description:
        "Practical SAP training in Nagarbhavi, Bangalore with live projects, module-focused learning and placement assistance.",
      provider: {
        "@type": "EducationalOrganization",
        name: "SV CurioTech",
        url: "https://www.svcuriotech.com/",
      },
      areaServed: "Nagarbhavi, Bangalore",
      courseMode: ["Classroom", "Online"],
      url: "https://www.svcuriotech.com/sap-training-in-nagarbhavi",
    },
  },
  {
    path: "sap-course-in-jayanagar",
    title: "SAP Course in Jayanagar, Bangalore | SV CurioTech",
    description:
      "Join SV CurioTech for SAP course in Jayanagar, Bangalore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, practical training, projects and interview preparation.",
    keywords:
      "sap course in jayanagar, sap training in jayanagar, best sap training institute in jayanagar, sap fico training jayanagar, sap mm training jayanagar, sap abap course jayanagar",
    canonical: "https://www.svcuriotech.com/sap-course-in-jayanagar",
    h1: "SAP Course in Jayanagar, Bangalore",
    body:
      "SV CurioTech offers SAP course in Jayanagar, Bangalore for freshers, graduates, commerce learners, engineering graduates, working professionals and career switchers. Learners can enquire for SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, S/4HANA and other SAP modules depending on current batch availability. The training focuses on practical business scenarios, online and classroom options, real-time project-style learning, course duration guidance, weekday and weekend batches, interview preparation, career guidance, student testimonials, Google reviews and enquiry support through call or WhatsApp. The Jayanagar SAP course page helps learners compare module fit, understand what happens in class, check practical or server access questions, review batch timing points, and choose a SAP path based on finance, procurement, sales, HR, manufacturing, technical or career-change goals. Learners from Jayanagar, JP Nagar, Basavanagudi, Banashankari, BTM Layout, Wilson Garden and nearby south Bangalore areas can contact SV CurioTech for course guidance.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "SAP Course in Jayanagar, Bangalore",
      description:
        "Practical SAP course in Jayanagar, Bangalore covering SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba and S/4HANA with projects, interview preparation and career guidance.",
      provider: {
        "@type": "EducationalOrganization",
        name: "SV CurioTech",
        url: "https://www.svcuriotech.com/",
      },
      areaServed: "Jayanagar, Bangalore",
      courseMode: ["Classroom", "Online"],
      url: "https://www.svcuriotech.com/sap-course-in-jayanagar",
    },
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function upsertHeadTag(html, selectorRegex, replacement) {
  if (selectorRegex.test(html)) {
    return html.replace(selectorRegex, replacement);
  }

  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function buildRouteHtml(baseHtml, page) {
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const keywords = escapeHtml(page.keywords);
  const canonical = escapeHtml(page.canonical);
  const image = "https://www.svcuriotech.com/assets/sap-training-hero.png";
  const structuredData = JSON.stringify(page.schema);
  const fallbackContent = `<noscript><main><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.body)}</p><p><a href="${canonical}">${escapeHtml(page.h1)}</a></p></main></noscript>`;

  let html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace('<div id="root"></div>', `<div id="root"></div>\n    ${fallbackContent}`);

  html = upsertHeadTag(html, /<meta name="description" content=".*?"\s*\/?>/s, `<meta name="description" content="${description}" />`);
  html = upsertHeadTag(html, /<meta name="keywords" content=".*?"\s*\/?>/s, `<meta name="keywords" content="${keywords}" />`);
  html = upsertHeadTag(html, /<link rel="canonical" href=".*?"\s*\/?>/s, `<link rel="canonical" href="${canonical}" />`);
  html = upsertHeadTag(html, /<meta property="og:title" content=".*?"\s*\/?>/s, `<meta property="og:title" content="${title}" />`);
  html = upsertHeadTag(html, /<meta property="og:description" content=".*?"\s*\/?>/s, `<meta property="og:description" content="${description}" />`);
  html = upsertHeadTag(html, /<meta property="og:url" content=".*?"\s*\/?>/s, `<meta property="og:url" content="${canonical}" />`);
  html = upsertHeadTag(html, /<meta property="og:image" content=".*?"\s*\/?>/s, `<meta property="og:image" content="${image}" />`);
  html = upsertHeadTag(html, /<script type="application\/ld\+json" data-page-schema>.*?<\/script>/s, `<script type="application/ld+json" data-page-schema>${structuredData}</script>`);

  return html;
}

const baseHtml = await readFile(indexPath, "utf8");

for (const page of pages) {
  const routeHtml = buildRouteHtml(baseHtml, page);
  const routeDir = path.join(distDir, page.path);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), routeHtml);
  await writeFile(path.join(distDir, `${page.path}.html`), routeHtml);
}
