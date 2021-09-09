import React from 'react'

function RenderPeople({people}) {
    return (
        <div className="box has-text-centered has-background-dark">
            <h3 className="has-text-primary has-text-weight-bold is-size-1 mb-0">{people.name}</h3>
            <p className="has-text-white has-text-weight-bold"> Height - {people.height} </p>
            <p className="has-text-white has-text-weight-bold"> Mass - {people.mass} </p>
            <p className="has-text-white has-text-weight-bold"> Hair-color - {people.hair_color} </p>
            <p className="has-text-white has-text-weight-bold"> Skin-color - {people.skin_color} </p>
        </div>
    )
}

export default RenderPeople
