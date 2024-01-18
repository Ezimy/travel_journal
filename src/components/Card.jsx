import React from 'react'
import locationIcon from '/images/location-icon.svg'
export default function Card(props){
    return(
    <section className='card'>
        <img className='card-img' src={props.item.imageUrl}/>
        <div className='card-details'>
            <div className='location-details'>
                <img className='location-icon' src={locationIcon}/>
                <h3>{props.item.location}</h3>
                <a href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
            </div>
            <h1>{props.item.title}</h1>
            <h3>{props.item.startDate} - {props.item.endDate}</h3>
            <p>{props.item.description}</p>
        </div>
    </section>
    )
}