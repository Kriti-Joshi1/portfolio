const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Major Projects" },
  { value: 2, suffix: "+", label: "Internships Completed" },
  { value: 2, suffix: "nd Rank 🏆", label: "SIH 2024" },
  { value: 97, suffix: "%", label: "Model Accuracy" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Machine Learning",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "C++ Developer",
    imgPath: "https://imgs.search.brave.com/rSnxVbjX9OIfdcB6IEe-BM_qseyEK3cFI1xr1A3WiBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC85/ODEtOTgxMzE3NV9j/LWxvZ28tYy1wcm9n/cmFtbWluZy1sYW5n/dWFnZS1sb2dvLnBu/Zw",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
{
    name: "PyTorch Developer",
    imgPath: "https://cdn.simpleicons.org/pytorch/FFFFFF",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
{
    name: "C++ Developer",
    imgPath: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "The research internship at DRDO (IRDE) allowed me to work on advanced hyperspectral mineral exploration, where I built a high-accuracy 3D CNN model for satellite data classification.",
    title: "Research Intern — DRDO (IRDE)",
    date: "July 2025 – August 2025",
    responsibilities: [
      "Worked on advanced hyperspectral mineral exploration using satellite data.",
      "Built a 3D CNN model achieving ~97% classification accuracy",
      "Designed complete pipeline: preprocessing, PCA, normalization & training",
      "Performed spectral analysis using ECOSTRESS references",
      "Applied spatial–spectral feature extraction for high-precision results",
    ],
  },
  {
    review:
      "At Groove Innovations, I focused on building interactive React dashboards and integrating real-time analytics for a stock trading platform, significantly improving performance.",
    title: "Frontend Developer Intern — Groove Innovations",
    date: "June 2024 – August 2024",
    responsibilities: [
      "Developed an interactive stock trading platform with real-time analytics.",
      "Built React dashboards for live stock data & financial insights",
      "Integrated REST APIs for dynamic updates",
      "Improved website performance & responsiveness by 30%",
      "Worked in a fast-paced, deadline-driven environment",
    ],
  },
  {
    review:
      "My internship at MarketScope involved building automation tools that reduced manual work by 70% and optimizing content strategies that led to a 40% increase in engagement.",
    title: "Intern — MarketScope",
    date: "July 17, 2024 – Present",
    responsibilities: [
      "Worked on automation tools and social media analytics.",
      "Increased engagement by 40% through optimized content strategy",
      "Built automation tools reducing manual work by 70%",
      "Reviewed and validated large-scale OCR/image datasets",
      "Improved data accuracy using manual validation techniques",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "https://cdn.simpleicons.org/github/ffffff",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
