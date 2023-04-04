import React from "react"
import {Link} from  "react-router-dom";


const Home = () =>{
    return (
        <div>
        <ul>
        <li>
        <Link to ="/">sidenav</Link>
        </li>
        <li>
        <Link to="/Dischargesummary">Dischargesummary</Link>
        </li>
        </ul>
        </div>
    )
}