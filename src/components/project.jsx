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



  </div>

</>


  )
}

export default Project