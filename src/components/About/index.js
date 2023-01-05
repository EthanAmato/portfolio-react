import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    


    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        stringArray={Array.from("About Me")}
                        letterClass={letterClass}
                        index={15}
                    />
                </h1>
                <p>
                    I am a driven full-stack developer with hands-on experience in Quantitative, Analytical Research and Data Science
                    and am looking for an opportunity to work on apps by an established, customer-driven company that will
                    provide an environment where I can continuously learn and grow
                </p>
                <p>
                    I am naturally inquisitive, inspired by and open to differing perspectives, and 
                    am in a constant cycle of improving my skills
                </p>
                <p>
                    If I had to define myself in a single sentence, I would say that I am
                    "A hard worker driven by curiosity, whether it's when I'm baking in the kitchen, when I'm
                    doing Language Exchange with my friends in Tokyo, or when I'm behind a computer ready to start
                    a new project."
                </p>
            </div>
        </div>
    )
}

export default About;