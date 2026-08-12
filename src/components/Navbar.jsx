import GooeyNav from './GooeyNav'
const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-max px-6 py-2 bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-lg rounded-full flex items-center justify-center">
      <GooeyNav items={items} />
    </header>
  )
}