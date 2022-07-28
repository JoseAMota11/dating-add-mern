import "./DatingCards.css"
import { useState, useEffect } from "react"
import DatingCard from "react-tinder-card"
import axios from "axios"

function DatingCards() {

  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://127.0.0.1:8001/dating/cards")
      setPeople(req.data)
    }
    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("receiving " + nameToDelete)
  }
  const outOfFrame = (name) => {
    console.log(name + " left the screen!!")
  }

  return (
    <div className="datingCards">
      <div className="datingCards__container">
        {
          people.map(person => (
            <DatingCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)} >
              <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                <h3 className="person__name">{person.name}</h3>
              </div>
            </DatingCard>
          ))
        }
      </div>
    </div>
  )
}

export default DatingCards
