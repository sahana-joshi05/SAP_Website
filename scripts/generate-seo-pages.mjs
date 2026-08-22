import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const siteUrl = "https://www.svcuriotech.com";
const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const defaultImage = `${siteUrl}/assets/sap-training-hero.jpg`;

const organization = {
  "@type": "EducationalOrganization",
  name: "SV CurioTech",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/sv-curiotech-logo.jpg`,
  telephone: "+916361702540",
  email: "svcuriotech@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 25, 1st Floor, MG Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
};

const courseModules = [
  ["sap-fico", "SAP FICO", "Finance & Controlling", "SAP FICO course covering financial accounting, controlling, general ledger, accounts payable, accounts receivable, asset accounting, cost center accounting and SAP S/4HANA finance practice.", "SAP FICO Course in Bangalore | Finance Training | SV CurioTech", "Learn SAP FICO in Bangalore with SAP FI, SAP CO, S/4HANA finance practice, real business scenarios, flexible batches, interview preparation and placement assistance."],
  ["sap-mm", "SAP MM", "Materials Management", "SAP MM course covering procure-to-pay, purchasing, inventory management, vendor master, material master, goods movement, pricing and invoice verification.", "SAP MM Course in Bangalore | Materials Management | SV CurioTech", "Learn SAP MM in Bangalore with procurement, inventory, vendor master, material master, invoice verification, hands-on practice and placement support."],
  ["sap-sd", "SAP SD", "Sales & Distribution", "SAP SD course covering order-to-cash, customer master, sales orders, pricing, delivery, shipping, billing and credit management.", "SAP SD Course in Bangalore | Sales & Distribution | SV CurioTech", "Learn SAP SD in Bangalore with order-to-cash, pricing, delivery, shipping, billing, customer master, practical training and interview preparation."],
  ["sap-pp", "SAP PP", "Production Planning", "SAP PP course covering master data, MRP, BOM, routing, capacity planning, production orders, shop floor control and manufacturing process examples.", "SAP PP Course in Bangalore | Production Planning | SV CurioTech", "Learn SAP PP in Bangalore with production planning, MRP, BOM, routing, manufacturing scenarios, practical assignments and placement support."],
  ["sap-abap", "SAP ABAP", "Application Development", "SAP ABAP course covering programming basics, reports, debugging, data dictionary, forms, BAPIs, BADIs, OData concepts and SAP development practice.", "SAP ABAP Course in Bangalore | Technical SAP Training | SV CurioTech", "Learn SAP ABAP in Bangalore with reports, debugging, data dictionary, forms, enhancements, OData basics, practical coding and interview support."],
  ["successfactors", "SAP SuccessFactors", "Cloud HCM", "SAP SuccessFactors course covering Employee Central, recruiting, onboarding, performance, compensation, analytics and cloud HR process understanding.", "SAP SuccessFactors Training in Bangalore | SV CurioTech", "Learn SAP SuccessFactors with Employee Central, recruiting, onboarding, performance, compensation, cloud HCM practice and career guidance."],
  ["sap-ariba", "SAP Ariba", "Strategic Procurement", "SAP Ariba course covering sourcing, contracts, buying, invoicing, supplier management, Ariba Network and procurement collaboration.", "SAP Ariba Training in Bangalore | Procurement Course | SV CurioTech", "Learn SAP Ariba with sourcing, supplier management, contracts, buying, invoicing, procurement scenarios, practical training and placement support."],
  ["sap-security", "SAP Security", "Authorization & Identity", "SAP Security course covering user administration, role design, PFCG, authorization objects, SU24, auditing and access control basics.", "SAP Security Training in Bangalore | SV CurioTech", "Learn SAP Security in Bangalore with user administration, role design, PFCG, authorizations, auditing, practical training and interview guidance."],
  ["sap-grc", "SAP GRC", "Governance, Risk & Compliance", "SAP GRC course covering access control, risk analysis, access request management, emergency access, business roles and process control.", "SAP GRC Training in Bangalore | SV CurioTech", "Learn SAP GRC with access control, risk analysis, emergency access, compliance concepts, practical examples and career support."],
];

const locationPages = [
  ["sap-training-in-yeshwanthpur", "Best SAP Training in Yeshwanthpur | SV CurioTech", "Join SV CurioTech for SAP training in Yeshwanthpur, Bangalore with practical SAP modules, live projects, flexible batches, interview preparation and placement assistance.", "Yeshwanthpur, Bangalore", "SAP training in Yeshwanthpur for freshers, graduates and working professionals. Learn SAP FICO, MM, SD, ABAP, PP, Ariba, SuccessFactors and related modules with business examples, SAP practice, career counselling, interview preparation and placement support."],
  ["sap-training-in-electronic-city", "Best SAP Training in Electronic City | SV CurioTech", "Join SV CurioTech for SAP training in Electronic City, Bangalore with practical SAP modules, live projects, flexible weekday or weekend batches and placement assistance.", "Electronic City, Bangalore", "SAP training in Electronic City for IT professionals, freshers and career changers near Bommasandra, HSR Layout, Begur, BTM Layout and Koramangala. Learn SAP modules through instructor-led classes, real business scenarios, SAP server practice, interview preparation and career support."],
  ["sap-training-in-nagarbhavi", "Best SAP Training in Nagarbhavi | SV CurioTech", "Join SV CurioTech for SAP training in Nagarbhavi, Bangalore with hands-on SAP practice, practical modules, flexible batches and placement assistance.", "Nagarbhavi, Bangalore", "SAP training in Nagarbhavi for students, job seekers, graduates and working professionals near Vijayanagar, Rajajinagar, Kengeri and Basaveshwaranagar. Choose SAP FICO, MM, SD, ABAP, PP, SuccessFactors, Ariba and other modules with practical examples and career guidance."],
  ["sap-course-in-jayanagar", "SAP Course in Jayanagar, Bangalore | SV CurioTech", "Join SV CurioTech for SAP course in Jayanagar with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, projects and interview preparation.", "Jayanagar, Bangalore", "SAP course in Jayanagar for freshers, commerce graduates, engineering graduates, MBA learners and working professionals near JP Nagar, Basavanagudi, Banashankari, BTM Layout and Wilson Garden. Compare SAP modules, get practical training, ask about SAP server access, batch timing, fees and placement support."],
  ["sap-training-in-coimbatore", "SAP Training Institute in Coimbatore with Placement | SV CurioTech", "Join SV CurioTech for SAP training in Coimbatore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC, live S/4HANA practice and placement assistance.", "Coimbatore, Tamil Nadu", "SAP training in Coimbatore for students, graduates and working professionals who want live S/4HANA practice, real business scenarios, module guidance and placement support. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC with practical projects, resume guidance, LinkedIn preparation, mock interviews and weekday, weekend or online batch options."],
  ["sap-training-in-belagavi", "SAP Training Institute in Belagavi with Placement | SV CurioTech", "Join SV CurioTech for SAP training in Belagavi with hands-on SAP FICO, MM, SD, PP, HCM, ABAP, SuccessFactors, Ariba, Security and GRC training plus placement support.", "Belagavi, Karnataka", "SAP training in Belagavi for North Karnataka learners from commerce, engineering, management, manufacturing, finance, HR and IT backgrounds. SV CurioTech teaches SAP with live S/4HANA practice, production orders, material movement, payroll, procurement, finance and sales scenarios, plus resume building, mock interviews and placement assistance."],
];

const yeshwanthpurModules = [
  ["sap-abap-training-in-yeshwanthpur", "SAP ABAP", "Best SAP ABAP Training in Yeshwanthpur | SV CurioTech", "Learn SAP ABAP in Yeshwanthpur with technical programming practice, SAP server access, live projects and placement support at SV CurioTech.", "ABAP reports, debugging, data dictionary, forms, enhancements and SAP development practice for technical graduates, developers and IT learners."],
  ["sap-ariba-training-in-yeshwanthpur", "SAP Ariba", "Best SAP Ariba Training in Yeshwanthpur | SV CurioTech", "Join SAP Ariba training in Yeshwanthpur at SV CurioTech. Learn procurement concepts with practical sessions, projects and placement support.", "SAP Ariba sourcing, buying, supplier collaboration, invoicing and procurement process training for supply chain learners and purchase professionals."],
  ["sap-basis-training-in-yeshwanthpur", "SAP BASIS", "Best SAP BASIS Training in Yeshwanthpur | SV CurioTech", "Join SAP BASIS training in Yeshwanthpur at SV CurioTech. Learn SAP administration concepts with practical sessions and placement support.", "SAP BASIS administration concepts, user management, monitoring, transport basics and system support skills for IT professionals and technical learners."],
  ["sap-ewm-training-in-yeshwanthpur", "SAP EWM", "Best SAP EWM Training in Yeshwanthpur | SV CurioTech", "Learn SAP EWM in Yeshwanthpur with warehouse management training, SAP server access, real-time projects and placement support.", "SAP EWM warehouse management, inbound and outbound process, stock movement, storage and fulfillment scenarios for logistics learners."],
  ["sap-fico-training-in-yeshwanthpur", "SAP FICO", "Best SAP FICO Training in Yeshwanthpur | SV CurioTech", "Learn SAP FICO in Yeshwanthpur with practical finance and controlling training, live projects, interview preparation and placement support at SV CurioTech.", "SAP FICO financial accounting, controlling, general ledger, accounts payable, accounts receivable, asset accounting and cost center scenarios."],
  ["sap-hcm-training-in-yeshwanthpur", "SAP HCM", "Best SAP HCM Training in Yeshwanthpur | SV CurioTech", "Join SAP HCM training in Yeshwanthpur at SV CurioTech. Learn human capital management with practical sessions and placement support.", "SAP HCM employee data, organizational management, personnel administration and HR process training for HR learners and professionals."],
  ["sap-mm-training-in-yeshwanthpur", "SAP MM", "Best SAP MM Training in Yeshwanthpur | SAP MM Course Bangalore", "Join SAP MM training in Yeshwanthpur at SV CurioTech. Learn materials management with practical sessions, SAP server access, real-time projects and placement support.", "SAP MM procurement, purchase orders, vendor master, material master, inventory management and invoice verification training with practical business cases."],
  ["sap-pm-training-in-yeshwanthpur", "SAP PM", "Best SAP PM Training in Yeshwanthpur | SV CurioTech", "Join SAP PM training in Yeshwanthpur at SV CurioTech. Learn plant maintenance concepts with practical sessions, projects and career support.", "SAP PM plant maintenance, equipment management, notifications, maintenance orders and preventive maintenance process training."],
  ["sap-pp-training-in-yeshwanthpur", "SAP PP", "Best SAP PP Training in Yeshwanthpur | SV CurioTech", "Learn SAP PP in Yeshwanthpur with practical production planning training, live projects and placement support from SV CurioTech.", "SAP PP production planning, MRP, BOM, routing, capacity planning and manufacturing process training with practical examples."],
  ["sap-sd-training-in-yeshwanthpur", "SAP SD", "Best SAP SD Training in Yeshwanthpur | SV CurioTech", "Join SAP SD training in Yeshwanthpur at SV CurioTech. Learn sales and distribution with practical classes, live projects and placement support.", "SAP SD order-to-cash, sales orders, pricing, delivery, billing, customer master and sales process training for Bangalore learners."],
];

const commonFaqs = [
  ["Which SAP module should I choose?", "The right SAP module depends on your background. Finance learners often choose SAP FICO, supply chain learners choose SAP MM, sales learners choose SAP SD, technical learners choose SAP ABAP or BASIS, and HR learners choose SuccessFactors or HCM."],
  ["Do you provide practical SAP training?", "Yes. SV CurioTech focuses on practical SAP training with business scenarios, guided assignments, SAP system practice, project-style learning and interview preparation."],
  ["Is placement assistance included?", "Learners receive resume guidance, mock interview support, project explanation practice, job-search direction and placement assistance based on the selected course."],
  ["Are online and classroom batches available?", "Yes. SV CurioTech offers online and classroom SAP training options with weekday and weekend batches based on current schedule availability."],
];

function courseSchema(name, description, url, areaServed = "Bangalore, Karnataka", mode = ["Classroom", "Online"]) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: organization,
    areaServed,
    courseMode: mode,
    url,
    offers: {
      "@type": "Offer",
      category: "SAP training",
      availability: "https://schema.org/InStock",
      url,
    },
  };
}

function faqSchema(faqs = commonFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

function page(pathname, title, description, body, options = {}) {
  const canonical = pathname === "" ? `${siteUrl}/` : `${siteUrl}/${pathname}`;
  const h1 = options.h1 || title.split("|")[0].trim();
  return {
    path: pathname,
    title,
    description,
    keywords: options.keywords || "SAP training, SAP course, SAP training in Bangalore, SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP placement assistance",
    canonical,
    h1,
    body,
    geo: options.geo === undefined ? { region: "IN-KA", placename: "Bangalore" } : options.geo,
    schemas: options.schemas || [courseSchema(h1, description, canonical), faqSchema(options.faqs)],
    links: options.links || [
      ["SAP Courses", `${siteUrl}/courses`],
      ["Course Enquiry", `${siteUrl}/contact#registration`],
      ["SAP FICO Training in Bangalore", `${siteUrl}/sap-fico-training-in-bangalore`],
    ],
  };
}

const pages = [
  page("", "Best SAP Training in Bangalore | SV CurioTech", "Join SV CurioTech for industry-oriented SAP training in Bangalore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, practical projects, interview preparation and career guidance.", "SV CurioTech offers SAP training in Bangalore for freshers, graduates, commerce learners, engineering learners, MBA students, working professionals and career switchers. Explore SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP SuccessFactors, SAP Ariba, SAP Security and SAP GRC with practical training, flexible batches, online and classroom modes, interview preparation, resume guidance and placement assistance.", { h1: "Best SAP Training in Bangalore", schemas: [{ "@context": "https://schema.org", ...organization }, faqSchema()] }),
  page("about", "About SV CurioTech | Practical SAP Training Institute", "Learn about SV CurioTech, a career-focused SAP training institute helping learners build practical SAP skills through live mentoring, projects and interview preparation.", "SV CurioTech helps learners understand SAP with business examples, practical assignments, SAP system practice, flexible batches, trainer guidance and career support. The institute supports students, freshers and working professionals who want SAP skills for finance, procurement, sales, production, HR, technical and enterprise support roles.", { h1: "About SV CurioTech" }),
  page("courses", "SAP Courses in Bangalore | FICO, MM, SD, ABAP, PP | SV CurioTech", "Explore SAP courses at SV CurioTech including SAP FICO, MM, SD, PP, ABAP, SuccessFactors, Ariba, Security and GRC with practical training and placement support.", "Compare SAP courses in Bangalore and choose a module based on your background. SV CurioTech offers SAP FICO for finance, SAP MM for procurement, SAP SD for sales, SAP PP for manufacturing, SAP ABAP for technical learners, SuccessFactors for HR, Ariba for procurement, Security and GRC for access and compliance careers.", { h1: "SAP Courses in Bangalore" }),
  page("placements", "SAP Placement Support in Bangalore | SV CurioTech", "Get SAP placement support through resume preparation, mock interviews, project explanation practice, career guidance and opportunity direction at SV CurioTech.", "SV CurioTech provides SAP placement assistance for learners preparing for SAP consultant, support, analyst and fresher roles. Support includes profile building, resume review, LinkedIn guidance, mock interviews, scenario questions, project explanation and career mentoring.", { h1: "SAP Placement Support in Bangalore" }),
  page("contact", "Contact SV CurioTech | SAP Course Registration", "Contact SV CurioTech for SAP course registration, batch timing, fees, syllabus guidance, online or classroom training and placement support details.", "Register for SAP course guidance at SV CurioTech. Ask about SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SuccessFactors, Ariba, Security and GRC batches, fees, course duration, online and classroom options, interview preparation and placement assistance.", { h1: "Contact SV CurioTech for SAP Training" }),
  page("sap-course-with-placement-bangalore", "Best SAP Course with Placement in Bangalore | SV CurioTech", "Join SV CurioTech for SAP course with placement in Bangalore. Learn SAP FICO, MM, SD, ABAP, PP and SuccessFactors with practical SAP training and placement support.", "SV CurioTech offers SAP course with placement assistance in Bangalore for learners comparing SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP PP and SuccessFactors. Training includes practical classes, real-time business scenarios, SAP server practice, live project exposure, resume building, mock interviews, technical interview preparation, career guidance and job referral support.", { h1: "Best SAP Course with Placement in Bangalore" }),
  page("sap-fico-training-in-bangalore", "SAP FICO Training in Bangalore | SAP FI CO Course | SV CurioTech", "Join SAP FICO Training in Bangalore at SV CurioTech. Learn SAP FI and CO with S/4HANA practice, real-time projects, interview preparation, flexible batches and placement assistance.", "SAP FICO Training in Bangalore at SV CurioTech is designed for freshers, commerce graduates, MBA Finance learners, accountants and working professionals. The course covers SAP FI, SAP CO, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, Cost Center Accounting, Profit Center Accounting, Internal Orders, Product Costing basics, CO-PA, SAP S/4HANA Finance concepts, real-time projects, interview preparation, certification guidance, flexible weekday and weekend batches and placement assistance.", { h1: "SAP FICO Training in Bangalore", keywords: "SAP FICO Training Bangalore, SAP FI Course Bangalore, SAP CO Course Bangalore, SAP S/4HANA Finance Training, SAP FICO Course with Placement Bangalore" }),
  page("sap-training-in-canada", "Online SAP Training for Canada Learners | SV CurioTech", "Join live online SAP training from Canada with SV CurioTech. Learn SAP FICO, MM, SD, PP, ABAP, BASIS, HCM, SuccessFactors and S/4HANA with practical guidance.", "SV CurioTech offers live online SAP training for learners based in Canada. Classes are delivered remotely from India with instructor-led sessions, practical SAP S/4HANA practice, recordings for revision, real business scenarios, SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP SuccessFactors, interview preparation, resume help and career guidance for learners who prefer an online SAP course.", { h1: "Online SAP Training for Canada Learners", geo: null, keywords: "online SAP training Canada, SAP course Canada online, SAP FICO online Canada, SAP MM online Canada, SAP SD online Canada, SAP S/4HANA online training", schemas: [courseSchema("Online SAP Training for Canada Learners", "Live online SAP training for Canada learners covering SAP FICO, MM, SD, ABAP, PP, BASIS, SuccessFactors and S/4HANA.", `${siteUrl}/sap-training-in-canada`, "Canada", "Online"), faqSchema()] }),
  page("sap-fico-training-in-toronto", "Online SAP FICO Training for Toronto Learners | SV CurioTech", "Join live online SAP FICO training for Toronto learners with SV CurioTech. Learn SAP FI and CO through practical finance examples, S/4HANA practice and interview preparation.", "SV CurioTech offers live online SAP FICO training for learners in Toronto who want to convert accounting and finance knowledge into SAP Finance skills. The course explains SAP FI and SAP CO in practical language, covering General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, tax concepts, cost centers, profit centers, internal orders, planning, allocations, profitability analysis, financial reporting and management reporting. Learners understand how vendor invoices, customer billing, payments, procurement, sales, inventory and business operations create financial postings in SAP.", { h1: "Online SAP FICO Training for Toronto Learners", geo: null, keywords: "online SAP FICO training Toronto, SAP FICO course Toronto online, SAP FI training Toronto, SAP CO training Toronto, SAP finance course Canada online", schemas: [courseSchema("Online SAP FICO Training for Toronto Learners", "Online SAP FICO training for Toronto learners covering SAP FI, SAP CO, accounting, controlling, AP, AR, GL, reporting and integration scenarios.", `${siteUrl}/sap-fico-training-in-toronto`, ["Toronto", "Greater Toronto Area", "Canada"], "Online"), faqSchema()] }),
  page("sap-course-in-toronto", "Online SAP Course for Toronto Learners | SV CurioTech", "Join SV CurioTech for live online SAP training for Toronto learners with S/4HANA practice, SAP FICO, MM, SD, PP, ABAP, SuccessFactors and career support.", "SV CurioTech offers a live online SAP course for learners in Toronto and the Greater Toronto Area. Training is remote and supports SAP FICO, MM, SD, PP, ABAP, BASIS, HCM, SuccessFactors and S/4HANA learning with hands-on practice, module selection guidance, certification preparation direction, interview readiness and career support.", { h1: "Online SAP Course for Toronto Learners", geo: null, keywords: "online SAP course Toronto, SAP training Toronto online, SAP FICO Toronto online, SAP MM Toronto online, SAP S/4HANA course Toronto", schemas: [courseSchema("Online SAP Course for Toronto Learners", "Online SAP course for Toronto learners covering SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors and S/4HANA.", `${siteUrl}/sap-course-in-toronto`, ["Toronto", "Greater Toronto Area", "Canada"], "Online"), faqSchema()] }),
  page("sap-training-in-vancouver", "Online SAP Training for Vancouver Learners | SV CurioTech", "Join online SAP training from Vancouver with SV CurioTech. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, S/4HANA, Basis, BW/HANA and BTP.", "SV CurioTech offers practical live online SAP training for learners in Vancouver who want enterprise ERP skills. The course supports SAP FICO, SAP MM, SAP SD, SAP PP, SAP HCM, SuccessFactors, SAP ABAP, SAP Ariba, SAP S/4HANA, SAP Basis, SAP BW/HANA and SAP BTP learning with SAP navigation, process flows, configuration concepts, business cases, project-based learning, interview preparation, resume guidance and career-oriented module selection help.", { h1: "Online SAP Training for Vancouver Learners", geo: null, keywords: "online SAP training Vancouver, SAP course Vancouver online, SAP FICO Vancouver online, SAP MM Vancouver online, SAP S/4HANA Vancouver training", schemas: [courseSchema("Online SAP Training for Vancouver Learners", "Online SAP training for Vancouver learners covering SAP FICO, MM, SD, PP, HCM, SuccessFactors, ABAP, Ariba, S/4HANA, Basis, BW/HANA and BTP.", `${siteUrl}/sap-training-in-vancouver`, ["Vancouver", "British Columbia", "Canada"], "Online"), faqSchema()] }),
  page("sap-training-in-winnipeg", "Online SAP Training for Winnipeg Learners | SV CurioTech", "Join online SAP training from Winnipeg with SV CurioTech. Learn SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and BW/HANA.", "SV CurioTech offers practical live online SAP training for learners in Winnipeg who want enterprise ERP skills. The course supports SAP FICO, SAP MM, SAP SD, SAP PP, SAP Ariba, SAP ABAP, SAP HCM, SAP SuccessFactors, SAP Basis, SAP S/4HANA and SAP BW/HANA learning with business process examples, procurement and finance workflows, module selection guidance, flexible online learning, trainer interaction, practical exercises, interview preparation and career-oriented SAP learning.", { h1: "Online SAP Training for Winnipeg Learners", geo: null, keywords: "online SAP training Winnipeg, SAP course Winnipeg online, SAP FICO Winnipeg online, SAP MM Winnipeg online, SAP S/4HANA Winnipeg training", schemas: [courseSchema("Online SAP Training for Winnipeg Learners", "Online SAP training for Winnipeg learners covering SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and BW/HANA.", `${siteUrl}/sap-training-in-winnipeg`, ["Winnipeg", "Manitoba", "Canada"], "Online"), faqSchema()] }),
  ...locationPages.map(([slug, title, description, area, body]) => page(slug, title, description, body, { h1: title.split("|")[0].trim(), schemas: [courseSchema(title.split("|")[0].trim(), description, `${siteUrl}/${slug}`, area), faqSchema()] })),
  ...yeshwanthpurModules.map(([slug, module, title, description, body]) => page(slug, title, description, `${body} SV CurioTech supports ${module} learners in Yeshwanthpur with practical examples, flexible batches, SAP training guidance, interview preparation, resume support and placement assistance.`, { h1: title.split("|")[0].trim(), schemas: [courseSchema(title.split("|")[0].trim(), description, `${siteUrl}/${slug}`, "Yeshwanthpur, Bangalore"), faqSchema()] })),
  ...courseModules.map(([slug, name, subtitle, body, title, description]) => page(`courses/${slug}`, title, description, `${name} ${subtitle} training at SV CurioTech. ${body} Learners get instructor-led classes, practical assignments, flexible weekday or weekend batches, interview preparation and placement assistance.`, { h1: `${name} Course in Bangalore`, schemas: [courseSchema(`${name} Course in Bangalore`, description, `${siteUrl}/courses/${slug}`), faqSchema()] })),
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function upsertHeadTag(html, selectorRegex, replacement) {
  if (selectorRegex.test(html)) return html.replace(selectorRegex, replacement);
  return html.replace("</head>", `    ${replacement}\n  </head>`);
}

function buildStaticContent(pageData) {
  const links = pageData.links
    .map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`)
    .join("");
  return `<main class="seo-static-shell" aria-label="SV CurioTech page summary"><article><p class="seo-static-kicker">SV CurioTech SAP Training</p><h1>${escapeHtml(pageData.h1)}</h1><p>${escapeHtml(pageData.body)}</p><h2>Helpful SAP training links</h2><ul>${links}</ul><p><a href="${siteUrl}/contact#registration">Request SAP course guidance</a> or call SV CurioTech at +91 6361702540.</p></article></main>`;
}

function buildRouteHtml(baseHtml, pageData) {
  const title = escapeHtml(pageData.title);
  const description = escapeHtml(pageData.description);
  const keywords = escapeHtml(pageData.keywords);
  const canonical = escapeHtml(pageData.canonical);
  const structuredData = pageData.schemas
    .map((schema, index) => `<script type="application/ld+json" data-page-schema="${index}">${JSON.stringify(schema)}</script>`)
    .join("\n    ");

  let html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace('<div id="root"></div>', `<div id="root">\n      ${buildStaticContent(pageData)}\n    </div>`);

  html = upsertHeadTag(html, /<meta name="description" content=".*?"\s*\/?>/s, `<meta name="description" content="${description}" />`);
  html = upsertHeadTag(html, /<meta name="keywords" content=".*?"\s*\/?>/s, `<meta name="keywords" content="${keywords}" />`);
  html = upsertHeadTag(html, /<meta name="robots" content=".*?"\s*\/?>/s, '<meta name="robots" content="index, follow, max-image-preview:large" />');
  html = upsertHeadTag(html, /<link rel="canonical" href=".*?"\s*\/?>/s, `<link rel="canonical" href="${canonical}" />`);
  html = upsertHeadTag(html, /<meta property="og:type" content=".*?"\s*\/?>/s, '<meta property="og:type" content="website" />');
  html = upsertHeadTag(html, /<meta property="og:title" content=".*?"\s*\/?>/s, `<meta property="og:title" content="${title}" />`);
  html = upsertHeadTag(html, /<meta property="og:description" content=".*?"\s*\/?>/s, `<meta property="og:description" content="${description}" />`);
  html = upsertHeadTag(html, /<meta property="og:url" content=".*?"\s*\/?>/s, `<meta property="og:url" content="${canonical}" />`);
  html = upsertHeadTag(html, /<meta property="og:image" content=".*?"\s*\/?>/s, `<meta property="og:image" content="${defaultImage}" />`);
  html = upsertHeadTag(html, /<meta name="twitter:card" content=".*?"\s*\/?>/s, '<meta name="twitter:card" content="summary_large_image" />');
  html = upsertHeadTag(html, /<meta name="twitter:title" content=".*?"\s*\/?>/s, `<meta name="twitter:title" content="${title}" />`);
  html = upsertHeadTag(html, /<meta name="twitter:description" content=".*?"\s*\/?>/s, `<meta name="twitter:description" content="${description}" />`);
  html = upsertHeadTag(html, /<meta name="twitter:image" content=".*?"\s*\/?>/s, `<meta name="twitter:image" content="${defaultImage}" />`);
  html = upsertHeadTag(html, /<script type="application\/ld\+json" data-page-schema(?:="[^"]*")?>.*?<\/script>/s, structuredData);

  if (pageData.geo) {
    html = upsertHeadTag(html, /<meta name="geo\.region" content=".*?"\s*\/?>/s, `<meta name="geo.region" content="${escapeHtml(pageData.geo.region)}" />`);
    html = upsertHeadTag(html, /<meta name="geo\.placename" content=".*?"\s*\/?>/s, `<meta name="geo.placename" content="${escapeHtml(pageData.geo.placename)}" />`);
  } else {
    html = html
      .replace(/\s*<meta name="geo\.region" content=".*?"\s*\/?>/s, "")
      .replace(/\s*<meta name="geo\.placename" content=".*?"\s*\/?>/s, "");
  }

  return html;
}

const baseHtml = await readFile(indexPath, "utf8");

for (const pageData of pages) {
  const routeHtml = buildRouteHtml(baseHtml, pageData);
  if (!pageData.path) {
    await writeFile(indexPath, routeHtml);
    continue;
  }

  const routeDir = path.join(distDir, pageData.path);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), routeHtml);

  if (!pageData.path.includes("/")) {
    await writeFile(path.join(distDir, `${pageData.path}.html`), routeHtml);
  }
}
