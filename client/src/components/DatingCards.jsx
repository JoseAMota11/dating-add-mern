import "./DatingCards.css"
import { useState } from "react"
import DatingCard from "react-tinder-card"

function DatingCards() {
  const [people, setPeople] = useState([
    { name: "Random Guy", imgUrl: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    { name: "Another Guy", imgUrl: "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    { name: "Random Girl", imgUrl: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" },
    { name: "Another Girl", imgUrl: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" }
  ])

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
// Page 43