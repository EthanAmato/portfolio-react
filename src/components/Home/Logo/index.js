import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
// import { ReactComponent as LogoLines } from '../../../assets/images/BigELines.svg';
import { useEffect, useRef } from 'react';
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import gsap from 'gsap-trial';


const Logo = () => {
    gsap.registerPlugin(DrawSVGPlugin);
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    
    useEffect(() => {
        let timeline = gsap.timeline()
        timeline //the current issue is that i definitely don't understand what im doing with this
            //consult more gsap guides https://greensock.com/mistakes/#from

            .fromTo(".logoStroke", {
                drawSVG: "0%",
            },
            {
                duration: 7,
                drawSVG: "100%",
                immediateRender: false,
            })
            .fromTo(outlineLogoRef.current, {
                opacity: 1,
            },
            {
                opacity: 0,
                duration: 2,
                display: "none",
                immediateRender: false
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 3,
                duration: 7,
                immediateRender: false

            }
        )

        return (() => {
            //reset timeline on unmount so the animation plays no matter how quickly
            //user switches btw pages
            timeline.clear()
        })
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img src={LogoS} className='solid-logo' ref={solidLogoRef} alt="Big E" />

            <svg id="eupZsvr0StJ1" ref={outlineLogoRef} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                className='logo'>
                <g className='svg-container'>
                    <path className="logoStroke" d="M60.318,72.239L68.9469,61.87l4.4536-.48712-6.6805,10.16-6.4021.69588Z"
                        transform="matrix(.96808 0 0 0.92308 2.0642 5.0696)" fill="#fff" stroke="#fff"
                        strokeWidth="0.6" />
                    <path className="logoStroke" d="M161.95,129.14l8.5251-10.314l3.6837,1.5787-8.2094,8.6304-3.9994.10525Z"
                        transform="matrix(.94766-.034165 0.033087 0.91777 4.694 15.831)" fill="#fff"
                        stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M161.97,129.12l12.302-1.5704l4.9731,54.442" fill="none" stroke="#fff"
                        strokeWidth="0.6" />
                    <path className="logoStroke" d="M202.75,109.01l8.4757-10.217-2.7865-3.8315-6.2697,8.3596.58053,5.6892Z"
                        transform="translate(.000004 0)" fill="#fff" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M60.604,71.758l136.83-11.792l5.5623,48.503" transform="translate(0 0.000001)"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M211.98,203.19l8.585-10.302l4.3706-.31218-7.6485,9.9899-5.3071.62437Z" fill="#fff"
                        stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M221.03,202.4l8.6631-10.146" transform="translate(.000001 0.000001)" fill="none"
                        stroke="#fff" />
                    <path className="logoStroke" d="M224.28,257.22l8.8282-9.8668-.25965-5.5825-8.8282,8.179.25965,7.2702Z"
                        transform="matrix(.97143 0 0 1 6.5296 0.000001)" fill="#fdfdfd" stroke="#fff"
                        strokeWidth="0.6" />
                    <path className="logoStroke" d="M211.69,203.36q9.3316-1.1664,9.4982-.9165l3.4794,54.914"
                        transform="translate(.000001 0)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M224.19,257.44L77.99,270.742" transform="translate(.000001 0)" fill="none"
                        stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M77.984,270.74q-.94172-9.1818-.94172-9.1818" transform="translate(.000001 0)"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M77.059,261.73l8.9292-10.182l4.2296.46996-8.3025,8.6158-4.8562,1.0966Z"
                        transform="translate(.000001 0)" fill="#fff" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M179.09,180.73l7.636-8.3178l1.2272,4.7725-8.4542,9.9541-.40907-6.4088Z"
                        transform="translate(.000001 0)" fill="#fff" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="M174.21,127.64l8.0553-9.255" stroke="#fff" />
                    <path className="logoStroke" d="M196.94,60.07l8.2749-10.227" transform="translate(0 0.000001)" fill="none"
                        stroke="#fff" />
                </g>
                <g className='svg-container'>
                    <path className="logoStroke"
                        d="M60.099112,72.175705Q196.520621,59.773749,196.520621,59.570439l6.302632,49.607821-9.555606,1.219864q-4.066215-36.799245-30.699923-36.799245"
                        transform="translate(.000003 0.000001)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M162.758889,73.533596q-19.809235.415579-36.709421,3.324627c-16.900186,2.909048-19.116605,9.142724-18.5625,26.181436s4.848415,54.440764,5.263993,54.717816q.415578.277052,53.471081-4.432836l-4.709888-24.380596l12.605876-.969683l5.402519,59.56623-9.419776.969683q-.554105-26.597015-25.627332-23.272388t-31.168376,3.878732l7.203358,79.098413-.277052,8.450093l56.103077-6.09515q39.788794-4.847955,35.115999-46.878776"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M211.511463,203.022236l9.727442-.788711l3.308439,55.472619-146.77119,13.171785-.87908-9.455241q22.449533-.837655,16.658516-32.078668"
                        transform="translate(0 0.000001)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M93.790709,229.430099L81.861326,94.925843L81.38618,81.639761L60.999963,84.590995L59.919854,72.578119l-.041035-.389317.78-.06"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                </g>
                <g className='svg-container' transform="translate(5-6)">
                    <path className="logoStroke"
                        d="M60.099112,72.175705Q196.520621,59.773749,196.520621,59.570439l6.302632,49.607821-9.555606,1.219864q-4.066215-36.799245-30.699923-36.799245"
                        transform="translate(.000003 0.000001)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M162.758889,73.533596q-19.809235.415579-36.709421,3.324627c-16.900186,2.909048-19.116605,9.142724-18.5625,26.181436s4.848415,54.440764,5.263993,54.717816q.415578.277052,53.471081-4.432836l-4.709888-24.380596l12.605876-.969683l5.402519,59.56623-9.419776.969683q-.554105-26.597015-25.627332-23.272388t-31.168376,3.878732l7.203358,79.098413-.277052,8.450093l56.103077-6.09515q39.788794-4.847955,35.115999-46.878776"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M211.511463,203.022236l9.727442-.788711l3.308439,55.472619-146.77119,13.171785-.87908-9.455241q22.449533-.837655,16.658516-32.078668"
                        transform="translate(0 0.000001)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M93.790709,229.430099L81.861326,94.925843L81.38618,81.639761L60.999963,84.590995L59.919854,72.578119l-.041035-.389317.78-.06"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                </g>
                <g className='svg-container' transform="translate(9-10)">
                    <path className="logoStroke"
                        d="M60.099112,72.175705Q196.520621,59.773749,196.520621,59.570439l6.302632,49.607821-9.555606,1.219864q-4.066215-36.799245-30.699923-36.799245"
                        transform="translate(.000003 0.000001)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M162.758889,73.533596q-19.809235.415579-36.709421,3.324627c-16.900186,2.909048-19.116605,9.142724-18.5625,26.181436s4.848415,54.440764,5.263993,54.717816q.415578.277052,53.471081-4.432836l-4.709888-24.380596l12.605876-.969683l5.402519,59.56623-9.419776.969683q-.554105-26.597015-25.627332-23.272388t-31.168376,3.878732l7.203358,79.098413-.277052,8.450093l56.103077-6.09515q39.788794-4.847955,35.115999-46.878776"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M211.511463,203.022236l9.727442-.788711l3.308439,55.472619-146.77119,13.171785-.87908-9.455241q22.449533-.837655,16.658516-32.078668"
                        transform="translate(0 0.000001)" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke" d="" fill="none" stroke="#fff" strokeWidth="0.6" />
                    <path className="logoStroke"
                        d="M93.790709,229.430099L81.861326,94.925843L81.38618,81.639761L60.999963,84.590995L59.919854,72.578119l-.041035-.389317.78-.06"
                        fill="none" stroke="#fff" strokeWidth="0.6" />
                </g>
            </svg>

        </div>
    )
}

export default Logo;

