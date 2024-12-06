import React, { useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import cloud from "./assets/cloud.png";
import cold from "./assets/cold.png";
import halfsun from "./assets/halfsun.png";
import rain from "./assets/rain.png";
import sunandcloud from "./assets/sunandcloud.png"
import sun from "./assets/sun.png";
import terma from "./assets/terma.png";
import thunder from "./assets/thunder.png";
import wind from "./assets/wind.png"
import Weatherdetails from './Weatherdetails';

 
function App() {
const [iconn,seticonn]=useState(sun);
const [temper, settemper] = useState()
const [cities, setcities] = useState("")
const [countrie, setcountrie] = useState("In")
const [lags, setlags] = useState(0);
const [lats, setlats] = useState();
const [texts, settexts] = useState("chennai");
const [clickbutton, setclickbutton] = useState();



const searchb = async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${texts}&appid=c9025062f140e87a25909b5532c9d8db`
    try{
        
        const respo=await axios.get(url);
        const realdata=respo.data;
              console.log(realdata);
              settemper(realdata.main.temp);
              setcities(realdata.name);
              setlags(realdata.coord.lat);
              setlats(realdata.coord.lon);
              setcountrie(realdata.sys.country)
              
    }catch{
   console.log("this is not defined please check your url");
    }
   

}

  return (
    <div className='container'>
     <div className='inputcontainer'>
        <input className='inputs' value={texts} onChange={(e)=>settexts(e.target.value)} type='text' placeholder='Search City'/>
        <button onClick={searchb} className='weathercheck'>Check</button>
            </div> 
   <Weatherdetails icons={iconn} temp={temper}
      city={cities} country={countrie} lag={lags} lat={lats}
   />
    
    </div>
  )
}

export default App