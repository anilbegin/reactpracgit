//import './main.css'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

function OurApp() {
    const [pets, setPets] = useState([])

    // on first Load
    useEffect(() => {
        if(localStorage.getItem('saveData')) {
            setPets(JSON.parse(localStorage.getItem('saveData')))
        }
    }, [])

    // on every Change to pets state
    useEffect(() => {
        localStorage.setItem('saveData', JSON.stringify(pets))
    }, [pets])

    return (
        <>
            <OurHeader />
            <LikeArea />
            <AddPetsForm setPets={setPets} />
            <ul>
                {pets.map(function(pet) {
                    return <Pets setPets={setPets} id={pet.id} name={pet.name} species={pet.species} age={pet.age} key={pet.id} />
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
        props.setPets(prev => prev.concat({name, species, age, id: Date.now()}))
        setName("")
        setSpecies("")
        setAge("")
    }
    return (
        <>
            <fieldset>
                <legend>Add Pet Info</legend>
                <form onSubmit={formHandler}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder='Pet Name' />
                    <input value={species} onChange={e => setSpecies(e.target.value)} placeholder='Species' />
                    <input value={age} onChange={e => setAge(e.target.value)} placeholder='Age' />
                    <button>Add Pet</button>
                </form>
            </fieldset>
        </>
    )
}

function Pets(props) {
    function deleteHandler() {
        props.setPets(prev => prev.filter(pet => pet.id != props.id))
    }
    return <li>{props.name} is a {props.species} and is {props.age} years old. <button onClick={deleteHandler}>Delete</button></li>
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