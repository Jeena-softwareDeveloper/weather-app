
import React from "react"



const Weatherdetails=({icons,temp,city,country,lat,lag})=>{
    return(
      <>
      <div>
        <img className='iconimg' src={icons} alt="iconn" />
      </div>
      <div className='temp'>{temp}°F</div>
      <div className='city'>{city}</div>
      <div className='city'>{country}</div>
      <div className='cord'>
      <div><span>latitude {lat}</span></div>
      <div><span>lagtitude {lag}</span></div>
      </div>
      
      </>
    )
}

export default Weatherdetails