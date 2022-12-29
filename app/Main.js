//import './main.css'
import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

function OurApp() {
    const [pets, setPets] = useState([
        {name: "BarksAlot", species: "dog", age: 1, id: 100001},
        {name: "MeowsAlot", species: "cat", age: 2, id: 100002},
        {name: "PurrsAlot", species: "cat", age: 3, id: 100004},
        {name: "Popo", species: "dog", age: 5, id: 100003}
      ])
    return (
        <>
            <OurHeader />
            <LikeArea />
            <ul>
                {pets.map(function(pet) {
                    return <Pets name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
                })}
            </ul>
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
    
function Pets(props) {
    return <li>{props.name} is a {props.species} and is {props.age} years old.</li>
}

function TimeArea() {
    const [theTime, setTheTime] = useState(new Date().toLocaleString()) 

    setTimeout(() => {
        setTheTime(new Date().toLocaleString())
    }, 1000)
    return <p>The current time is {theTime}</p>
}

const root = ReactDOM.createRoot(document.querySelector('#app'))
root.render(<OurApp />)


if(module.hot) {
    module.hot.accept()
}