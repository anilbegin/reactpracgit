//import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function OurApp() {
    return (
        <>
            <OurHeader />
            <TimeArea />
        </>
    )
}

function OurHeader() {
    return <h2 className='special'>Our Amazing App</h2>
}
function TimeArea() {
    return <p>The current time is {new Date().toLocaleString()}</p>
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<OurApp />)

if(module.hot) {
    module.hot.accept()
}