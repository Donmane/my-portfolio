import AnimatedList from './AnimatedList'

const items = [
  'HTML', 
  'CSS5', 
  'JavaScript', 
  'React', 
  'Tailwind CSS', 
  'Supabase', 
  'Git', 
  'Vercel',
  'GSAP',
]

function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col gap-6 items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight border-b border-zinc-800 pb-4 w-full text-center md:text-left">
          Skills
        </h2>
        <div className="w-full flex justify-center">
          <AnimatedList
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients
            enableArrowNavigation
            displayScrollbar
          />
        </div>
      </div>
    </section>
  )
}

export default Skills