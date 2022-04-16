import { useState } from "react"
import { useDispatch,useSelector} from "react-redux";
export const AddCountry=()=>{
    const [Country,setCountry]=useState("");
    const state=useSelector((state)=>state)
    console.log(state,"The state is ")
    const submitdata=()=>{
        const payload={
            Country
        }
    }
    return(
        <>
        <input type="text" placeholder="Enter the country name"
        onChange={(e)=>setCountry(e.target.value)}
         /> <br />
         <button onClick={submitdata}>Add City</button> <br />
        </>
    )
}