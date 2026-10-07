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
    accentColor: 'text-cyan-400',
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
    accentColor: 'text-teal-400',
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
    accentColor: 'text-amber-400',
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
      {/* Section Header - Clean (No Badges) */}
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
          Skills & <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mt-3 font-normal">
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
              className="group bg-slate-900/60 hover:bg-slate-900/90 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 hover:border-cyan-500/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <CategoryIcon className={`w-6 h-6 ${category.accentColor}`} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
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
                      className="group/chip flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/70 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-200 cursor-default"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover/chip:border-slate-600 transition-colors">
                          {skill.devicon ? (
                            <i className={`${skill.devicon} text-base`} />
                          ) : (
                            <SkillIcon className="w-4 h-4 text-cyan-400" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/chip:text-white truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-800/60 flex-shrink-0">
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