export const SITE = {
  website: "https://industrialairobots.com/",
  author: "Editorial Team",
  profile: "",
  desc: "Independent English-language publication on industrial robot applications, AI vision systems, and deployment decisions.",
  title: "Industrial AI Robots",
  ogImage: "",
  contactEmail: "editor@industrialairobots.com",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 12,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai",
} as const;
