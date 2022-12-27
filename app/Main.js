//import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function OurApp() {
    return (
        <>
            <OurHeader />
            <LikeArea />
            <TimeArea />
        </>
    )
}

function OurHeader() {
    return <h2 className='special'>Our Amazing App</h2>
}
function LikeArea() {
    return (
        <>
            <h3>The page has been liked 0 times.</h3>
            <button>Increase Likes</button>
            <button>Decrease Likes</button>
        </>
    )
}
function TimeArea() {
    return <p>The current time is {new Date().toLocaleString()}</p>
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<OurApp />)

if(module.hot) {
    module.hot.accept()
}