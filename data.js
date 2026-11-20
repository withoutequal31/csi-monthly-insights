/* CS&I "Manoeuvre" digest - content DATA, extracted from index.html.
   Loaded by index.html via <script src="data.js"> BEFORE the render script.
   Pure data only (serials, unit/formation cards, packages, legend text) - no behaviour.
   Top-level const/let here share global scope with the render script, so names resolve as before.
   Edit monthly content HERE; keep each object's keys/shape the render code expects. */

/* ===================== DATA ===================== */
const SERIALS_M = [
 {
  "id": "M-01",
  "kind": "lesson",
  "title": "Protected and remotely operated movement: a combined adaptation",
  "conflict": "RUS-UKR",
  "theatre": "Russia–Ukraine",
  "verdict": "mixed",
  "verdictLabel": "Reported adaptation",
  "dates": "Reported early Oct 2026",
  "formations": [],
  "multi": false,
  "blocks": [
   {
    "l": "What happened",
    "t": "Reuters commentary on 8 October described footage of heavily shielded tanks advancing with Ukrainian drone support, media accounts of remotely controlled armoured personnel carriers, and discussion of drones carrying small unmanned ground vehicles. These are not equally verified observations and should not be consolidated into one proven assault method."
   },
   {
    "l": "So what",
    "t": "Assess the complete movement system: physical protection, remote-control connectivity, drone support, personnel exposed and recovery demand. Remote operation can move risk away from a crew without removing risk to supporting elements or recovery teams."
   },
   {
    "l": "Evidence & limits",
    "t": "No comparable casualty, mission-success or fleet-availability dataset was available. Specific footage attribution and exact event dates remain incomplete. The source is commentary, not a controlled operational evaluation. Do not infer breakthrough effectiveness or generalise to local terrain."
   },
   {
    "l": "What worked / what remains unproven",
    "t": "Evidenced: Several forms of protected or remote movement were being reported. Unproven: Which combination caused success, how often it failed, and whether it scaled."
   },
   {
    "l": "Confidence",
    "t": "Reported adaptation. Moderate confidence in the existence of reporting; low in quantified effectiveness. Individual event dates are not fully established."
   }
  ],
  "sources": [
   {
    "u": "https://www.reuters.com/commentary/amid-frontline-advances-ukraines-cities-face-up-lack-air-defence-2026-10-08/",
    "n": "Reuters commentary — 8 October 2026"
   }
  ]
 },
 {
  "id": "M-02",
  "kind": "lesson",
  "title": "Shelter readiness at a marked deployed position",
  "conflict": "ISR-LBN",
  "theatre": "Israel–Lebanon",
  "verdict": "threat",
  "verdictLabel": "Observed exposure incident",
  "dates": "7 Oct 2026",
  "formations": [],
  "multi": false,
  "blocks": [
   {
    "l": "What happened",
    "t": "UNIFIL stated that small-arms rounds hit its position near Kfar Shouba. Most struck the perimeter wall; some struck accommodation units and UN vehicles. Personnel took shelter after the first firing and no injuries were reported. An investigation was opened."
   },
   {
    "l": "So what",
    "t": "A recognised or clearly marked position still needs rehearsed protection. Validate whether personnel can reach shelter, be accounted for and preserve essential communications during an incident."
   },
   {
    "l": "Evidence & limits",
    "t": "The statement does not establish the firing party, precise origin, weapon details or the reason there were no injuries. It does not validate a structure against every threat."
   },
   {
    "l": "What worked / what remains unproven",
    "t": "Evidenced: Personnel used shelters and no injuries were reported. Unproven: Measured response time or a validated protection standard."
   },
   {
    "l": "Confidence",
    "t": "Direct mission reporting. High confidence in the reported incident; attribution unresolved."
   }
  ],
  "sources": [
   {
    "u": "https://unifil.unmissions.org/en/press-releases/unifil-statement-7-october-2026",
    "n": "UNIFIL statement — 7 October 2026"
   }
  ]
 }
];
const FORMATIONS_M = {};
/* Three display groups. `members` lists the underlying content bundles that
   feed each tab — Manoeuvre & Expeditionary are merged, CS & CSS is the former
   Combat Support pack relabelled. Serials keep their own per-bundle echelons
   (see SUBPKG_OF in index.html), so a merged tab still labels each serial's
   decision cards at the right formation level. */
const PACKAGES = [
  {k:"MANEXP", label:"Manoeuvre & Expeditionary", title:"Manoeuvre & Expeditionary", sub:"This month's serials · the close fight & deployed missions", live:true, members:["MANOEUVRE","EXPED"]},
  {k:"SENSE", label:"Sense & Strike", title:"Sense & Strike", sub:"This month's serials · deep fires & air defence", live:true, members:["SENSE"]},
  {k:"CSS", label:"CS & CSS", title:"CS & CSS", sub:"This month's serials · engineering, sustainment & comms", live:true, members:["CSS"]}
];
const PACK_M = {
 "kicker": "October 2026 · Manoeuvre",
 "titleLine": "for manoeuvre & expeditionary formations",
 "changed": "October reporting points towards combinations of protection, remote operation and drone support to reduce exposure. A UNIFIL firing incident reinforces shelter readiness at marked positions. Neither establishes a universally effective protection model.",
 "stats": [
  {
   "n": 2,
   "k": "Priority observations",
   "s": "For this month"
  },
  {
   "n": 2,
   "k": "For local validation",
   "s": "Next ICT cycle"
  }
 ],
 "commandLens": "October reporting points towards combinations of protection, remote operation and drone support to reduce exposure. A UNIFIL firing incident reinforces shelter readiness at marked positions. Neither establishes a universally effective protection model.",
 "divPriorities": [
  "Require a mission-output and recovery assessment before accepting a protected or remotely operated platform as a capability gain.",
  "Confirm shelter access, alerting, personnel accounting and continuity responsibilities against the assessed local threat."
 ],
 "brigadeBluf": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
 "implications": [
  {
   "ech": "Formation staff",
   "t": "Require a mission-output and recovery assessment before accepting a protected or remotely operated platform as a capability gain."
  },
  {
   "ech": "Formation staff",
   "t": "Confirm shelter access, alerting, personnel accounting and continuity responsibilities against the assessed local threat."
  },
  {
   "ech": "Brigades / units",
   "t": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency."
  }
 ],
 "worked": [
  "Several forms of protected or remote movement were being reported.",
  "Personnel used shelters and no injuries were reported."
 ],
 "failed": [
  "Which combination caused success, how often it failed, and whether it scaled.",
  "Measured response time or a validated protection standard."
 ],
 "testICT": [
  "90-minute tabletop: A protected or remote support vehicle performs a benign transport task during simulated link interruptions and a mobility fault.",
  "60-minute command-post drill: A simulated firing incident interrupts routine base activity."
 ],
 "sopReview": [
  "Review local procedures only after the proposed validation establishes a relevant gap. Record the responsible owner, measured result, residual risk and follow-up decision rather than converting the overseas observation directly into doctrine."
 ],
 "contests": [],
 "priorities": [
  "M-01",
  "M-02"
 ]
};

/* ===================== SENSE & STRIKE ===================== */
const LEARN_M = {
 "M-01": {
  "topic": "Protected and remote movement",
  "status": "For validation",
  "why": "Assess the complete movement system: physical protection, remote-control connectivity, drone support, personnel exposed and recovery demand. Remote operation can move risk away from a crew without removing risk to supporting elements or recovery teams.",
  "worked": "Several forms of protected or remote movement were being reported.",
  "next": "Require a mission-output and recovery assessment before accepting a protected or remotely operated platform as a capability gain."
 },
 "M-02": {
  "topic": "Deployed-position protection",
  "status": "For validation",
  "why": "A recognised or clearly marked position still needs rehearsed protection. Validate whether personnel can reach shelter, be accounted for and preserve essential communications during an incident.",
  "worked": "Personnel used shelters and no injuries were reported.",
  "next": "Confirm shelter access, alerting, personnel accounting and continuity responsibilities against the assessed local threat."
 }
};
const CONFLICT_CLASS = {"RUS-UKR":"t-rusukr","ISR-LBN":"t-isrlbn","THA-KHM":"t-thakhm","ISR-HMS":"t-isrhms","USI-IRN":"t-usiirn","SDN":"t-sdn"};
const CONFLICT_CODE = {"RUS-UKR":"RUS–UKR","ISR-LBN":"ISR–LBN","THA-KHM":"THA–KHM","ISR-HMS":"ISR–HMS","USI-IRN":"USI–IRN","SDN":"SUDAN"};

/* ===================== MANOEUVRE ===================== */
const KIND_LABEL = {lesson:"Lesson", action:"Tactical action", capdev:"Capability dev"};

const PLANNING_M = [
 {
  "b": "Deployed readiness",
  "p": "Use M-02 to test alerting, shelter access, accounting and communications."
 },
 {
  "b": "Capability experimentation",
  "p": "Use M-01 to assess mission output and recovery burden against a baseline."
 },
 {
  "b": "SOP review",
  "p": "Review local procedures only after the proposed validation establishes a relevant gap. Record the responsible owner, measured result, residual risk and follow-up decision rather than converting the overseas observation directly into doctrine."
 }
];
const KEY_JUDGEMENTS_M = [
 "October reporting points towards combinations of protection, remote operation and drone support to reduce exposure.",
 "A recognised or clearly marked position still needs rehearsed protection.",
 "Neither observation establishes a universally effective protection model."
];
const SUMMARY_M = {
 "M-01": "Assess the complete movement system: physical protection, remote-control connectivity, drone support, personnel exposed and recovery demand. Remote operation can move risk away from a crew without removing risk to supporting elements or recovery teams.",
 "M-02": "A recognised or clearly marked position still needs rehearsed protection. Validate whether personnel can reach shelter, be accounted for and preserve essential communications during an incident."
};
const WEEKLY_URL = "https://conflictstudiesandinsights.pages.dev/";
/* Base (no trailing slash) + baked-in fallback week list used when the live
   archive fetch fails/offline. The live list is parsed from the site index and
   supersedes this whenever available. `url` is relative to WEEKLY_BASE. */
const WEEKLY_BASE = "https://conflictstudiesandinsights.pages.dev";
const WEEKLY_WEEKS_FALLBACK = [
  {url:"/", label:"22 June – 29 June 2026"},
  {url:"/15-22-jun-2026.html", label:"15 June – 22 June 2026"},
  {url:"/8-15-jun-2026.html", label:"8 June – 15 June 2026"},
  {url:"/1-8-jun-2026.html", label:"1 June – 8 June 2026"},
  {url:"/25-may-1-jun-2026.html", label:"25 May – 1 June 2026"},
  {url:"/18-25-may-2026.html", label:"18 May – 25 May 2026"},
  {url:"/11-18-may-2026.html", label:"11 May – 18 May 2026"},
  {url:"/4-11-may-2026.html", label:"4 May – 11 May 2026"},
  {url:"/27-apr-4-may-2026.html", label:"27 April – 4 May 2026"},
  {url:"/20-27-apr-2026.html", label:"20 April – 27 April 2026"}
];
const SIGNAL_M = {
 "M-01": "From October reporting on Russia–Ukraine — Reuters commentary on 8 October described footage of heavily shielded tanks advancing with Ukrainian drone support, media accounts of remotely controlled armoured personnel carriers, and discussion of drones carrying small unmanned ground vehicles.",
 "M-02": "From October reporting on Israel–Lebanon — UNIFIL stated that small-arms rounds hit its position near Kfar Shouba."
};
const APP_M = {
 "M-01": {
  "verdict": "Use it, with changes",
  "lead": "Treat combined protection as a testable hypothesis, not an imported assault drill.",
  "div": {
   "d": "Require a mission-output and recovery assessment before accepting a protected or remotely operated platform as a capability gain.",
   "o": "Formation capability and training staff (proposed)",
   "a": "",
   "t": "An unmanned or protection upgrade is proposed for experimentation.",
   "x": "Reduced direct exposure may increase communications dependence, maintenance, weight and recovery demand.",
   "m": "Mission completion, personnel exposure, operator workload, link interruptions and recovery time against a locally defined baseline."
  },
  "bde": {
   "d": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
   "o": "",
   "a": "",
   "t": "",
   "x": "",
   "m": ""
  }
 },
 "M-02": {
  "verdict": "A warning, not a model",
  "lead": "Rehearse shelter and accounting; do not copy a base design from an incident statement.",
  "div": {
   "d": "Confirm shelter access, alerting, personnel accounting and continuity responsibilities against the assessed local threat.",
   "o": "Deployed-unit commander with mission protection staff (proposed)",
   "a": "",
   "t": "A deployed position remains occupied in an area with live incidents.",
   "x": "Sheltering interrupts routine tasks; continuity requires protected communications and staffing.",
   "m": "Alert acknowledgement, personnel accounting, essential communications continuity and unresolved gaps."
  },
  "bde": {
   "d": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
   "o": "",
   "a": "",
   "t": "",
   "x": "",
   "m": ""
  }
 }
};
const ICT_M = {
 "M-01": {
  "fmt": "90-minute tabletop · analyst-designed",
  "set": "A protected or remote support vehicle performs a benign transport task during simulated link interruptions and a mobility fault.",
  "run": [
   "Compare the task with a crewed baseline.",
   "Identify safe stop conditions and recovery ownership."
  ],
  "dec": "",
  "twist": "",
  "std": "A technology claim alone cannot pass."
 },
 "M-02": {
  "fmt": "60-minute command-post drill · analyst-designed",
  "set": "A simulated firing incident interrupts routine base activity.",
  "run": [
   "Issue an alert.",
   "Account for personnel and visitors.",
   "Test communications and medical coordination.",
   "Preserve uncertainty about attribution."
  ],
  "dec": "",
  "twist": "",
  "std": "Pass only when gaps are escalated and observed impacts, injuries and unverified claims remain separate."
 }
};
const THEATRE_NAME = {"RUS-UKR":"Russia–Ukraine","ISR-LBN":"Israel–Lebanon","THA-KHM":"Thailand–Cambodia","ISR-HMS":"Israel–Gaza","USI-IRN":"US/Israel–Iran","SDN":"Sudan"};
const BLUF_TEXT_M = "October reporting points towards combinations of protection, remote operation and drone support to reduce exposure. A UNIFIL firing incident reinforces shelter readiness at marked positions. Neither establishes a universally effective protection model.";
const SUGGESTIONS_M = [
 "What changed for manoeuvre this month?",
 "Does remote operation remove the risk to the crew?",
 "What did the UNIFIL firing incident show?",
 "What to validate in ICT",
 "Lessons for deployed missions",
 "Give me the bottom line"
];
const _STOP = new Set("the a an and or of to in for on at by from with into onto over under is are was were be been being it this that those these as our we us your you their they them do does did how what which who why when where than then so such also more most any all key lead led leading about can could should would will not".split(" "));
const _THK = {"RUS-UKR":["russia","russian","ukraine","ukrainian","geran","shahed","donetsk","pokrovsk","kursk","chonhar","borova","locomotive","moldova"],"ISR-LBN":["israel","israeli","lebanon","lebanese","hezbollah","idf","nabatieh","merkava","beaufort","litani","unifil","mansuri","peacekeeper","peacekeepers"],"THA-KHM":["thailand","thai","cambodia","cambodian","osmach"],"ISR-HMS":["hamas","gaza","qassam","odeh","haddad","khrizim","decapitation","ocha"],"SDN":["sudan","sudanese","rsf","obeid","kordofan","besieged","besiege","siege"]};
const _FMK_M = {};
const _OUT = {success:["success","successful","succeed","worked","effective","effectively","win","won","decisive","gained","advantage","best","what worked"],failure:["fail","failed","failure","failures","lost","loss","losses","vulnerable","vulnerability","mistake","wrong","unsustainable","what failed","did not"],threat:["threat","gap","capability","capdev","weakness","unjammable","exposure"]};
const _SEC = {bluf:["bottom line","bluf","summary","summarise","summarize","overview","tldr","tl;dr","takeaway","big picture","headline","in short"],planning:["planning","oplan","estimate","checklist","precondition","go/no-go","go no go","gonogo"],ict:["rehearse","ict","in-camp","train","training","exercise","drill","practice","practise"]};
/* Concept clusters for the on-device assistant. Each inner array is a set of
   equivalent single-word terms; a query token matching any member expands to the
   whole cluster before ranking, so lay phrasing ("drone", "wired") reaches the
   right serials. Members are single lowercase tokens (the tokeniser splits on
   hyphens/spaces), grounded in the corpus vocabulary. */
const SYN = [
  ["drone","drones","fpv","uav","uas","loitering","quadcopter","geran","shahed","jet","jetpowered"],
  ["fibre","fiber","wired","tethered","optic","unjammable"],
  ["doubletap","double","tap","reattack","rescue","casevac","followup","secondary"],
  ["jam","jamming","jammer","ew","electronic","spoofing","gnss","spectrum","warfare"],
  ["starlink","satcom","satellite","connectivity","uplink"],
  ["ugv","unmanned","robot","robotic","groundrobot"],
  ["bridge","crossing","span","chonhar","pontoon","bridging","interdiction","locomotive","rail","railway"],
  ["saturation","mass","swarm","overwhelm","saturate","salvo","decoy","cruise","ballistic","hypersonic","glide"],
  ["decapitation","leadership","commander","commanders","managers","finance","depth","targeting"],
  ["autonomous","autonomy","brave1","intercept","interceptor","interceptors"],
  ["siege","besiege","besieged","encircle","blockade","obeid","infrastructure"],
  ["ceasefire","truce","encroachment","creep","baseline","observer","compliance","unifil","peacekeeping","peacekeeper","monitoring"],
  ["subthreshold","greyzone","provocation","incursion","threshold"],
  ["resupply","logistics","sustainment","supply","passability","distribution","transshipment","rear","transport"],
  ["engineer","engineers","sapper","repair","breach","obstacle","maintenance","spares","oil"],
  ["forceprotection","survivability","protection","cover","hardening","recoverability","continuity"],
  ["ammunition","ammo","munition","munitions","shell","shells","round","rounds","magazine","stockpile","reload"],
  ["airdefence","airdefense","sam","interceptor","interception","shorad","gbad","patriot","pantsir","radar"],
  ["artillery","arty","howitzer","fires","gun","guns","himars","counterbattery","barrage","mlrs"],
  ["casualty","casualties","wounded","medical","medevac","evacuation","evac","treatment","humanitarian","aid"],
  ["tank","tanks","armour","armor","afv","ifv","mbt","mounted"],
  ["command","c2","headquarters","comms","communications","mobile","network","datacentre","datacenter"],
  ["power","grid","electricity","water","fuel","energy","utilities","generator","generators"],
  ["airfield","airfields","runway","aviation","sortie","aircraft"],
  ["transition","withdrawal","handover","successor","liaison"]
];

/* ===================== SENSE & STRIKE PACKAGE (Package 2) ===================== */
const FORMATIONS_S = {};
const _FMK_S = {};

const SERIALS_S = [
 {
  "id": "S-01",
  "kind": "lesson",
  "title": "Jet-drone defence: improvement reported, closure unproven",
  "conflict": "RUS-UKR",
  "theatre": "Russia–Ukraine",
  "verdict": "mixed",
  "verdictLabel": "Improvement reported, closure unproven",
  "dates": "Reported 8 Oct 2026",
  "formations": [],
  "multi": false,
  "blocks": [
   {
    "l": "What happened",
    "t": "Reuters commentary quoted a Ukrainian official saying 82% of incoming jet-powered drones had been downed on the preceding Wednesday night. The September reference cited approximately 60% against jet drones. The October figure is a single-night claim, not an independently audited monthly rate."
   },
   {
    "l": "So what",
    "t": "Reported performance can improve while the broader defence remains under strain. Distinguish technical adaptation, available inventory and achieved protection of defended functions."
   },
   {
    "l": "Evidence & limits",
    "t": "No common denominator, engagement geography, expenditure breakdown or reporting window links the two rates. Their numerical difference must not be labelled a measured like-for-like effectiveness improvement."
   },
   {
    "l": "What worked / what remains unproven",
    "t": "Evidenced: A higher attributed figure was published. Unproven: Its cause, durability, cost and applicability across attacks."
   },
   {
    "l": "Confidence",
    "t": "Attributed reporting. Moderate confidence in the quoted figure; low cross-month comparability."
   }
  ],
  "sources": [
   {
    "u": "https://www.reuters.com/commentary/amid-frontline-advances-ukraines-cities-face-up-lack-air-defence-2026-10-08/",
    "n": "Reuters commentary — 8 October 2026"
   }
  ]
 },
 {
  "id": "S-02",
  "kind": "lesson",
  "title": "External service restrictions constrain the engagement chain",
  "conflict": "RUS-UKR",
  "theatre": "Russia–Ukraine",
  "verdict": "threat",
  "verdictLabel": "Reported service constraint",
  "dates": "Reported 15 Oct 2026",
  "formations": [],
  "multi": false,
  "blocks": [
   {
    "l": "What happened",
    "t": "Reuters reported Ukrainian accounts that satellite terminals on fast-moving platforms ceased working above a speed limit of about 160 km/h, complicating strike missions and slowing interceptors. Three officials attributed the instruction to the White House without identifying the decision-maker. A senior US official denied that the president made such a request. Reuters explained that Starshield uses the Starlink constellation as its backbone."
   },
   {
    "l": "So what",
    "t": "A mechanically serviceable platform can lose mission utility when an external service changes its operating conditions. Capability assurance must include service permissions, restrictions and the authority controlling them."
   },
   {
    "l": "Evidence & limits",
    "t": "The account does not quantify sorties lost, interception failures or the fraction of platforms affected. Not every drone is satellite-dependent. The instruction’s provenance is disputed. A 25 October account reported a request to restore access, not a controlled end-to-end readiness test."
   },
   {
    "l": "What worked / what remains unproven",
    "t": "Evidenced: Reported service constraints affected multiple drone roles. Unproven: The complete scale of operational loss or the effectiveness of alternatives."
   },
   {
    "l": "Confidence",
    "t": "Attributed reporting with official disagreement. Moderate confidence in the reported operational constraint; decision provenance qualified."
   }
  ],
  "sources": [
   {
    "u": "https://www.reuters.com/world/europe/order-limit-starshield-ukraine-came-inside-white-house-sources-say-2026-10-15/",
    "n": "Reuters — 15 October 2026, Starshield restrictions"
   },
   {
    "u": "https://www.reuters.com/legal/government/how-ukraines-strikes-russian-energy-sites-deepened-rift-with-trump-2026-10-25/",
    "n": "Reuters — 25 October 2026, energy strikes and US–Ukraine relations"
   }
  ]
 }
];
const SUMMARY_S = {
 "S-01": "Reported performance can improve while the broader defence remains under strain. Distinguish technical adaptation, available inventory and achieved protection of defended functions.",
 "S-02": "A mechanically serviceable platform can lose mission utility when an external service changes its operating conditions. Capability assurance must include service permissions, restrictions and the authority controlling them."
};
const SIGNAL_S = {
 "S-01": "From October reporting on Russia–Ukraine — Reuters commentary quoted a Ukrainian official saying 82% of incoming jet-powered drones had been downed on the preceding Wednesday night.",
 "S-02": "From October reporting on Russia–Ukraine — Reuters reported Ukrainian accounts that satellite terminals on fast-moving platforms ceased working above a speed limit of about 160 km/h, complicating strike missions and slowing interceptors."
};
const APP_S = {
 "S-01": {
  "verdict": "For validation",
  "lead": "Retain the promising signal but do not declare the gap closed.",
  "div": {
   "d": "Standardise performance returns with threat class, period, attempted engagements, outcomes, expenditure and missing data.",
   "o": "Air-defence analysis staff (proposed)",
   "a": "",
   "t": "A headline rate is used to justify a readiness conclusion.",
   "x": "Better reporting needs more collection and exposes uncertainty in simple dashboards.",
   "m": "Comparative rates identify their denominator and period; non-comparable rates are labelled."
  },
  "bde": {
   "d": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
   "o": "",
   "a": "",
   "t": "",
   "x": "",
   "m": ""
  }
 },
 "S-02": {
  "verdict": "Use it, with changes",
  "lead": "Include service access and restrictions in capability assurance.",
  "div": {
   "d": "Register provider controls, operating restrictions, escalation contacts and genuinely independent continuity options.",
   "o": "Formation communications and capability-assurance staff (proposed)",
   "a": "",
   "t": "A critical function relies on externally managed connectivity or software-enabled access.",
   "x": "Independent alternatives cost more; a different product may still share the same backbone.",
   "m": "An authorised continuity option is demonstrated and common dependencies are identified."
  },
  "bde": {
   "d": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
   "o": "",
   "a": "",
   "t": "",
   "x": "",
   "m": ""
  }
 }
};
const ICT_S = {
 "S-01": {
  "fmt": "90-minute analytical drill · analyst-designed",
  "set": "Planners receive three reports with different periods, threat classes and levels of detail.",
  "run": [
   "Separate the comparable data.",
   "Flag missing denominators.",
   "Specify the evidence needed for a readiness judgement."
  ],
  "dec": "",
  "twist": "",
  "std": "Incompatible figures are not pooled."
 },
 "S-02": {
  "fmt": "Two-hour command-post exercise · analyst-designed",
  "set": "A fictional provider changes a service’s permitted operating envelope.",
  "run": [
   "Determine the affected functions.",
   "Establish what remains authorised and technically possible, and the safe continuity options.",
   "Report lost output."
  ],
  "dec": "",
  "twist": "",
  "std": "Shared-backbone products are not counted as independent redundancy."
 }
};
const LEARN_S = {
 "S-01": {
  "topic": "Reading interception rates",
  "status": "For validation",
  "why": "Reported performance can improve while the broader defence remains under strain. Distinguish technical adaptation, available inventory and achieved protection of defended functions.",
  "worked": "A higher attributed figure was published.",
  "next": "Standardise performance returns with threat class, period, attempted engagements, outcomes, expenditure and missing data."
 },
 "S-02": {
  "topic": "Externally controlled services",
  "status": "For validation",
  "why": "A mechanically serviceable platform can lose mission utility when an external service changes its operating conditions. Capability assurance must include service permissions, restrictions and the authority controlling them.",
  "worked": "Reported service constraints affected multiple drone roles.",
  "next": "Register provider controls, operating restrictions, escalation contacts and genuinely independent continuity options."
 }
};
const PACK_S = {
 "kicker": "October 2026 · Sense & Strike",
 "titleLine": "for sense-and-strike formations",
 "changed": "A reported one-night improvement against jet drones does not establish that the September gap closed. Satellite restrictions also reportedly constrained strike and interceptor drones: readiness depends on service access and operating conditions as well as hardware.",
 "stats": [
  {
   "n": 2,
   "k": "Priority observations",
   "s": "For this month"
  },
  {
   "n": 2,
   "k": "For local validation",
   "s": "Next ICT cycle"
  }
 ],
 "commandLens": "A reported one-night improvement against jet drones does not establish that the September gap closed. Satellite restrictions also reportedly constrained strike and interceptor drones: readiness depends on service access and operating conditions as well as hardware.",
 "divPriorities": [
  "Standardise performance returns with threat class, period, attempted engagements, outcomes, expenditure and missing data.",
  "Register provider controls, operating restrictions, escalation contacts and genuinely independent continuity options."
 ],
 "brigadeBluf": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
 "implications": [
  {
   "ech": "Formation staff",
   "t": "Standardise performance returns with threat class, period, attempted engagements, outcomes, expenditure and missing data."
  },
  {
   "ech": "Formation staff",
   "t": "Register provider controls, operating restrictions, escalation contacts and genuinely independent continuity options."
  },
  {
   "ech": "Brigades / units",
   "t": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency."
  }
 ],
 "worked": [
  "A higher attributed figure was published.",
  "Reported service constraints affected multiple drone roles."
 ],
 "failed": [
  "Its cause, durability, cost and applicability across attacks.",
  "The complete scale of operational loss or the effectiveness of alternatives."
 ],
 "testICT": [
  "90-minute analytical drill: Planners receive three reports with different periods, threat classes and levels of detail.",
  "Two-hour command-post exercise: A fictional provider changes a service’s permitted operating envelope."
 ],
 "sopReview": [
  "Review local procedures only after the proposed validation establishes a relevant gap. Record the responsible owner, measured result, residual risk and follow-up decision rather than converting the overseas observation directly into doctrine."
 ],
 "contests": [],
 "priorities": [
  "S-01",
  "S-02"
 ]
};
const PLANNING_S = [
 {
  "b": "Reporting discipline",
  "p": "Use S-01 to separate headline rates from comparable evidence."
 },
 {
  "b": "Dependency assurance",
  "p": "Combine S-02 and CS-01 in an exercise with both service restrictions and physical outages."
 },
 {
  "b": "SOP review",
  "p": "Review local procedures only after the proposed validation establishes a relevant gap. Record the responsible owner, measured result, residual risk and follow-up decision rather than converting the overseas observation directly into doctrine."
 }
];
const KEY_JUDGEMENTS_S = [
 "A reported one-night improvement against jet drones does not establish that the September gap closed.",
 "Readiness depends on service access and operating conditions as well as hardware.",
 "Capability assurance must include service permissions, restrictions and the authority controlling them."
];
const BLUF_S = "A reported one-night improvement against jet drones does not establish that the September gap closed. Satellite restrictions also reportedly constrained strike and interceptor drones: readiness depends on service access and operating conditions as well as hardware.";
const SUGGESTIONS_S = [
 "What changed for sense & strike this month?",
 "Did the jet-drone defence gap close?",
 "How should interception rates be compared?",
 "What to validate in ICT",
 "Lessons for air defence",
 "Give me the bottom line"
];

/* ===================== COMBAT SUPPORT ===================== */
const FORMATIONS_CSS = {};
const _FMK_CSS = {};

const SERIALS_CSS = [
 {
  "id": "CS-01",
  "kind": "lesson",
  "title": "Distributed power disruption and transport exposure",
  "conflict": "RUS-UKR",
  "theatre": "Russia–Ukraine",
  "verdict": "threat",
  "verdictLabel": "Reported infrastructure disruption",
  "dates": "14–20 Oct 2026",
  "formations": [],
  "multi": false,
  "blocks": [
   {
    "l": "What happened",
    "t": "Reuters reported on 14 October that Ukrainian authorities described damage to 30 energy facilities and at least 600,000 people without power, alongside railway-facility strikes in five regions. On 20 October it reported the expansion of energy strikes into western regions and quoted DTEK saying 32,700 families in Odesa remained without electricity after three company facilities were hit. These figures are dated and defined differently and must not be added together."
   },
   {
    "l": "So what",
    "t": "Test simultaneous degradation of transport, power and repair support across locations. Relocation alone is insufficient when alternates share the same grid, transport corridor or constrained support pool."
   },
   {
    "l": "Evidence & limits",
    "t": "Civilian outages and railway damage do not establish the scale or duration of military logistics disruption. There is no common throughput denominator. Target claims do not establish military status or legal permissibility."
   },
   {
    "l": "What worked / what remains unproven",
    "t": "Evidenced: Multi-region disruption and reported railway strikes. Unproven: Quantified military sustainment loss or the best recovery arrangement."
   },
   {
    "l": "Confidence",
    "t": "Attributed reporting. Moderate-to-high confidence in the reported disruption; military throughput effects unquantified."
   }
  ],
  "sources": [
   {
    "u": "https://www.reuters.com/world/russian-strikes-kill-one-hit-energy-facilities-kyiv-mayor-says-2026-10-14/",
    "n": "Reuters — 14 October 2026, energy and railway strikes"
   },
   {
    "u": "https://www.reuters.com/business/energy/russia-expands-attacks-energy-facilities-western-ukraine-2026-10-20/",
    "n": "Reuters — 20 October 2026, western energy facilities"
   }
  ]
 },
 {
  "id": "CS-02",
  "kind": "lesson",
  "title": "Complete support chains: continuity and recovery in Gaza",
  "conflict": "ISR-HMS",
  "theatre": "Israel–Gaza",
  "verdict": "mixed",
  "verdictLabel": "Continuity and recovery",
  "dates": "Oct 2026 (updates to 26–29 Oct)",
  "formations": [],
  "multi": false,
  "image": "/img/2026-10/CS-02.jpg",
  "imageCredit": "OCHA",
  "blocks": [
   {
    "l": "What happened",
    "t": "OCHA’s 15 October report, covering 29 September–12 October, described fuel, engine oil, spare-parts and medicine shortages threatening health and water, sanitation and hygiene (WASH) services, and a roughly 12% decline in cooked-meal production. Its 29 October report recorded 16 of 17 commercial bakeries under the fuel-only support model operational as of 26 October, alongside 21 subsidised bakeries producing approximately 80,000 two-kilogram bread bundles daily. The early reporting period is not October-only."
   },
   {
    "l": "So what",
    "t": "Define the support package by the service delivered, not the main equipment or one funded input. Interruption, continued operation and recovery can coexist across different services and dates."
   },
   {
    "l": "Evidence & limits",
    "t": "The meal-production decline was associated with funding constraints, not shown to result from lubricant shortages. Bakery categories and health/WASH systems are distinct. Civilian humanitarian experience does not establish identical military conditions or stocking requirements."
   },
   {
    "l": "What worked / what remains unproven",
    "t": "Evidenced: Multi-input constraints, and functioning bakery capacity later in the month. Unproven: A single cause, complete system collapse or transferable military stock quantities."
   },
   {
    "l": "Confidence",
    "t": "Institutional humanitarian reporting. High confidence in the reported constraints; military application is an analogy."
   }
  ],
  "sources": [
   {
    "u": "https://www.ochaopt.org/content/humanitarian-situation-report-15-october-2026",
    "n": "OCHA — Humanitarian Situation Report, 15 October 2026"
   },
   {
    "u": "https://www.ochaopt.org/content/humanitarian-situation-report-29-october-2026",
    "n": "OCHA — Humanitarian Situation Report, 29 October 2026"
   }
  ]
 }
];
const SUMMARY_CSS = {
 "CS-01": "Test simultaneous degradation of transport, power and repair support across locations. Relocation alone is insufficient when alternates share the same grid, transport corridor or constrained support pool.",
 "CS-02": "Define the support package by the service delivered, not the main equipment or one funded input. Interruption, continued operation and recovery can coexist across different services and dates."
};
const SIGNAL_CSS = {
 "CS-01": "From October reporting on Russia–Ukraine — Reuters reported on 14 October that Ukrainian authorities described damage to 30 energy facilities and at least 600,000 people without power, alongside railway-facility strikes in five regions.",
 "CS-02": "From October reporting on Israel–Gaza — OCHA’s 15 October report, covering 29 September–12 October, described fuel, engine oil, spare-parts and medicine shortages threatening health and water, sanitation and hygiene (WASH) services, and a roughly 12% decline in cooked-meal production."
};
const APP_CSS = {
 "CS-01": {
  "verdict": "A warning, not a model",
  "lead": "Test continuity of functions rather than counting alternate sites.",
  "div": {
   "d": "Map common power, transport, communications and repair dependencies and exercise a combined outage.",
   "o": "Formation sustainment and communications staff (proposed)",
   "a": "",
   "t": "Essential functions depend on shared networks or support pools.",
   "x": "True independence increases cost and may reduce routine efficiency.",
   "m": "Service output during disruption, restoration time and dependencies that defeat nominal redundancy."
  },
  "bde": {
   "d": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
   "o": "",
   "a": "",
   "t": "",
   "x": "",
   "m": ""
  }
 },
 "CS-02": {
  "verdict": "Use it, with changes",
  "lead": "Validate the complete service chain and measure recovery.",
  "div": {
   "d": "Build a service bill of support covering fuel, lubricant, consumables, spares, operators, access and replenishment lead time; assign recovery ownership.",
   "o": "Formation sustainment staff and essential-service owners (proposed)",
   "a": "",
   "t": "Readiness is reported mainly through equipment availability or fuel stocks.",
   "x": "Complete support increases storage and coordination demands; priorities must reflect criticality.",
   "m": "Service output sustained and restored, not only equipment held or stocks delivered."
  },
  "bde": {
   "d": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
   "o": "",
   "a": "",
   "t": "",
   "x": "",
   "m": ""
  }
 }
};
const ICT_CSS = {
 "CS-01": {
  "fmt": "Two-hour continuity exercise · analyst-designed",
  "set": "Primary and alternate facilities suffer overlapping power and transport disruption.",
  "run": [
   "Identify priority services.",
   "Expose common dependencies.",
   "Allocate repair support.",
   "Compare recovery against locally set objectives."
  ],
  "dec": "",
  "twist": "",
  "std": "The staff can name what continues, for how long and on which inputs."
 },
 "CS-02": {
  "fmt": "90-minute logistics drill · analyst-designed",
  "set": "A notional essential service has equipment and fuel but lacks a maintenance input and faces replenishment delay.",
  "run": [
   "Identify the limiting input.",
   "Calculate endurance from exercise data.",
   "Allocate support.",
   "Report output lost and recovery conditions."
  ],
  "dec": "",
  "twist": "",
  "std": "No invented universal stock thresholds are used."
 }
};
const LEARN_CSS = {
 "CS-01": {
  "topic": "Shared-dependency continuity",
  "status": "For validation",
  "why": "Test simultaneous degradation of transport, power and repair support across locations. Relocation alone is insufficient when alternates share the same grid, transport corridor or constrained support pool.",
  "worked": "Multi-region disruption and reported railway strikes.",
  "next": "Map common power, transport, communications and repair dependencies and exercise a combined outage."
 },
 "CS-02": {
  "topic": "Complete support chains",
  "status": "For validation",
  "why": "Define the support package by the service delivered, not the main equipment or one funded input. Interruption, continued operation and recovery can coexist across different services and dates.",
  "worked": "Multi-input constraints, and functioning bakery capacity later in the month.",
  "next": "Build a service bill of support covering fuel, lubricant, consumables, spares, operators, access and replenishment lead time; assign recovery ownership."
 }
};
const PACK_CSS = {
 "kicker": "October 2026 · CS & CSS",
 "titleLine": "for CS & CSS formations",
 "changed": "Distributed energy strikes and transport exposure reinforce dependency-level continuity planning. Gaza reporting shows both maintenance-input shortages and functioning or recovering services: readiness should be measured as service output sustained or restored.",
 "stats": [
  {
   "n": 2,
   "k": "Priority observations",
   "s": "For this month"
  },
  {
   "n": 2,
   "k": "For local validation",
   "s": "Next ICT cycle"
  }
 ],
 "commandLens": "Distributed energy strikes and transport exposure reinforce dependency-level continuity planning. Gaza reporting shows both maintenance-input shortages and functioning or recovering services: readiness should be measured as service output sustained or restored.",
 "divPriorities": [
  "Map common power, transport, communications and repair dependencies and exercise a combined outage.",
  "Build a service bill of support covering fuel, lubricant, consumables, spares, operators, access and replenishment lead time; assign recovery ownership."
 ],
 "brigadeBluf": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency.",
 "implications": [
  {
   "ech": "Formation staff",
   "t": "Map common power, transport, communications and repair dependencies and exercise a combined outage."
  },
  {
   "ech": "Formation staff",
   "t": "Build a service bill of support covering fuel, lubricant, consumables, spares, operators, access and replenishment lead time; assign recovery ownership."
  },
  {
   "ech": "Brigades / units",
   "t": "Name the local officer responsible, the function to test, the evidence to collect and the escalation conditions. A foreign observation is a reason for validation, not proof of an existing local deficiency."
  }
 ],
 "worked": [
  "Multi-region disruption and reported railway strikes.",
  "Multi-input constraints, and functioning bakery capacity later in the month."
 ],
 "failed": [
  "Quantified military sustainment loss or the best recovery arrangement.",
  "A single cause, complete system collapse or transferable military stock quantities."
 ],
 "testICT": [
  "Two-hour continuity exercise: Primary and alternate facilities suffer overlapping power and transport disruption.",
  "90-minute logistics drill: A notional essential service has equipment and fuel but lacks a maintenance input and faces replenishment delay."
 ],
 "sopReview": [
  "Review local procedures only after the proposed validation establishes a relevant gap. Record the responsible owner, measured result, residual risk and follow-up decision rather than converting the overseas observation directly into doctrine."
 ],
 "contests": [],
 "priorities": [
  "CS-01",
  "CS-02"
 ]
};
const PLANNING_CSS = [
 {
  "b": "Dependency assurance",
  "p": "Combine S-02 and CS-01 in an exercise with both service restrictions and physical outages."
 },
 {
  "b": "Sustainment completeness",
  "p": "Use CS-02 to identify a limiting input and demonstrate a resourced recovery plan."
 },
 {
  "b": "SOP review",
  "p": "Review local procedures only after the proposed validation establishes a relevant gap. Record the responsible owner, measured result, residual risk and follow-up decision rather than converting the overseas observation directly into doctrine."
 }
];
const KEY_JUDGEMENTS_CSS = [
 "Relocation alone is insufficient when alternates share the same grid, transport corridor or constrained support pool.",
 "Readiness should be measured as service output sustained or restored.",
 "Define the support package by the service delivered, not the main equipment or one funded input."
];
const BLUF_CSS = "Distributed energy strikes and transport exposure reinforce dependency-level continuity planning. Gaza reporting shows both maintenance-input shortages and functioning or recovering services: readiness should be measured as service output sustained or restored.";
const SUGGESTIONS_CSS = [
 "What changed for CS & CSS this month?",
 "How do we test resilience at dependency level?",
 "What does Gaza show about complete support chains?",
 "What to validate in ICT",
 "Lessons for Signals and Engineers",
 "Give me the bottom line"
];

/* ===================== EXPEDITIONARY ===================== */
/* No standalone expeditionary serials in the October edition — the deployed-
   mission cases sit in the Manoeuvre bundle (M-01/M-02). All EXP bundles are
   empty so the MANEXP merge (below) reduces cleanly to the Manoeuvre package. */
const FORMATIONS_EXP = {};
const _FMK_EXP = {};

const SERIALS_EXP = [];
const SUMMARY_EXP = {};
const SIGNAL_EXP = {};
const APP_EXP = {};
const ICT_EXP = {};
const LEARN_EXP = {};
const PACK_EXP = {
  kicker:"October 2026 · Expeditionary", titleLine:"for expeditionary formations",
  changed:"", stats:[], commandLens:"", divPriorities:[], brigadeBluf:"",
  implications:[], worked:[], failed:[], testICT:[], sopReview:[], contests:[], priorities:[]
};
const PLANNING_EXP = [];
const KEY_JUDGEMENTS_EXP = [];
const BLUF_EXP = "";
const SUGGESTIONS_EXP = [];
/* ===================== FRAME — the three command sections =====================
   Each package is reorganised into three analytical buckets:
   · Opportunities  — EXTERNAL enablers/trends/adversary missteps to leverage
                      (if we'd have to build/buy it ourselves it is Cap Dev, not this)
   · Vulnerabilities — INTERNAL risks/gaps these conflicts expose (tactics,
                      technical deficiencies, supply-chain or training gaps)
   · Capability Development — INTERNAL deliberate actions to exploit an opportunity
                      or fix a vulnerability. This edition frames them as questions
                      for local validation, in keeping with its observational register.
   Each item: {t: headline, d: 1–2 line so-what, id: source serial}. */
const FRAME_M = {
 "bluf": "October reporting points towards combinations of protection, remote operation and drone support to reduce exposure. A UNIFIL firing incident reinforces shelter readiness at marked positions. Neither establishes a universally effective protection model.",
 "opportunities": [
  {
   "t": "Assess protection, drone support and recovery together rather than buying a single protective feature.",
   "d": "Remote operation can move risk away from a crew without removing risk to supporting elements or recovery teams.",
   "id": "M-01"
  }
 ],
 "vulnerabilities": [
  {
   "t": "Treat accommodation and vehicles inside a deployed perimeter as potentially exposed.",
   "d": "Small-arms rounds struck a UNIFIL perimeter wall, accommodation units and UN vehicles near Kfar Shouba on 7 October.",
   "id": "M-02"
  },
  {
   "t": "Do not confuse reported combat footage with repeatable effectiveness.",
   "d": "Footage and media accounts of shielded and remote vehicles are not equally verified and do not show how often the approach failed.",
   "id": "M-01"
  }
 ],
 "capdev": [
  {
   "t": "Assess platforms on mission output and recovery",
   "d": "Require a mission-output and recovery assessment before accepting a protected or remotely operated platform as a capability gain.",
   "id": "M-01"
  },
  {
   "t": "Rehearse shelter, alerting and accounting",
   "d": "Confirm shelter access, alerting, personnel accounting and continuity responsibilities against the assessed local threat.",
   "id": "M-02"
  }
 ]
};
const FRAME_S = {
 "bluf": "A reported one-night improvement against jet drones does not establish that the September gap closed. Satellite restrictions also reportedly constrained strike and interceptor drones: readiness depends on service access and operating conditions as well as hardware.",
 "opportunities": [
  {
   "t": "Keep threat-class performance and its denominator visible.",
   "d": "A single-night 82% figure and a September reference of about 60% share no common denominator, so they cannot show a like-for-like improvement.",
   "id": "S-01"
  },
  {
   "t": "Include externally controlled services in readiness assurance.",
   "d": "A mechanically serviceable platform can lose mission utility when an external service changes its operating conditions.",
   "id": "S-02"
  }
 ],
 "vulnerabilities": [
  {
   "t": "Avoid false redundancy when nominal alternatives share the same backbone or decision authority.",
   "d": "Starshield uses the Starlink constellation as its backbone, so a different product may still share the same point of control.",
   "id": "S-02"
  }
 ],
 "capdev": [
  {
   "t": "Standardise performance returns",
   "d": "Standardise performance returns with threat class, period, attempted engagements, outcomes, expenditure and missing data.",
   "id": "S-01"
  },
  {
   "t": "Register provider controls and continuity options",
   "d": "Register provider controls, operating restrictions, escalation contacts and genuinely independent continuity options.",
   "id": "S-02"
  }
 ]
};
const FRAME_CSS = {
 "bluf": "Distributed energy strikes and transport exposure reinforce dependency-level continuity planning. Gaza reporting shows both maintenance-input shortages and functioning or recovering services: readiness should be measured as service output sustained or restored.",
 "opportunities": [
  {
   "t": "Measure recovery and service output, not only damage or equipment counts.",
   "d": "Interruption, continued operation and recovery can coexist across different services and dates.",
   "id": "CS-02"
  },
  {
   "t": "Include maintenance inputs, operators and access in contingency packages.",
   "d": "Define the support package by the service delivered, not the main equipment or one funded input.",
   "id": "CS-02"
  }
 ],
 "vulnerabilities": [
  {
   "t": "Map common infrastructure dependencies across alternate sites.",
   "d": "Relocation alone is insufficient when alternates share the same grid, transport corridor or constrained support pool.",
   "id": "CS-01"
  }
 ],
 "capdev": [
  {
   "t": "Exercise a combined outage across shared dependencies",
   "d": "Map common power, transport, communications and repair dependencies and exercise a combined outage.",
   "id": "CS-01"
  },
  {
   "t": "Build a service bill of support",
   "d": "Build a service bill of support covering fuel, lubricant, consumables, spares, operators, access and replenishment lead time; assign recovery ownership.",
   "id": "CS-02"
  }
 ]
};
const FRAME_EXP = { bluf:"", opportunities:[], vulnerabilities:[], capdev:[] };
/* Merged Manoeuvre & Expeditionary bundle for the combined tab. With no
   standalone expeditionary serials this month the EXP arrays are empty, so the
   FRAME sections and overview arrays reduce to the Manoeuvre package; the lede
   is a concise synthesis and introduces no new claims. Per-serial echelons are
   resolved via SUBPKG_OF, so this bundle's `echelons` is only a fallback. */
const FRAME_MANEXP = {
  bluf:"October reporting points towards combinations of protection, remote operation and drone support to reduce exposure. A UNIFIL firing incident reinforces shelter readiness at marked positions. Neither establishes a universally effective protection model.",
  opportunities: FRAME_M.opportunities.concat(FRAME_EXP.opportunities),
  vulnerabilities: FRAME_M.vulnerabilities.concat(FRAME_EXP.vulnerabilities),
  capdev: FRAME_M.capdev.concat(FRAME_EXP.capdev)
};
const PACK_MANEXP = Object.assign({}, PACK_M, {
  kicker:"October 2026 · Manoeuvre & Expeditionary",
  titleLine:"for manoeuvre & expeditionary formations",
  changed: [PACK_M.changed, PACK_EXP.changed].filter(Boolean).join(" "),
  stats: (PACK_M.stats||[]).map((s,i)=>Object.assign({}, s, {n: s.n + ((PACK_EXP.stats||[])[i]||{n:0}).n})),
  commandLens: [PACK_M.commandLens, PACK_EXP.commandLens].filter(Boolean).join(" "),
  brigadeBluf: [PACK_M.brigadeBluf, PACK_EXP.brigadeBluf].filter(Boolean).join(" "),
  divPriorities: (PACK_M.divPriorities||[]).concat(PACK_EXP.divPriorities||[]),
  implications: (PACK_M.implications||[]).concat(PACK_EXP.implications||[]),
  contests: (PACK_M.contests||[]).concat(PACK_EXP.contests||[]),
  worked: (PACK_M.worked||[]).concat(PACK_EXP.worked||[]),
  failed: (PACK_M.failed||[]).concat(PACK_EXP.failed||[]),
  sopReview: (PACK_M.sopReview||[]).concat(PACK_EXP.sopReview||[]),
  testICT: (PACK_M.testICT||[]).concat(PACK_EXP.testICT||[])
});
const PKG = {
  MANEXP:    { SERIALS:SERIALS_M.concat(SERIALS_EXP), SUMMARY:Object.assign({},SUMMARY_M,SUMMARY_EXP), SIGNAL:Object.assign({},SIGNAL_M,SIGNAL_EXP), APP:Object.assign({},APP_M,APP_EXP), ICT:Object.assign({},ICT_M,ICT_EXP), LEARN:Object.assign({},LEARN_M,LEARN_EXP), PACK:PACK_MANEXP, FRAME:FRAME_MANEXP, PLANNING:PLANNING_M.concat(PLANNING_EXP), KEY_JUDGEMENTS:KEY_JUDGEMENTS_M.concat(KEY_JUDGEMENTS_EXP), FORMATIONS:Object.assign({},FORMATIONS_M,FORMATIONS_EXP), BLUF:[BLUF_TEXT_M,BLUF_EXP].filter(Boolean).join(" "), SUGGESTIONS:[...new Set(SUGGESTIONS_M.concat(SUGGESTIONS_EXP))], FMK:Object.assign({},_FMK_M,_FMK_EXP), echelons:["Division","Brigade"] },
  MANOEUVRE: { SERIALS:SERIALS_M, SUMMARY:SUMMARY_M, SIGNAL:SIGNAL_M, APP:APP_M, ICT:ICT_M, LEARN:LEARN_M, PACK:PACK_M, FRAME:FRAME_M, PLANNING:PLANNING_M, KEY_JUDGEMENTS:KEY_JUDGEMENTS_M, FORMATIONS:FORMATIONS_M, BLUF:BLUF_TEXT_M, SUGGESTIONS:SUGGESTIONS_M, FMK:_FMK_M, echelons:["Division","Brigade"] },
  SENSE:     { SERIALS:SERIALS_S, SUMMARY:SUMMARY_S, SIGNAL:SIGNAL_S, APP:APP_S, ICT:ICT_S, LEARN:LEARN_S, PACK:PACK_S, FRAME:FRAME_S, PLANNING:PLANNING_S, KEY_JUDGEMENTS:KEY_JUDGEMENTS_S, FORMATIONS:FORMATIONS_S, BLUF:BLUF_S, SUGGESTIONS:SUGGESTIONS_S, FMK:_FMK_S, echelons:["Division","Unit"] },
  CSS:       { SERIALS:SERIALS_CSS, SUMMARY:SUMMARY_CSS, SIGNAL:SIGNAL_CSS, APP:APP_CSS, ICT:ICT_CSS, LEARN:LEARN_CSS, PACK:PACK_CSS, FRAME:FRAME_CSS, PLANNING:PLANNING_CSS, KEY_JUDGEMENTS:KEY_JUDGEMENTS_CSS, FORMATIONS:FORMATIONS_CSS, BLUF:BLUF_CSS, SUGGESTIONS:SUGGESTIONS_CSS, FMK:_FMK_CSS, echelons:["Division","Unit"] },
  EXPED:     { SERIALS:SERIALS_EXP, SUMMARY:SUMMARY_EXP, SIGNAL:SIGNAL_EXP, APP:APP_EXP, ICT:ICT_EXP, LEARN:LEARN_EXP, PACK:PACK_EXP, FRAME:FRAME_EXP, PLANNING:PLANNING_EXP, KEY_JUDGEMENTS:KEY_JUDGEMENTS_EXP, FORMATIONS:FORMATIONS_EXP, BLUF:BLUF_EXP, SUGGESTIONS:SUGGESTIONS_EXP, FMK:_FMK_EXP, echelons:["Mission HQ","Section"] }
};
