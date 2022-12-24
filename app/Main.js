import React from 'react'
import ReactDOM from 'react-dom/client'

function OurApp() {
    return <h1 className='special'>Our Amazing App</h1>
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<OurApp />)

if(module.hot) {
    module.hot.acccept()
}