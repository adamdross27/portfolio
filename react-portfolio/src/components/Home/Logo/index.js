import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const solidLogoRef = useRef()

  useEffect(() => {
    if (solidLogoRef.current) {
      gsap.fromTo(
        solidLogoRef.current,
        { 
          opacity: 0, 
          scale: 0.25,   
          rotation: -180, 
          y: -100 // Start off-screen and bounce up
        },
        {
          opacity: 1, 
          scale: 1,    
          rotation: 10, 
          y: 0, // End position
          duration: 3, 
          ease: 'bounce.out', // Bounce effect for the Y-axis
          delay: 0.5 // 0.5-second delay before the animation starts
        }
      )
    }
  }, [])

  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  )
}

export default Logo
