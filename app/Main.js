//import './main.css'
import React, {useState} from 'react'
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
    const [likeCount, setLikeCount] = useState(0)

    function increaseLikes() {
        setLikeCount(prev => prev + 1)
    }

    function decreaseLikes(){
        setLikeCount((prev) => {
            if(prev > 0) {
                return prev -1
            }
            return 0
        })
    }

    return (
        <>
            <h3>The page has been liked {likeCount} times.</h3>
            <button onClick={increaseLikes}>Increase Likes</button>
            <button onClick={decreaseLikes}>Decrease Likes</button>
        </>
    )
}
function TimeArea() {
    return <p>The current time is {new Date().toLocaleString()}</p> // only this part gets rendered inspite of setInterval being applied to the whole OurApp component.
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
setInterval(() => {
  root.render(<OurApp />)
}, 1000)

if(module.hot) {
    module.hot.accept()
}