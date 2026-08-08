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
    <div>
      <h2>Skills</h2>
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients
        enableArrowNavigation
        displayScrollbar
      />
    </div>
  )
}

export default Skills