import { 
  Code2, 
  Database, 
  Wrench, 
  Atom, 
  FileCode2, 
  Layout, 
  Palette, 
  Server, 
  GitBranch, 
  Rocket, 
  Zap, 
  Layers, 
  Terminal 
} from './Icons';

const skillCategories = [
  {
    title: 'Frontend Engineering',
    subtitle: 'Client-side architectures & user interfaces',
    icon: Code2,
    accentColor: 'text-[#78FECF]',
    skills: [
      { name: 'React', icon: Atom, level: 'Advanced', devicon: 'devicon-react-original colored' },
      { name: 'JavaScript (ES6+)', icon: FileCode2, level: 'Advanced', devicon: 'devicon-javascript-plain colored' },
      { name: 'Tailwind CSS', icon: Palette, level: 'Advanced', devicon: 'devicon-tailwindcss-plain colored' },
      { name: 'HTML5 & CSS3', icon: Layout, level: 'Mastery', devicon: 'devicon-html5-plain colored' },
      { name: 'Responsive Web Design', icon: Layers, level: 'Advanced', devicon: '' },
    ]
  },
  {
    title: 'Backend & Cloud Services',
    subtitle: 'Data layer, auth & service integration',
    icon: Database,
    accentColor: 'text-[#ACFCD9]',
    skills: [
      { name: 'Supabase', icon: Database, level: 'Authentication & Database', devicon: 'devicon-supabase-plain colored' },
      { name: 'Node.js', icon: Server, level: 'Learning / Intermediate', devicon: 'devicon-nodejs-plain colored' },
      { name: 'RESTful APIs', icon: Terminal, level: 'Integration', devicon: '' },
    ]
  },
  {
    title: 'Developer Tools & Workflow',
    subtitle: 'Version control, bundling & continuous deployment',
    icon: Wrench,
    accentColor: 'text-[#0C7489]',
    skills: [
      { name: 'Git & GitHub', icon: GitBranch, level: 'Version Control', devicon: 'devicon-git-plain colored' },
      { name: 'Vercel', icon: Rocket, level: 'Deployment & Hosting', devicon: 'devicon-vercel-plain' },
      { name: 'Vite & npm', icon: Zap, level: 'Build Tools', devicon: 'devicon-vitejs-plain colored' },
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Skills & <span className="text-[#78FECF]">Technologies</span>
        </h2>
        <p className="text-sm sm:text-base text-[#ACADBC] max-w-xl mt-3 font-normal">
          The core frontend technologies, services, and developer workflows I leverage to build polished web apps.
        </p>
      </div>

      {/* 3-Column Structured Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {skillCategories.map((category, idx) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={idx}
              className="group bg-slate-900/60 hover:bg-[#2B2D42]/60 backdrop-blur-md border border-[#ACADBC]/20 hover:border-[#ACFCD9]/40 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2B2D42] border border-[#ACADBC]/25 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <CategoryIcon className={`w-6 h-6 ${category.accentColor}`} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#F8FAFC] group-hover:text-[#ACFCD9] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#ACADBC] font-normal">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-col gap-2.5 w-full">
                {category.skills.map((skill, sIdx) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={sIdx}
                      className="group/chip flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/70 hover:bg-[#2B2D42]/70 border border-[#ACADBC]/15 hover:border-[#ACFCD9]/30 transition-all duration-200 cursor-default"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#2B2D42]/80 border border-[#ACADBC]/20 flex items-center justify-center flex-shrink-0 group-hover/chip:border-[#78FECF]/50 transition-colors">
                          {skill.devicon ? (
                            <i className={`${skill.devicon} text-base`} />
                          ) : (
                            <SkillIcon className="w-4 h-4 text-[#78FECF]" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC] group-hover/chip:text-white truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#78FECF] font-medium px-2 py-0.5 rounded-md bg-[#2B2D42]/80 border border-[#78FECF]/20 flex-shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;