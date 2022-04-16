import { useState } from "react"

export const AddCity=()=>{
    const [city,update]=useState("");
    const [population,updatepop]=useState();
    const [country,updatecoun]=useState("");
    const addcity=()=>{
        console.log(city ,"city is");
        fetch(``)

    }
    return(
        <div>
            <input type="text" required onChange={(e)=>update(e.target.value)}  placeholder="Enter the city name"/>
            <input type="number"
            onChange={(e)=>updatepop(e.target.value)}
             required placeholder="Enter the population" />
            <input type="text" 
             onChange={(e)=>updatepop(e.target.value)}
         
            required placeholder="Enter the country name" />
            <button onClick={addcity}>ADD CTIY</button>
        </div>
    )
}