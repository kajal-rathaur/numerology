import {React} from "react";
import Navbar from "../components/Navbar";
import LoshuGrid from "../components/LoshuGrid";
const Calculation = ()=>{
    const dob="14/12/1995"
    return(
        <div>
            {/* <Navbar/> */}
            
            <LoshuGrid dob={dob}/>
        </div>
    )}

export default Calculation;