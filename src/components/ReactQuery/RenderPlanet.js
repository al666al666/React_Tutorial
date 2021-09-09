import React from 'react'

function RenderPlanet({planet}) {
    return (
        <div className="box has-text-centered has-background-dark">
            <h3 className="has-text-primary has-text-weight-bold is-size-1 mb-0">{planet.name}</h3>
            <p style={{color:"yellow", fontWeight:"600"}}>Population -{planet.population} </p>
            <p className="has-text-white has-text-weight-bold"> Terrain - {planet.terrain} </p>
        </div>
    )
}

export default RenderPlanet
