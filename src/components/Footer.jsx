import React from 'react'

function Footer() {
  return (
    <footer className="py-8 px-6 text-center text-zinc-500 text-sm border-t border-zinc-800/80 mt-auto w-full">
      <p>© {new Date().getFullYear()} Edith-Agoye Daniel Olamide. All rights reserved.</p>
    </footer>
  )
}

export default Footer