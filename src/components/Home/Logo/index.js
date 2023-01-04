import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
// import { ReactComponent as LogoLines } from '../../../assets/images/BigELines.svg';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
        
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
        gsap.fromTo(
          outlineLogoRef.current,
          {
            opacity:1 ,
          },
          {
            opacity: 0,
            delay: 4,
            duration: 4,
          }
        )

    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img src={LogoS} className='solid-logo' ref={solidLogoRef}/>
            <svg ref={outlineLogoRef} cache-id="3c5a245b259944578cbfb4fddc21fa7e" id="eYMBIJXwcjr1"
                className='logo'
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <text className='svg-container' dx="0" dy="0" fontFamily="&quot;eYMBIJXwcjr1:::Lora&quot;" fontSize="500"
                    fontWeight="400" transform="matrix(.56901-.050904 0.050811 0.56797 70.825 261.94)"
                    fill="none" stroke="#000">
                    <tspan y="0" fontWeight="400">E</tspan>
                </text>
                <text className='svg-container' dx="0" dy="0" fontFamily="&quot;eYMBIJXwcjr1:::Lora&quot;" fontSize="500"
                    fontWeight="400" transform="matrix(.56901-.050904 0.050811 0.56797 66.688 266.59)"
                    fill="none" stroke="#000">
                    <tspan y="0" fontWeight="400">E</tspan>
                </text>
                <text className='svg-container' dx="0" dy="0" fontFamily="&quot;eYMBIJXwcjr1:::Lora&quot;" fontSize="500"
                    fontWeight="400" transform="matrix(.56901-.050904 0.050811 0.56797 62.035 272.28)"
                    fill="none" stroke="#040404">
                    <tspan y="0" fontWeight="400">E</tspan>
                </text>
                <path className='svg-container' d="M60.318,72.239L68.9469,61.87l4.4536-.48712-6.6805,10.16-6.4021.69588Z"
                    transform="matrix(.96808 0 0 0.92308 2.0642 5.0696)" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M161.95,129.14l8.5251-10.314l3.6837,1.5787-8.2094,8.6304-3.9994.10525Z"
                    transform="matrix(.94766-.034165 0.033087 0.91777 4.694 15.831)" stroke="#000"
                    strokeWidth="0.6" />
                <path className='svg-container' d="M161.97,129.12l12.302-1.5704l4.9731,54.442" fill="none" stroke="#000"
                    strokeWidth="0.6" />
                <path className='svg-container' d="M202.75,109.01l8.4757-10.217-2.7865-3.8315-6.2697,8.3596.58053,5.6892Z"
                    transform="translate(.000004 0)" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M60.604,71.758l136.83-11.792l5.5623,48.503" transform="translate(0 0.000001)"
                    fill="none" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M211.98,203.19l8.585-10.302l4.3706-.31218-7.6485,9.9899-5.3071.62437Z" stroke="#000"
                    strokeWidth="0.6" />
                <path className='svg-container' d="M221.03,202.4l8.6631-10.146" transform="translate(.000001 0.000001)" fill="none"
                    stroke="#000" />
                <path className='svg-container' d="M224.28,257.22l8.8282-9.8668-.25965-5.5825-8.8282,8.179.25965,7.2702Z"
                    transform="matrix(.97143 0 0 1 6.5296 0.000001)" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M211.69,203.36q9.3316-1.1664,9.4982-.9165l3.4794,54.914"
                    transform="translate(.000001 0)" fill="none" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M224.19,257.44L77.99,270.742" transform="translate(.000001 0)" fill="none"
                    stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M77.984,270.74q-.94172-9.1818-.94172-9.1818" transform="translate(.000001 0)"
                    fill="none" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M77.059,261.73l8.9292-10.182l4.2296.46996-8.3025,8.6158-4.8562,1.0966Z"
                    transform="translate(.000001 0)" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M179.09,180.73l7.636-8.3178l1.2272,4.7725-8.4542,9.9541-.40907-6.4088Z"
                    transform="translate(.000001 0)" stroke="#000" strokeWidth="0.6" />
                <path className='svg-container' d="M174.21,127.64l8.0553-9.255" stroke="#000" />
                <path className='svg-container' d="M196.94,60.07l8.2749-10.227" transform="translate(0 0.000001)" fill="none"
                    stroke="#000" />
                <style>
                    {
                        `@font-face {
                        font-family: 'eYMBIJXwcjr1:::Lora';
                        font-style: normal;font-weight: 400;src: url(data:font/ttf;charset=utf-8;base64,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) format('truetype');}
                    `
                    }
                </style>
            </svg>
        </div>
    )
}

export default Logo;

