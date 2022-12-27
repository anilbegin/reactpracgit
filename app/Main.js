//import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function OurApp() {
    return <OurHeader />
}

function OurHeader() {
    return <h2 className='special'>Our Amazing App</h2>
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<OurApp />)

if(module.hot) {
    module.hot.accept()
}