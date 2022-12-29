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
            <AddPetsForm setPets={setPets} />
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

function AddPetsForm(props) {

    const [name, setName] = useState()
    const [species, setSpecies] = useState()
    const [age, setAge] = useState()
    
    function formHandler(e) {
        e.preventDefault()
        props.setPets(prev => prev.concat({name: name, species: species, age: age, id: Date.now()}))
    }
    return (
        <>
            <fieldset>
                <legend>Add Pet Info</legend>
                <form onSubmit={formHandler}>
                    <input onChange={e => setName(e.target.value)} placeholder='Pet Name' />
                    <input onChange={e => setSpecies(e.target.value)} placeholder='Species' />
                    <input onChange={e => setAge(e.target.value)} placeholder='Age' />
                    <button>Add Pet</button>
                </form>
            </fieldset>
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