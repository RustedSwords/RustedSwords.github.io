import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming
  { name: "Python", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "Bash", category: "programming" },
  { name: "SQL", category: "programming" },

  // Machine Learning
  { name: "OpenAI", category: "AI & ML" },
  { name: "TensorFlow", category: "AI & ML" },
  { name: "PyTorch", category: "AI & ML" },
  { name: "Scikit-learn", category: "AI & ML" },
  { name: "Ollama", category: "AI & ML" },
  { name: "Qdrant", category: "AI & ML" },

  // Cloud Platforms
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Github Actions", category: "Cloud" },

  // Backend & Databases
  { name: "Flask", category: "Backend & Databases" },
  { name: "PostgreSQL", category: "Backend & Databases" },
  { name: "SQLite", category: "Backend & Databases" },

  // Data Science
  { name: "NumPy", category: "data" },
  { name: "Pandas", category: "data" },
  { name: "Plotly", category: "data" },
  { name: "Matplotlib", category: "data" },
  { name: "Statsmodels", category: "data" },

  // MLOps & Tools
  { name: "Git & GitHub", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "VS Code", category: "tools" },
];


const categories = [
  "all",
  "programming",
  "data",
  "AI & ML",
  "Cloud",
  "Backend & Databases",
  "tools",
];


// Load all SVG icons from src/assets/icons as raw markup (Vite)
function processSvg(svg) {
  if (!svg) return svg;
  // Extract only the outer <svg>...</svg> block to avoid XML prolog, DOCTYPE, CDATA or comments
  const match = svg.match(/<svg[\s\S]*?<\/svg>/i);
  if (match) svg = match[0];
  // Remove XML prolog, DOCTYPE, CDATA, and comments which can render as stray text
  svg = svg.replace(/<\?xml[\s\S]*?\?>/i, "");
  svg = svg.replace(/<!DOCTYPE[\s\S]*?>/i, "");
  svg = svg.replace(/<!\[CDATA\[[\s\S]*?\]\]>/gi, "");
  svg = svg.replace(/<!--([\s\S]*?)-->/g, "");

  // add width/height and preserveAspectRatio if missing so SVG scales to its container
  if (!/preserveAspectRatio/i.test(svg)) {
    svg = svg.replace(/<svg([^>]*)>/i, (match, attrs) => `<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet"${attrs}>`);
  }

  // ensure width/height exist
  svg = svg.replace(/<svg([^>]*)>/i, (match, attrs) => {
    let newAttrs = attrs;
    if (!/width=/i.test(attrs)) newAttrs = ` width="100%"` + newAttrs;
    if (!/height=/i.test(attrs)) newAttrs = ` height="100%"` + newAttrs;
    return `<svg${newAttrs}>`;
  });

  return svg.trim();
}

const iconsMap = (() => {
  const modules = import.meta.glob('../assets/icons/*.svg', { eager: true, query: '?raw', import: 'default' });
  const map = {};
  for (const path in modules) {
    const file = path.split('/').pop();
    const name = file.replace(/\.svg$/,'').toLowerCase();
    map[name] = processSvg(modules[path]);
  }
  if (import.meta.env.MODE === 'development') {
    console.debug('[SkillsSection] iconsMap keys:', Object.keys(map));
  }
  return map;
})();

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/\s+&\s+/g, ' and ')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function findIcon(name) {
  const n = name.toLowerCase();
  const candidates = [
    normalizeName(name),
    n.replace(/\s+/g, '-'),
    n.replace(/\s+/g, ''),
    n.replace(/&/g, 'and').replace(/\s+/g, '-'),
    n.replace(/&/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-'),
    normalizeName(name).replace(/-and-/g, '-').replace(/-+/g, '-'),
    normalizeName(name).replace(/and/g, '').replace(/-+/g, '-'),
  ];

  for (const c of candidates) {
    if (iconsMap[c]) return iconsMap[c];
  }
  if (import.meta.env.MODE === 'development') {
    console.debug(`[SkillsSection] No icon for "${name}". Tried: ${candidates.join(', ')}`);
  }
  return null;
}

function initials(name) {
  return name.split(/\s+/).map(w => w[0]).slice(0,2).join('').toUpperCase();
}

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => {
          const icon = findIcon(skill.name);
          return (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-secondary/10 mr-4 shrink-0 overflow-hidden">
                {icon ? (
                  <span className="w-full h-full flex items-center justify-center" dangerouslySetInnerHTML={{ __html: icon }} />
                ) : (
                  <span className="text-sm font-semibold">{initials(skill.name)}</span>
                )}
              </div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          );
        })}
      </div>

      </div>
    </section>
  );
};