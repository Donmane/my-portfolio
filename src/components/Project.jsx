import TiltedCard from './TiltedCard'
function Project() {
  return (
  <>
  <div>

  <div>
    <TiltedCard
  imageSrc="/src/assets/peerup.png"
  altText="PeerUp"
  captionText="PeerUp"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showTooltip
/>
<h3>PeeUp</h3>
<p>A student study help notice board where you can post what you're stuck on and connect with peers via email.</p>
<a href="https://peer-up-eight.vercel.app/">Live project</a>
<a href="https://github.com/Donmane/PeerUp">GitHub</a>
</div>


  <div>
    <TiltedCard
  imageSrc="/src/assets/properaetherbook.png"
  altText="Aetherbook"
  captionText="Aetherbook"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showTooltip
/>
<h3>Aetherbook</h3>
<p>A role-based lecture room booking system with three dashboards for admins, lecturers, and students. Admins manage rooms and user access, lecturers book rooms, students view schedules. </p>
<a href="https://lecture-room-booking-app.vercel.app/">Live project</a>
<a href="https://github.com/Donmane/Lecture_room_booking_app">GitHub</a>
</div>

  <div>
    <TiltedCard
  imageSrc="/src/assets/Designermaketplace.jpg"
  altText="Designora"
  captionText="Designora"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.05}
  showTooltip
/>
<h3>Designora</h3>
<p>A demo marketplace built with React where clients can browse and hire designers, and designers can open and list their services. Built with React and local storage </p>
<a href="https://designer-marketplace-psi.vercel.app/about">Live project</a>
<a href="https://github.com/Donmane/Designer-Marketplace">GitHub</a>
</div>


  </div>

</>


  )
}

export default Project