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
  ["sap-training-in-yeshwanthpur", "SAP Training in Yeshwanthpur | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Yeshwanthpur with practical SAP modules, live business examples, flexible batches, interview preparation and placement assistance.", "Yeshwanthpur, Bangalore", "SAP training in Yeshwanthpur for freshers, graduates and working professionals. Learn SAP FICO, MM, SD, ABAP, PP, Ariba, SuccessFactors and related modules with business examples, SAP practice, career counselling, interview preparation and placement support."],
  ["sap-training-in-marathahalli", "SAP Training in Marathahalli | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Marathahalli with practical SAP courses, business scenarios, flexible batches, interview preparation and placement assistance.", "Marathahalli, Bangalore", "SAP training in Marathahalli for freshers, graduates and working professionals from Brookefield, Kundalahalli, AECS Layout, Munnekollal, Doddanekundi, Whitefield, Bellandur, Kadubeesanahalli, Varthur, Hoodi and Mahadevapura. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, BASIS, EWM, PM and S/4HANA concepts with trainer-led classes, SAP process examples, assignments, project-style discussions, resume guidance, mock interviews and placement assistance."],
  ["sap-training-in-electronic-city", "SAP Training in Electronic City | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Electronic City with practical SAP modules, business scenarios, flexible batches, interview preparation and placement assistance.", "Electronic City, Bangalore", "SAP training in Electronic City for IT professionals, freshers and career changers near Bommasandra, HSR Layout, Begur, BTM Layout and Koramangala. Learn SAP modules through instructor-led classes, real business scenarios, SAP server practice, interview preparation and career support."],
  ["sap-training-in-hsr-layout", "SAP Training in HSR Layout | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in HSR Layout with practical SAP courses, business scenarios, flexible batches, interview preparation and placement assistance.", "HSR Layout, Bangalore", "SAP training in HSR Layout from SV CurioTech helps freshers, graduates and working professionals become job-ready with practical SAP skills. Learners can enquire for SAP FICO training, SAP MM training, SAP SD training, SAP PP training, SAP ABAP training, SAP HCM, SuccessFactors, Ariba and SAP online training options. The training focuses on live business scenarios, hands-on SAP practice, module selection guidance, resume support, mock interviews, flexible weekday or weekend batches, certification guidance and placement assistance for learners from HSR Layout, Koramangala, BTM Layout, Electronic City, Sarjapur Road and nearby Bengaluru areas."],
  ["sap-training-in-nagarbhavi", "SAP Training in Nagarbhavi | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Nagarbhavi with practical SAP modules, live business examples, flexible batches, interview preparation and placement assistance.", "Nagarbhavi, Bangalore", "SAP training in Nagarbhavi for students, job seekers, graduates and working professionals near Vijayanagar, Rajajinagar, Kengeri and Basaveshwaranagar. Choose SAP FICO, MM, SD, ABAP, PP, SuccessFactors, Ariba and other modules with practical examples and career guidance."],
  ["sap-course-in-jayanagar", "SAP Course in Jayanagar | Practical SAP Training | SV CurioTech", "Join SV CurioTech for SAP course in Jayanagar with practical SAP training, module guidance, projects, flexible batches, interview preparation and placement assistance.", "Jayanagar, Bangalore", "SAP course in Jayanagar for freshers, commerce graduates, engineering graduates, MBA learners and working professionals near JP Nagar, Basavanagudi, Banashankari, BTM Layout and Wilson Garden. Compare SAP modules, get practical training, ask about SAP server access, batch timing, fees and placement support."],
  ["sap-training-in-jp-nagar", "SAP Training in JP Nagar | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in JP Nagar with practical SAP courses, live SAP practice, flexible batches, interview preparation and placement assistance.", "JP Nagar, Bangalore", "SAP training in JP Nagar for freshers, B.Com, BBA, MBA, engineering graduates and working professionals near Jayanagar, BTM Layout, Banashankari and Electronic City. Learn SAP FICO, SAP MM, SAP SD, SAP HCM/HR, SAP ABAP, SAP BASIS, SuccessFactors, S/4HANA and SAP Business One with live SAP server practice, small batches, flexible weekday, weekend and fast-track options, certification guidance, resume building, mock interviews and placement assistance."],
  ["sap-training-in-coimbatore", "SAP Training in Coimbatore | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Coimbatore with practical SAP courses, live S/4HANA practice, business scenarios, interview preparation and placement assistance.", "Coimbatore, Tamil Nadu", "SAP training in Coimbatore for students, graduates and working professionals who want live S/4HANA practice, real business scenarios, module guidance and placement support. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC with practical projects, resume guidance, LinkedIn preparation, mock interviews and weekday, weekend or online batch options."],
  ["sap-training-in-mysore", "SAP Training in Mysore | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Mysore with practical SAP courses, live S/4HANA practice, business scenarios, interview preparation and placement assistance.", "Mysore, Karnataka", "SAP training in Mysore for students, graduates and working professionals who want live S/4HANA practice, real business scenarios, module guidance and placement support. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC with practical projects, resume guidance, LinkedIn preparation, mock interviews and weekday, weekend or online batch options."],
  ["sap-training-in-mangalore", "SAP Training in Mangalore | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Mangalore with practical SAP courses, live S/4HANA practice, business examples, interview preparation and placement assistance.", "Mangalore, Karnataka", "SAP training in Mangalore for students, graduates and working professionals who want live S/4HANA practice, real business scenarios, module guidance and placement support. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, Security and GRC with practical projects, resume guidance, LinkedIn preparation, mock interviews and weekday, weekend or online batch options."],
  ["sap-training-in-kalaburagi", "SAP Training in Kalaburagi | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Kalaburagi with practical SAP FICO, MM, SD, HCM and ABAP classes, flexible batches, interview preparation and placement support.", "Kalaburagi, Karnataka", "SAP training in Kalaburagi helps freshers, graduates, working professionals and business owners build practical ERP skills close to home. SV CurioTech supports SAP FICO training, SAP MM training, SAP SD training, SAP HCM or HR training, SAP ABAP training and other SAP modules with live SAP system practice, small batches, real-time project scenarios, weekday and weekend batches, resume support, SAP-specific mock interviews, certification guidance and placement assistance for learners from finance, commerce, supply chain, HR, sales, engineering and technical backgrounds."],
  ["sap-training-in-belagavi", "SAP Training in Belagavi | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for SAP training in Belagavi with practical SAP courses, S/4HANA practice, business scenarios, interview preparation and placement assistance.", "Belagavi, Karnataka", "SAP training in Belagavi for North Karnataka learners from commerce, engineering, management, manufacturing, finance, HR and IT backgrounds. SV CurioTech teaches SAP with live S/4HANA practice, production orders, material movement, payroll, procurement, finance and sales scenarios, plus resume building, mock interviews and placement assistance."],
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

function localizeModules(modules, location, area, slugLocation) {
  const replacePlace = (value) => value
    .replaceAll("Yeshwanthpur, Bangalore", area)
    .replaceAll("Yeshwanthpur", location)
    .replaceAll("Course Bangalore", `Course ${location}`)
    .replaceAll("course Bangalore", `course ${location}`)
    .replaceAll("Training Bangalore", `Training ${location}`)
    .replaceAll("training Bangalore", `training ${location}`);

  return modules.map(([slug, module, title, description, body]) => {
    const localizedTitle = replacePlace(title).replace(" | SAP MM Course JP Nagar", " | SV CurioTech");
    return [
      slug.replace("yeshwanthpur", slugLocation),
      module,
      localizedTitle,
      replacePlace(description),
      replacePlace(body),
      area,
    ];
  });
}

const locationModules = [
  ...yeshwanthpurModules.map((item) => [...item, "Yeshwanthpur, Bangalore"]),
  ...localizeModules(yeshwanthpurModules, "Marathahalli", "Marathahalli, Bangalore", "marathahalli"),
  ...localizeModules(yeshwanthpurModules, "HSR Layout", "HSR Layout, Bangalore", "hsr-layout"),
  ...localizeModules(yeshwanthpurModules, "JP Nagar", "JP Nagar, Bangalore", "jp-nagar"),
  ...localizeModules(yeshwanthpurModules, "Mysore", "Mysore, Karnataka", "mysore"),
  ...localizeModules(yeshwanthpurModules, "Mangalore", "Mangalore, Karnataka", "mangalore"),
  ...localizeModules(yeshwanthpurModules, "Kalaburagi", "Kalaburagi, Karnataka", "kalaburagi"),
];

const moduleKeywordMap = {
  "SAP ABAP": ["SAP ABAP training", "SAP ABAP course", "SAP technical training", "SAP ABAP classes"],
  "SAP Ariba": ["SAP Ariba training", "SAP Ariba course", "SAP procurement training", "SAP Ariba classes"],
  "SAP BASIS": ["SAP BASIS training", "SAP BASIS course", "SAP administration training", "SAP BASIS classes"],
  "SAP EWM": ["SAP EWM training", "SAP EWM course", "SAP warehouse management training", "SAP EWM classes"],
  "SAP FICO": ["SAP FICO training", "SAP FICO course", "SAP FI training", "SAP CO training", "SAP finance training"],
  "SAP GRC": ["SAP GRC training", "SAP GRC course", "SAP access control training", "SAP compliance training"],
  "SAP HCM": ["SAP HCM training", "SAP HCM course", "SAP HR training", "SAP HCM classes"],
  "SAP MM": ["SAP MM training", "SAP MM course", "SAP materials management training", "SAP MM classes"],
  "SAP PM": ["SAP PM training", "SAP PM course", "SAP plant maintenance training", "SAP PM classes"],
  "SAP PP": ["SAP PP training", "SAP PP course", "SAP production planning training", "SAP PP classes"],
  "SAP SD": ["SAP SD training", "SAP SD course", "SAP sales and distribution training", "SAP SD classes"],
  "SAP Security": ["SAP Security training", "SAP Security course", "SAP authorization training", "SAP security classes"],
  "SAP SuccessFactors": ["SAP SuccessFactors training", "SAP SuccessFactors course", "SAP cloud HCM training", "SAP HR cloud course"],
};

const moduleSeoContent = {
  "SAP FICO": {
    titleSuffix: "Practical SAP FICO Course",
    audience: "finance graduates, B.Com and M.Com learners, MBA Finance students, accountants and working professionals",
    topics: "Financial Accounting, Controlling, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, Cost Center Accounting, Profit Center Accounting, Internal Orders and SAP S/4HANA Finance",
    practice: "financial postings, master data, reporting, procure-to-pay integration, order-to-cash integration and practical finance scenarios",
  },
  "SAP MM": {
    titleSuffix: "Practical SAP MM Course",
    audience: "supply-chain learners, procurement professionals, inventory teams, engineering graduates and working professionals",
    topics: "Enterprise Structure, Material Master, Business Partner and vendor concepts, Purchase Requisitions, Purchase Orders, Inventory Management, Goods Receipt, Invoice Verification, pricing and SAP S/4HANA procurement processes",
    practice: "procure-to-pay flows, purchasing, material movements, inventory scenarios, invoice verification and MM-FI integration",
  },
  "SAP SD": {
    titleSuffix: "Practical SAP SD Course",
    audience: "sales professionals, logistics learners, business graduates, customer-service professionals and ERP career switchers",
    topics: "Enterprise Structure, Customer and Business Partner concepts, Sales Orders, Pricing, Delivery, Shipping, Billing, Credit Management and order-to-cash processes",
    practice: "sales-order processing, pricing, delivery, billing, customer master scenarios and SD-FI integration",
  },
  "SAP ABAP": {
    titleSuffix: "Practical SAP ABAP Course",
    audience: "engineering graduates, computer-science learners, developers, IT professionals and technical career switchers",
    topics: "ABAP programming fundamentals, Data Dictionary, reports, debugging, forms, function modules, BAPIs, BADIs, enhancements and OData concepts",
    practice: "coding exercises, reports, debugging, data handling, enhancements and practical SAP development scenarios",
  },
  "SAP PP": {
    titleSuffix: "Practical SAP PP Course",
    audience: "production professionals, manufacturing learners, mechanical engineers, operations teams and supply-chain professionals",
    topics: "Material Requirements Planning, Bill of Materials, Work Centers, Routings, Capacity Planning, Production Orders and Shop Floor Control",
    practice: "production planning scenarios, MRP runs, BOMs, routings, production orders and manufacturing process flows",
  },
  "SAP HCM": {
    titleSuffix: "Practical SAP HCM Course",
    audience: "HR graduates, MBA HR learners, recruiters, payroll professionals and human-resource teams",
    topics: "Organizational Management, Personnel Administration, employee master data, time-management concepts, payroll concepts and HR processes",
    practice: "employee-data scenarios, organizational structures, personnel processes and practical HR workflows",
  },
  "SAP BASIS": {
    titleSuffix: "Practical SAP BASIS Course",
    audience: "IT graduates, system administrators, infrastructure professionals and technical SAP learners",
    topics: "SAP system administration, user management, client concepts, transports, monitoring, background jobs and system-support fundamentals",
    practice: "user administration, monitoring, transport concepts, system checks and support scenarios",
  },
  "SAP EWM": {
    titleSuffix: "Practical SAP EWM Course",
    audience: "warehouse professionals, logistics learners, supply-chain professionals and inventory teams",
    topics: "warehouse structure, inbound processing, outbound processing, stock movements, storage processes and warehouse execution",
    practice: "inbound, outbound, putaway, picking, stock movement and warehouse process scenarios",
  },
  "SAP PM": {
    titleSuffix: "Practical SAP PM Course",
    audience: "maintenance professionals, mechanical engineers, plant teams and manufacturing professionals",
    topics: "Technical Objects, Equipment, Functional Locations, Notifications, Maintenance Orders, Preventive Maintenance and maintenance planning",
    practice: "equipment management, notifications, maintenance orders and preventive-maintenance scenarios",
  },
  "SAP Ariba": {
    titleSuffix: "Practical SAP Ariba Course",
    audience: "procurement professionals, supply-chain learners, purchasing teams and sourcing professionals",
    topics: "Sourcing, Contracts, Buying, Invoicing, Supplier Management, Ariba Network and procurement collaboration",
    practice: "sourcing, supplier collaboration, buying, invoicing and procurement-process scenarios",
  },
};

const moduleCoursePaths = {
  "SAP ABAP": "courses/sap-abap",
  "SAP Ariba": "courses/sap-ariba",
  "SAP FICO": "courses/sap-fico",
  "SAP MM": "courses/sap-mm",
  "SAP PP": "courses/sap-pp",
  "SAP SD": "courses/sap-sd",
};

function keywordList(items) {
  return [...new Set(items.filter(Boolean))].join(", ");
}

function locationKeywords(slug, place) {
  const primary = slug.includes("sap-course-in-") ? `SAP course in ${place}` : `SAP training in ${place}`;
  return keywordList([
    primary,
    `SAP training in ${place}`,
    `SAP course in ${place}`,
    `SAP classes in ${place}`,
    `SAP training institute in ${place}`,
    `SAP courses with placement in ${place}`,
  ]);
}

function moduleLocationKeywords(module, place) {
  const phrases = moduleKeywordMap[module] || [`${module} training`, `${module} course`, `${module} classes`];
  return keywordList([
    `${phrases[0]} in ${place}`,
    ...phrases.slice(1).map((phrase) => `${phrase} in ${place}`),
    `${module} placement training in ${place}`,
  ]);
}

function buildModuleLocationSeo(module, place) {
  const data = moduleSeoContent[module];

  if (!data) {
    return {
      title: `${module} Training in ${place} | Practical SAP Course`,
      body: `Learn ${module} in ${place} through practical SAP training, business scenarios, guided assignments and SAP system practice.`,
    };
  }

  return {
    title: `${module} Training in ${place} | ${data.titleSuffix}`,
    body: `${module} training in ${place} is designed for ${data.audience}. The course covers ${data.topics}. Learners build practical understanding through ${data.practice}. Training also includes guided SAP practice, business-process explanation, interview preparation, resume guidance and career support.`,
  };
}

function locationSlugForPlace(place) {
  return place === "Jayanagar" ? "sap-course-in-jayanagar" : `sap-training-in-${place.toLowerCase().replaceAll(" ", "-")}`;
}

function courseModuleKeywords(name) {
  const phrases = moduleKeywordMap[name] || [`${name} training`, `${name} course`, `${name} classes`];
  return keywordList([
    `${phrases[1] || `${name} course`} in Bangalore`,
    `${phrases[0]} in Bangalore`,
    ...phrases.slice(2, 5).map((phrase) => `${phrase} Bangalore`),
    `${name} course with placement Bangalore`,
  ]);
}

const commonFaqs = [
  ["Which SAP module should I choose?", "The right SAP module depends on your background. Finance learners often choose SAP FICO, supply chain learners choose SAP MM, sales learners choose SAP SD, technical learners choose SAP ABAP or BASIS, and HR learners choose SuccessFactors or HCM."],
  ["Do you provide practical SAP training?", "Yes. SV CurioTech focuses on practical SAP training with business scenarios, guided assignments, SAP system practice, project-style learning and interview preparation."],
  ["Is placement assistance included?", "Learners receive resume guidance, mock interview support, project explanation practice, job-search direction and placement assistance based on the selected course."],
  ["Are online and classroom batches available?", "Yes. SV CurioTech offers online and classroom SAP training options with weekday and weekend batches based on current schedule availability."],
];

const canadaFaqs = [
  ["Which is the best SAP course in Canada?", "The best SAP course depends on your background and career goal. Finance learners often choose SAP FICO, procurement learners choose SAP MM or Ariba, sales learners choose SAP SD, technical learners choose SAP ABAP or Basis, and HR learners choose SuccessFactors."],
  ["Can beginners join SAP training in Canada?", "Yes. Beginners can start with SAP basics, ERP concepts and module guidance before moving into configuration, transactions and practical business scenarios."],
  ["Is this SAP course available online for Canada learners?", "Yes. SV CurioTech offers live online SAP training for learners in Canada with trainer-led classes, practical assignments, recordings for revision and career guidance."],
  ["Will I get SAP S/4HANA practical exposure?", "Training includes SAP S/4HANA awareness, process explanation, hands-on practice and module-specific examples based on the selected SAP course."],
  ["Does SV CurioTech provide SAP certification guidance?", "Yes. Learners receive topic-wise revision and certification preparation guidance. Official SAP certification is separate from course completion and depends on SAP's current exam process."],
  ["Is placement guaranteed after SAP training?", "No genuine training provider should promise a job guarantee. SV CurioTech provides resume support, LinkedIn guidance, mock interviews and placement assistance to improve readiness."],
];

const dataAnalyticsBellaryFaqs = [
  ["Is there a good data analytics course in Bellary, or do I need to go to Bangalore?", "You do not need to relocate. This course runs live for Ballari learners with Excel, SQL, Python, Power BI, projects, portfolio building and placement support."],
  ["Do I need programming experience?", "No. Python starts from variables and loops. Many learners begin without any coding background."],
  ["How long is the course?", "The data analytics course is two to three months part-time."],
  ["Can I do this alongside a full-time job?", "Yes. Weekend and evening batches are designed for working professionals who can practise eight to ten hours a week."],
  ["What jobs can I apply for after finishing?", "Learners can apply for Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, Power BI Developer and operations analytics roles."],
  ["Do you offer classes in Kannada?", "Course material is in English, while explanations and doubt-clearing can be in Kannada, English or Telugu."],
  ["Is this useful if I am searching for a data analytics institute near me?", "Yes. The course is designed for Bellary, Ballari and nearby district learners who want live data analytics training without relocating for several months."],
  ["Do you cover Power BI training in Bellary separately?", "Power BI is a full module covering data connection, cleaning, modelling, DAX, dashboard design and project presentation."],
  ["Will I learn SQL and Python from scratch?", "Yes. SQL starts with SELECT queries and moves into joins, subqueries, CTEs and window functions. Python starts from basics before Pandas, NumPy and visualisation."],
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

const serverAccessFaqs = [
  ["What is SAP server access?", "SAP server access lets learners connect to a SAP practice environment and work on transactions, master data, reports, business processes and assignments."],
  ["Is this the same as SAP Learning practice systems?", "No. SAP Learning practice systems are SAP's own official learning environments. SV CurioTech provides independent SAP access guidance and training support based on available practice environments."],
  ["Can I practise SAP FICO, MM and SD?", "Module availability depends on the current SAP environment. You can enquire for SAP FICO, MM, SD, PP, ABAP, HANA, S/4HANA and other available modules before payment."],
  ["Is SAP server access useful for interviews?", "Yes. Repeated practice helps learners explain SAP screens, transaction flow, master data, integration and project-style scenarios with more confidence."],
  ["How long can I use SAP server access?", "Access duration depends on the selected plan. Common options include 1 month, 3 months, 6 months and 1 year, subject to current availability."],
  ["Does server access guarantee a job?", "No. Server access helps practical learning and interview readiness, but job outcomes depend on skill, practice, communication, market conditions and learner effort."],
];

const sapFicoBlogFaqs = [
  ["Can freshers learn SAP FICO?", "Yes. Freshers can learn SAP FICO if they start with accounting basics, SAP navigation and structured FI/CO concepts before moving into configuration and projects."],
  ["Is SAP FICO useful for finance professionals?", "Yes. Finance and accounting professionals can connect their existing business knowledge with SAP processes, reporting, postings and controlling concepts."],
  ["Does SAP FICO require coding?", "SAP FICO is mainly a functional module, so coding is not the primary requirement. Understanding business processes, accounting and configuration is more important."],
  ["Why is SAP server practice important for FICO?", "Server practice helps learners understand real screens, transaction flow, document postings, reports and integration points instead of learning only from notes."],
  ["Is placement guaranteed after SAP FICO training?", "No genuine institute should promise a job guarantee only because a learner joined a course. Training, practice, interview preparation and learner effort together improve readiness."],
  ["How long does SAP FICO training take?", "Duration depends on the learner's background, batch mode and course depth. A practical course should allow enough time for FI, CO, integration, S/4HANA concepts, assignments and interview preparation."],
  ["Is SAP FICO good for B.Com students?", "Yes. B.Com and commerce learners often have a useful foundation for SAP FICO because the module connects strongly with accounting, finance reporting and business transactions."],
  ["Is SAP FICO better than SAP MM?", "Neither is automatically better. SAP FICO is usually stronger for finance and accounting learners, while SAP MM is better suited for procurement, inventory and supply-chain interests."],
];

function articleSchema(name, description, url, datePublished = "2026-09-04") {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description,
    author: { "@type": "Organization", name: "SV CurioTech" },
    publisher: {
      "@type": "Organization",
      name: "SV CurioTech",
      logo: { "@type": "ImageObject", url: `${siteUrl}/assets/sv-curiotech-logo.jpg` },
    },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: url,
  };
}

function serviceSchema(name, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "SAP practice server access",
    description,
    provider: organization,
    areaServed: ["India", "Bangalore", "Online"],
    offers: ["1 Month", "3 Months", "6 Months", "1 Year"].map((duration) => ({
      "@type": "Offer",
      name: `${duration} SAP server access`,
      category: "SAP server access",
      availability: "https://schema.org/InStock",
      url,
    })),
  };
}

function page(pathname, title, description, body, options = {}) {
  const canonical = options.canonical || (pathname === "" ? `${siteUrl}/` : `${siteUrl}/${pathname}`);
  const h1 = options.h1 || title.split("|")[0].trim();
  return {
    path: pathname,
    title,
    description,
    keywords: options.keywords || keywordList([h1, `${h1} SV CurioTech`, "SAP course guidance", "SAP training support"]),
    canonical,
    h1,
    body,
    geo: options.geo === undefined ? { region: "IN-KA", placename: "Bangalore" } : options.geo,
    schemas: options.schemas || [courseSchema(h1, description, canonical), faqSchema(options.faqs)],
    staticKicker: options.staticKicker || "SV CurioTech SAP Training",
    linkHeading: options.linkHeading || "Helpful SAP training links",
    ctaText: options.ctaText || "Request SAP course guidance",
    ctaHref: options.ctaHref || `${siteUrl}/contact#registration`,
    links: options.links || [
      ["SAP Courses", `${siteUrl}/courses`],
      ["Course Enquiry", `${siteUrl}/contact#registration`],
      ["SAP FICO Training in Bangalore", `${siteUrl}/sap-fico-training-in-bangalore`],
    ],
  };
}

const pages = [
  page("", "SAP Training in Bangalore | Practical SAP Courses | SV CurioTech", "Join SV CurioTech for industry-oriented SAP training in Bangalore with SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, practical projects, interview preparation and career guidance.", "SV CurioTech offers SAP training in Bangalore for freshers, graduates, commerce learners, engineering learners, MBA students, working professionals and career switchers. Explore SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP SuccessFactors, SAP Ariba, SAP Security and SAP GRC with practical training, flexible batches, online and classroom modes, interview preparation, resume guidance and placement assistance.", { h1: "SAP Training in Bangalore", keywords: "SAP training in Bangalore, SAP training institute in Bangalore, SAP courses in Bangalore, SAP classes in Bangalore, practical SAP training Bangalore", links: [["SAP Courses", `${siteUrl}/courses`], ["SAP Course in Canada", `${siteUrl}/sap-course-in-canada`], ["SAP FICO Career Guide", `${siteUrl}/blog/sap-fico-training-bangalore-career-guide`], ["SAP FICO Training in Bangalore", `${siteUrl}/sap-fico-training-in-bangalore`], ["Course Enquiry", `${siteUrl}/contact#registration`]], schemas: [{ "@context": "https://schema.org", ...organization }, faqSchema()] }),
  page("about", "About SV CurioTech | Practical SAP Training Institute", "Learn about SV CurioTech, a career-focused SAP training institute helping learners build practical SAP skills through live mentoring, projects and interview preparation.", "SV CurioTech helps learners understand SAP with business examples, practical assignments, SAP system practice, flexible batches, trainer guidance and career support. The institute supports students, freshers and working professionals who want SAP skills for finance, procurement, sales, production, HR, technical and enterprise support roles.", { h1: "About SV CurioTech" }),
  page("courses", "SAP Courses in Bangalore | FICO, MM, SD, ABAP, PP | SV CurioTech", "Explore SAP courses at SV CurioTech including SAP FICO, MM, SD, PP, ABAP, SuccessFactors, Ariba, Security and GRC with practical training and placement support.", "Compare SAP courses in Bangalore and choose a module based on your background. SV CurioTech offers SAP FICO for finance, SAP MM for procurement, SAP SD for sales, SAP PP for manufacturing, SAP ABAP for technical learners, SuccessFactors for HR, Ariba for procurement, Security and GRC for access and compliance careers.", { h1: "SAP Courses in Bangalore", keywords: "SAP courses in Bangalore, SAP FICO course Bangalore, SAP MM course Bangalore, SAP SD course Bangalore, SAP ABAP course Bangalore, SAP PP course Bangalore, SAP certification courses Bangalore" }),
  page("placements", "SAP Placement Assistance in Bangalore | SV CurioTech", "Get SAP placement assistance through resume preparation, mock interviews, project explanation practice, career guidance and opportunity direction at SV CurioTech.", "SV CurioTech provides SAP placement assistance for learners preparing for SAP consultant, support, analyst and fresher roles. Support includes profile building, resume review, LinkedIn guidance, mock interviews, scenario questions, project explanation and career mentoring.", { h1: "SAP Placement Assistance in Bangalore", keywords: "SAP placement assistance in Bangalore, SAP placement support Bangalore, SAP job assistance Bangalore, SAP interview preparation Bangalore, SAP career support Bangalore" }),
  page("contact", "Contact SV CurioTech | SAP Course Registration", "Contact SV CurioTech for SAP course registration, batch timing, fees, syllabus guidance, online or classroom training and placement support details.", "Register for SAP course guidance at SV CurioTech. Ask about SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SuccessFactors, Ariba, Security and GRC batches, fees, course duration, online and classroom options, interview preparation and placement assistance.", { h1: "Contact SV CurioTech for SAP Training" }),
  page("blog/sap-fico-training-bangalore-career-guide", "Best SAP FICO Training in Bangalore | Course, Syllabus & Career Guide", "Read this SAP FICO training guide for Bangalore learners. Understand FI, CO, S/4HANA Finance, syllabus, hands-on practice, career paths and institute selection tips.", "This SAP FICO training guide for Bangalore learners explains Financial Accounting, Controlling, SAP S/4HANA Finance, course syllabus, hands-on server practice, real-time project preparation, integration with SAP MM, SD and PP, and SAP FICO career paths. Key takeaways include FI and CO fundamentals, S/4HANA Finance awareness, hands-on SAP server practice, realistic placement preparation and interview-ready business process explanation. The guide compares SAP FI, SAP CO and S/4HANA Finance, outlines detailed SAP FICO syllabus topics such as General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, cost centers, profit centers, internal orders, procure-to-pay integration, order-to-cash integration and reporting, and includes an audio article summary for learners who prefer listening. It is written for freshers, commerce graduates, accountants, finance professionals, MBA Finance learners and career switchers who want practical SAP FICO knowledge instead of only transaction-code memorization.", { h1: "Best SAP FICO Training in Bangalore: Practical Course, Syllabus and Career Guide", keywords: "SAP FICO training in Bangalore, SAP FICO course Bangalore, best SAP FICO training institute Bangalore, SAP FI CO syllabus, SAP S/4HANA Finance training, SAP FICO career guide, SAP FICO for freshers", staticKicker: "SV CurioTech Blog", linkHeading: "Article resources", ctaText: "Ask for SAP FICO course guidance", ctaHref: `${siteUrl}/contact?course=SAP%20FICO#registration`, links: [["Listen to article audio", `${siteUrl}/assets/blog/sap-fico-career-guide-audio.mpeg`], ["SAP server access for practice", `${siteUrl}/sap-server-access`], ["SAP FICO course enquiry", `${siteUrl}/contact?course=SAP%20FICO#registration`]], schemas: [articleSchema("Best SAP FICO Training in Bangalore - Practical Course, Syllabus and Career Guide", "A practical SAP FICO training guide for Bangalore learners covering FI, CO, S/4HANA Finance, hands-on practice, syllabus, skills and career paths.", `${siteUrl}/blog/sap-fico-training-bangalore-career-guide`), faqSchema(sapFicoBlogFaqs)] }),
  page("sap-server-access", "SAP Server Access for Practice | FICO, MM, SD, ABAP, S/4HANA | SV CurioTech", "Request SAP server access for hands-on practice with FICO, MM, SD, PP, ABAP, HANA and S/4HANA scenarios. Access plans, setup guidance, module availability and honest support details.", "SAP server access from SV CurioTech helps students, freshers, working professionals, consultants and trainers practise SAP transactions, master data, process flows, assignments and interview scenarios. This independent SAP access page helps learners confirm SAP practice system availability, module scope, login method, access duration, setup guidance, pricing and support before payment. Enquire for SAP FICO server access, SAP MM practice server, SAP SD server access, SAP ABAP practice server, SAP PP, SAP HANA and SAP S/4HANA access based on current availability. SV CurioTech is not SAP Learning; learners who need official SAP Learning practice systems should use SAP's own platform.", { h1: "SAP Server Access for Real Hands-On Practice", keywords: "SAP server access, SAP practice system access, SAP access for practice, SAP IDES server access, SAP FICO server access, SAP MM server access, SAP SD server access, SAP ABAP practice server, SAP S/4HANA server access, SAP server access Bangalore, SAP practice server India", staticKicker: "SV SAP Access Lab", linkHeading: "SAP server access details", ctaText: "Check SAP server access plans", ctaHref: `${siteUrl}/sap-server-access#server-access-enquiry`, links: [["SAP server access plans", `${siteUrl}/sap-server-access#server-access-enquiry`], ["WhatsApp SAP access team", `https://wa.me/916361702540?text=Hi%20SV%20CurioTech%2C%20I%20need%20SAP%20server%20access%20details.`]], schemas: [serviceSchema("SAP Server Access for Hands-On Practice", "Independent SAP server access guidance for hands-on practice, assignments, interview preparation, trainer demos and module revision across available SAP environments.", `${siteUrl}/sap-server-access`), faqSchema(serverAccessFaqs)] }),
  page("sap-course-with-placement-bangalore", "SAP Course with Placement in Bangalore | SV CurioTech", "Join SV CurioTech for SAP course with placement in Bangalore. Learn SAP FICO, MM, SD, ABAP, PP and SuccessFactors with practical SAP training and placement support.", "SV CurioTech offers SAP course with placement assistance in Bangalore for learners comparing SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP PP and SuccessFactors. Training includes practical classes, real-time business scenarios, SAP server practice, live project exposure, resume building, mock interviews, technical interview preparation, career guidance and job referral support.", { h1: "SAP Course with Placement in Bangalore", keywords: "SAP course with placement in Bangalore, SAP training with placement Bangalore, SAP placement course Bangalore, job oriented SAP course Bangalore, SAP placement assistance Bangalore" }),
  page("data-analytics-course-in-Bellary", "Data Analytics Course in Bellary | Live Classes + Placement", "Learn Excel, SQL, Python and Power BI with a data analytics course in Bellary. Weekend and evening batches, real projects, and placement support.", "SV CurioTech offers a data analytics course in Bellary for Ballari learners who want practical skills in Excel, SQL, Python, Power BI, Tableau, statistics, dashboards, MIS reporting, business analysis, capstone projects and interview preparation. This data analyst course Bellary learners can attend live is designed for final year students, recent graduates, working professionals in manufacturing, mining support services, banking, retail, logistics, career restarters and small business owners. Learners searching for data analytics training in Ballari, data analytics classes Bellary, Power BI training Bellary, SQL classes Bellary, Python for data analytics, Tableau training Bellary, Excel training for data analytics, business analyst course Bellary, MIS reporting course Bellary or a data analytics institute near me get one structured pathway with live classes, recordings, weekend and evening batches, real datasets, portfolio building, resume review, mock interviews, referrals and placement support for data analyst, business analyst, MIS executive, reporting analyst, Power BI developer and operations analytics roles. The course roadmap covers Excel and Power Query, SQL joins and window functions, Python with Pandas and NumPy, Power BI dashboards with DAX, Tableau basics, statistics, capstone work and interview preparation. Learners leave with an Excel MIS report, SQL practice set, Python notebook, Power BI dashboard, capstone project, resume, LinkedIn profile and project explanation script.", { h1: "Data Analytics Course in Bellary", keywords: "data analytics course in Bellary, data analytics training in Ballari, data analyst course Bellary, data analytics institute in Bellary, data analytics classes Bellary, data analytics institute near me, Power BI training Bellary, SQL classes Bellary, Python for data analytics, Excel training for data analytics, business analyst course Bellary, MIS reporting course Bellary, data visualization course Bellary, Tableau training Bellary, data analytics course with placement Bellary", geo: { region: "IN-KA", placename: "Bellary, Karnataka" }, staticKicker: "SV CurioTech Analytics Lab", linkHeading: "Data analytics course details", ctaText: "Book a free data analytics demo class", ctaHref: `${siteUrl}/data-analytics-course-in-Bellary#demo`, links: [["Data analytics demo class", `${siteUrl}/data-analytics-course-in-Bellary#demo`], ["Course enquiry", `${siteUrl}/contact?course=Data%20Analytics%20Course%20in%20Bellary#registration`], ["SV CurioTech", `${siteUrl}/`]], schemas: [{ "@context": "https://schema.org", "@type": "Course", name: "Data Analytics Course in Bellary", description: "Live data analytics course in Bellary covering Excel, SQL, Python, Power BI, Tableau, statistics, MIS reporting, capstone projects, portfolio building and placement support.", provider: organization, areaServed: ["Bellary", "Ballari", "Hospet", "Sandur", "Kudligi", "Siruguppa", "Hubballi"], courseMode: ["Live Online", "Weekend", "Evening"], url: `${siteUrl}/data-analytics-course-in-Bellary`, offers: { "@type": "Offer", category: "Data analytics training", availability: "https://schema.org/InStock", url: `${siteUrl}/data-analytics-course-in-Bellary` } }, faqSchema(dataAnalyticsBellaryFaqs)] }),
  page("sap-fico-training-in-bangalore", "SAP FICO Training in Bangalore | SAP FI CO Course | SV CurioTech", "Join SAP FICO Training in Bangalore at SV CurioTech. Learn SAP FI and CO with S/4HANA practice, real-time projects, interview preparation, flexible batches and placement assistance.", "SAP FICO Training in Bangalore at SV CurioTech is designed for freshers, commerce graduates, MBA Finance learners, accountants and working professionals. The course covers SAP FI, SAP CO, General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, Cost Center Accounting, Profit Center Accounting, Internal Orders, Product Costing basics, CO-PA, SAP S/4HANA Finance concepts, real-time projects, interview preparation, certification guidance, flexible weekday and weekend batches and placement assistance.", { h1: "SAP FICO Training in Bangalore", keywords: "SAP FICO training in Bangalore, SAP FICO course in Bangalore, SAP FI training Bangalore, SAP CO training Bangalore, SAP S/4HANA Finance training Bangalore, SAP FICO course with placement Bangalore" }),
  page("sap-course-in-canada", "SAP Course in Canada | Online SAP Training & Certification Guidance", "Learn SAP in Canada with live online SAP training, S/4HANA practice, real-time projects, expert guidance, interview preparation and career-focused SAP modules.", "SV CurioTech offers a practical SAP course in Canada for learners who want career-ready ERP skills. The program supports SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP Ariba, SAP SuccessFactors and SAP S/4HANA learning with live online classes, SAP navigation, business process examples, module configuration concepts, master data, transactions, integration scenarios, project exposure, certification preparation guidance, resume support, interview practice and career counselling for students, fresh graduates, working professionals, IT learners, finance professionals, supply chain professionals, HR professionals and career switchers.", { h1: "SAP Course in Canada for Practical ERP Career Skills", geo: null, keywords: "SAP Course in Canada, SAP Training in Canada, SAP Courses in Canada, SAP Certification in Canada, SAP S/4HANA Course in Canada, SAP Online Course Canada, SAP FICO Course in Canada, SAP MM Course in Canada, SAP SD Course in Canada, SAP ABAP Course in Canada", ctaText: "Get Canada SAP course details", ctaHref: `${siteUrl}/sap-course-in-canada#enquiry`, links: [["SAP FICO Course", `${siteUrl}/courses/sap-fico`], ["SAP MM Course", `${siteUrl}/courses/sap-mm`], ["SAP SD Course", `${siteUrl}/courses/sap-sd`], ["SAP Course in Toronto", `${siteUrl}/sap-course-in-toronto`], ["SAP Training in Vancouver", `${siteUrl}/sap-training-in-vancouver`], ["Course Enquiry", `${siteUrl}/sap-course-in-canada#enquiry`]], schemas: [courseSchema("SAP Course in Canada", "Live online SAP course in Canada covering SAP FICO, MM, SD, PP, ABAP, Ariba, SuccessFactors and S/4HANA with practical training, project scenarios, certification guidance and career support.", `${siteUrl}/sap-course-in-canada`, "Canada", "Online"), faqSchema(canadaFaqs)] }),
  page("sap-training-in-canada", "SAP Course in Canada | Online SAP Training & Certification Guidance", "Learn SAP in Canada with live online SAP training, S/4HANA practice, real-time projects, expert guidance, interview preparation and career-focused SAP modules.", "SV CurioTech offers a practical SAP course in Canada for learners who want career-ready ERP skills. The program supports SAP FICO, SAP MM, SAP SD, SAP PP, SAP ABAP, SAP Ariba, SAP SuccessFactors and SAP S/4HANA learning with live online classes, business process examples, hands-on practice, certification preparation guidance and career support.", { h1: "SAP Course in Canada for Practical ERP Career Skills", canonical: `${siteUrl}/sap-course-in-canada`, geo: null, keywords: "SAP Course in Canada, SAP Training in Canada, SAP Courses in Canada, SAP Certification in Canada, SAP S/4HANA Course in Canada, SAP Online Course Canada", ctaText: "Get Canada SAP course details", ctaHref: `${siteUrl}/sap-course-in-canada#enquiry`, links: [["SAP Course in Canada", `${siteUrl}/sap-course-in-canada`], ["SAP Course in Toronto", `${siteUrl}/sap-course-in-toronto`], ["SAP Training in Vancouver", `${siteUrl}/sap-training-in-vancouver`], ["SAP Training in Winnipeg", `${siteUrl}/sap-training-in-winnipeg`]], schemas: [courseSchema("SAP Course in Canada", "Live online SAP course in Canada covering SAP FICO, MM, SD, PP, ABAP, Ariba, SuccessFactors and S/4HANA with practical training, project scenarios, certification guidance and career support.", `${siteUrl}/sap-course-in-canada`, "Canada", "Online"), faqSchema(canadaFaqs)] }),
  page("sap-fico-training-in-toronto", "Online SAP FICO Training for Toronto Learners | SV CurioTech", "Join live online SAP FICO training for Toronto learners with SV CurioTech. Learn SAP FI and CO through practical finance examples, S/4HANA practice and interview preparation.", "SV CurioTech offers live online SAP FICO training for learners in Toronto who want to convert accounting and finance knowledge into SAP Finance skills. The course explains SAP FI and SAP CO in practical language, covering General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, Bank Accounting, tax concepts, cost centers, profit centers, internal orders, planning, allocations, profitability analysis, financial reporting and management reporting. Learners understand how vendor invoices, customer billing, payments, procurement, sales, inventory and business operations create financial postings in SAP.", { h1: "Online SAP FICO Training for Toronto Learners", geo: null, keywords: "online SAP FICO training Toronto, SAP FICO course Toronto online, SAP FI training Toronto, SAP CO training Toronto, SAP finance course Canada online", schemas: [courseSchema("Online SAP FICO Training for Toronto Learners", "Online SAP FICO training for Toronto learners covering SAP FI, SAP CO, accounting, controlling, AP, AR, GL, reporting and integration scenarios.", `${siteUrl}/sap-fico-training-in-toronto`, ["Toronto", "Greater Toronto Area", "Canada"], "Online"), faqSchema()] }),
  page("sap-fico-training-in-calgary", "SAP FICO Training in Calgary, Alberta | SV CurioTech", "Join live online SAP FICO training for Calgary learners. Study SAP FI, CO, S/4HANA Finance, accounting processes, integration and reporting with practical guidance.", "SV CurioTech offers online SAP FICO training for Calgary learners from accounting, finance, commerce, business analysis and ERP backgrounds. Learn General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, bank and tax concepts, document processing, periodic activities, cost centers, profit centers, internal orders, allocations, planning, profitability analysis, financial reporting, management reporting and integration with SAP MM and SAP SD. Training connects classic SAP FICO concepts with SAP S/4HANA Finance through practical business-process explanations.", { h1: "SAP FICO Training in Calgary, Alberta", geo: { region: "CA-AB", placename: "Calgary, Alberta" }, keywords: "SAP FICO training Calgary, SAP FICO course Calgary, SAP FI training Alberta, SAP CO training Calgary, SAP S/4HANA Finance course Calgary, online SAP training Calgary", links: [["SAP FICO Course", `${siteUrl}/courses/sap-fico`], ["SAP Training in Canada", `${siteUrl}/sap-course-in-canada`], ["Course Enquiry", `${siteUrl}/contact#registration`]], schemas: [courseSchema("Online SAP FICO Training for Calgary Learners", "Practical online SAP FICO training for Calgary learners covering FI, CO, S/4HANA Finance, integration and reporting.", `${siteUrl}/sap-fico-training-in-calgary`, ["Calgary", "Alberta", "Canada"], "Online"), faqSchema()] }),
  page("sap-course-in-toronto", "Online SAP Course for Toronto Learners | SV CurioTech", "Join SV CurioTech for live online SAP training for Toronto learners with S/4HANA practice, SAP FICO, MM, SD, PP, ABAP, SuccessFactors and career support.", "SV CurioTech offers a live online SAP course for learners in Toronto and the Greater Toronto Area. Training is remote and supports SAP FICO, MM, SD, PP, ABAP, BASIS, HCM, SuccessFactors and S/4HANA learning with hands-on practice, module selection guidance, certification preparation direction, interview readiness and career support.", { h1: "Online SAP Course for Toronto Learners", geo: null, keywords: "online SAP course Toronto, SAP training Toronto online, SAP FICO Toronto online, SAP MM Toronto online, SAP S/4HANA course Toronto", schemas: [courseSchema("Online SAP Course for Toronto Learners", "Online SAP course for Toronto learners covering SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors and S/4HANA.", `${siteUrl}/sap-course-in-toronto`, ["Toronto", "Greater Toronto Area", "Canada"], "Online"), faqSchema()] }),
  page("sap-training-in-vancouver", "Online SAP Training for Vancouver Learners | SV CurioTech", "Join online SAP training from Vancouver with SV CurioTech. Learn SAP FICO, MM, SD, PP, ABAP, HCM, SuccessFactors, Ariba, S/4HANA, Basis, BW/HANA and BTP.", "SV CurioTech offers practical live online SAP training for learners in Vancouver who want enterprise ERP skills. The course supports SAP FICO, SAP MM, SAP SD, SAP PP, SAP HCM, SuccessFactors, SAP ABAP, SAP Ariba, SAP S/4HANA, SAP Basis, SAP BW/HANA and SAP BTP learning with SAP navigation, process flows, configuration concepts, business cases, project-based learning, interview preparation, resume guidance and career-oriented module selection help.", { h1: "Online SAP Training for Vancouver Learners", geo: null, keywords: "online SAP training Vancouver, SAP course Vancouver online, SAP FICO Vancouver online, SAP MM Vancouver online, SAP S/4HANA Vancouver training", schemas: [courseSchema("Online SAP Training for Vancouver Learners", "Online SAP training for Vancouver learners covering SAP FICO, MM, SD, PP, HCM, SuccessFactors, ABAP, Ariba, S/4HANA, Basis, BW/HANA and BTP.", `${siteUrl}/sap-training-in-vancouver`, ["Vancouver", "British Columbia", "Canada"], "Online"), faqSchema()] }),
  page("sap-training-in-winnipeg", "Online SAP Training for Winnipeg Learners | SV CurioTech", "Join online SAP training from Winnipeg with SV CurioTech. Learn SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and BW/HANA.", "SV CurioTech offers practical live online SAP training for learners in Winnipeg who want enterprise ERP skills. The course supports SAP FICO, SAP MM, SAP SD, SAP PP, SAP Ariba, SAP ABAP, SAP HCM, SAP SuccessFactors, SAP Basis, SAP S/4HANA and SAP BW/HANA learning with business process examples, procurement and finance workflows, module selection guidance, flexible online learning, trainer interaction, practical exercises, interview preparation and career-oriented SAP learning.", { h1: "Online SAP Training for Winnipeg Learners", geo: null, keywords: "online SAP training Winnipeg, SAP course Winnipeg online, SAP FICO Winnipeg online, SAP MM Winnipeg online, SAP S/4HANA Winnipeg training", schemas: [courseSchema("Online SAP Training for Winnipeg Learners", "Online SAP training for Winnipeg learners covering SAP FICO, MM, SD, PP, Ariba, ABAP, HCM, SuccessFactors, Basis, S/4HANA and BW/HANA.", `${siteUrl}/sap-training-in-winnipeg`, ["Winnipeg", "Manitoba", "Canada"], "Online"), faqSchema()] }),
  ...locationPages.map(([slug, title, description, area, body]) => {
    const place = area.split(",")[0];
    const primaryTopic = slug.includes("sap-course-in-") ? `SAP Course in ${place}` : `SAP Training in ${place}`;
    const extraLinks = slug === "sap-training-in-kalaburagi"
      ? [
          ["SAP FICO Training in Kalaburagi", `${siteUrl}/sap-fico-training-in-kalaburagi`],
          ["SAP MM Training in Kalaburagi", `${siteUrl}/sap-mm-training-in-kalaburagi`],
          ["SAP SD Training in Kalaburagi", `${siteUrl}/sap-sd-training-in-kalaburagi`],
          ["SAP HCM Training in Kalaburagi", `${siteUrl}/sap-hcm-training-in-kalaburagi`],
          ["SAP ABAP Training in Kalaburagi", `${siteUrl}/sap-abap-training-in-kalaburagi`],
          ["Course Enquiry", `${siteUrl}/contact?course=SAP%20Training%20in%20Kalaburagi#registration`],
        ]
      : slug === "sap-training-in-hsr-layout"
      ? [
          ["SAP FICO Training in HSR Layout", `${siteUrl}/sap-fico-training-in-hsr-layout`],
          ["SAP MM Training in HSR Layout", `${siteUrl}/sap-mm-training-in-hsr-layout`],
          ["SAP SD Training in HSR Layout", `${siteUrl}/sap-sd-training-in-hsr-layout`],
          ["SAP ABAP Training in HSR Layout", `${siteUrl}/sap-abap-training-in-hsr-layout`],
          ["Course Enquiry", `${siteUrl}/contact?course=SAP%20Training%20in%20HSR%20Layout#registration`],
        ]
      : slug === "sap-training-in-marathahalli"
      ? [
          ["SAP FICO Training in Marathahalli", `${siteUrl}/sap-fico-training-in-marathahalli`],
          ["SAP MM Training in Marathahalli", `${siteUrl}/sap-mm-training-in-marathahalli`],
          ["SAP SD Training in Marathahalli", `${siteUrl}/sap-sd-training-in-marathahalli`],
          ["SAP ABAP Training in Marathahalli", `${siteUrl}/sap-abap-training-in-marathahalli`],
          ["Course Enquiry", `${siteUrl}/contact#registration`],
        ]
      : undefined;
    const generatedLocationLinks = locationModules
      .filter(([, , , , , moduleArea]) => moduleArea === area)
      .sort((a, b) => {
        const priority = ["SAP FICO", "SAP MM", "SAP SD", "SAP ABAP", "SAP PP", "SAP HCM"];
        const aIndex = priority.indexOf(a[1]);
        const bIndex = priority.indexOf(b[1]);
        return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
      })
      .slice(0, 4)
      .map(([moduleSlug, module]) => [`${module} Training in ${place}`, `${siteUrl}/${moduleSlug}`]);
    return page(slug, title, description, body, {
      h1: title.split("|")[0].trim(),
      keywords: locationKeywords(slug, place),
      links: extraLinks || (generatedLocationLinks.length ? [...generatedLocationLinks, ["Course Enquiry", `${siteUrl}/contact#registration`]] : undefined),
      schemas: [courseSchema(primaryTopic, description, `${siteUrl}/${slug}`, area), faqSchema()],
    });
  }),
  ...locationModules.map(([slug, module, title, description, body, area]) => {
    const place = area.split(",")[0];
    const moduleSeo = buildModuleLocationSeo(module, place);
    const localizedDescription = `Learn ${module} in ${place} with practical SAP training, business scenarios, SAP system practice, interview preparation and career guidance at SV CurioTech.`;
    const localizedBody = `${moduleSeo.body} SV CurioTech supports learners in ${place} with flexible batch options, trainer guidance and practical learning based on the selected ${module} course.`;
    const coursePath = moduleCoursePaths[module] || "courses";

    return page(slug, moduleSeo.title, localizedDescription, localizedBody, {
      h1: `${module} Training in ${place}`,
      keywords: moduleLocationKeywords(module, place),
      links: [
        [`${module} Course`, `${siteUrl}/${coursePath}`],
        [`SAP Training in ${place}`, `${siteUrl}/${locationSlugForPlace(place)}`],
        ["SAP Server Access", `${siteUrl}/sap-server-access`],
        ["Course Enquiry", `${siteUrl}/contact#registration`],
      ],
      schemas: [
        courseSchema(`${module} Training in ${place}`, localizedDescription, `${siteUrl}/${slug}`, area),
        faqSchema(),
      ],
    });
  }),
  ...courseModules.map(([slug, name, subtitle, body, title, description]) => page(`courses/${slug}`, title, description, `${name} ${subtitle} training at SV CurioTech. ${body} Learners get instructor-led classes, practical assignments, flexible weekday or weekend batches, interview preparation and placement assistance.`, { h1: `${name} Course in Bangalore`, keywords: courseModuleKeywords(name), schemas: [courseSchema(`${name} Course in Bangalore`, description, `${siteUrl}/courses/${slug}`), faqSchema()] })),
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
  return `<main class="seo-static-shell" aria-label="SV CurioTech page summary"><article><p class="seo-static-kicker">${escapeHtml(pageData.staticKicker)}</p><h1>${escapeHtml(pageData.h1)}</h1><p>${escapeHtml(pageData.body)}</p><h2>${escapeHtml(pageData.linkHeading)}</h2><ul>${links}</ul><p><a href="${escapeHtml(pageData.ctaHref)}">${escapeHtml(pageData.ctaText)}</a> or call SV CurioTech at +91 6361702540.</p></article></main>`;
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
