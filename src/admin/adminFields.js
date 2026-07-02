export const skillFields = [
  { name: "name", label: "Name" },
  { name: "category", label: "Category", placeholder: "Frontend Development" },
  { name: "icon", label: "Icon Key", placeholder: "react" },
  { name: "color", label: "Color", placeholder: "#61DAFB" },
  { name: "level", label: "Level", type: "number", defaultValue: 80 },
  { name: "description", label: "Description", type: "textarea", wide: true },
];

export const educationFields = [
  { name: "institution", label: "Institution" },
  { name: "degree", label: "Degree" },
  { name: "board", label: "Board / Source" },
  { name: "year", label: "Year" },
];

export const experienceFields = [
  { name: "role", label: "Role" },
  { name: "company", label: "Company" },
  { name: "period", label: "Period" },
  { name: "description", label: "Description", type: "textarea", wide: true },
];

export const projectFields = [
  { name: "name", label: "Name" },
  { name: "slug", label: "Slug", placeholder: "scanivo" },
  { name: "category", label: "Category" },
  { name: "description", label: "Description", type: "textarea", wide: true },
  { name: "overview", label: "Overview", type: "textarea", wide: true },
  { name: "features", label: "Features", type: "array", placeholder: "One feature per line", wide: true },
  { name: "technologies", label: "Technologies", type: "array", placeholder: "React\nNode.js\nMongoDB", wide: true },
  { name: "githubLink", label: "GitHub Link" },
  { name: "liveLink", label: "Live Link" },
  { name: "thumbnail", label: "Thumbnail Image URL" },
  { name: "featured", label: "Featured", type: "boolean", defaultValue: true },
];

export const blogFields = [
  { name: "title", label: "Title" },
  { name: "slug", label: "Slug", placeholder: "building-scanivo" },
  { name: "category", label: "Category" },
  { name: "date", label: "Date", type: "date" },
  { name: "summary", label: "Summary", type: "textarea", wide: true },
  { name: "coverText", label: "Cover Text" },
  { name: "tags", label: "Tags", type: "array", placeholder: "React\nSaaS", wide: true },
  { name: "content", label: "Content Paragraphs", type: "array", placeholder: "One paragraph per line", wide: true },
  { name: "published", label: "Published", type: "boolean", defaultValue: true },
];

export const settingsFields = [
  { name: "key", label: "Setting Name (e.g., cvLink)", placeholder: "cvLink" },
  { name: "value", label: "Setting Value (URL or Text)", wide: true },
];
