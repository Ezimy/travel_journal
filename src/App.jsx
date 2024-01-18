import React from 'react'
import Card from '/src/components/Card.jsx'
import Header from '/src/components/Header.jsx'
import data from './data'
export default function App() {
  const cardComponents = data.map(element =>{
    return (<Card
      key={element.id}
      item={element}
    />)
})
  return (
    <div>
      <Header />
      <section className="cards-list">
                {cardComponents}
      </section>
    </div>
  )
}