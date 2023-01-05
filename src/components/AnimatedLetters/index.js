import './index.scss';

const AnimatedLetters = ({ letterClass, stringArray, index }) => {
    return (
        <span>
            {
                stringArray.map((char, i) => {
                    return (
                        <span key={char + i} className={`${letterClass} _${i + index}`}>
                            {char}
                        </span>
                    )
                })
            }
        </span>
    )
}

export default AnimatedLetters;