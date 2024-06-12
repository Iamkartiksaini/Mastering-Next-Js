import "./style.scss"
const TextRevealComponent = ({ strong, normal, buttonLabel }) => {
    strong = strong || "Hello World"
    normal = normal || " 24 ran May 23. Check out the announcements."
    buttonLabel = buttonLabel || "Watch the Keynote"
    return (
        <div className='textAnimation-container'>
            <div style={{ "--animation-style": "alternate" }} className="main">
                <div className="text">
                    <span>
                        <strong>{strong}</strong> {normal}
                    </span>
                    <button>{buttonLabel}</button>
                </div>
            </div>
        </div>
    )
}

export default TextRevealComponent