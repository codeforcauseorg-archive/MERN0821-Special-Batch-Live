import {UserContext} from "../App";
import { useContext } from "react";
import { Redirect } from "react-router";

export default function LoggedinGaurd({children}){

    let {user} = useContext(UserContext);

    if(user === undefined){
        return <h1>Loading....</h1>
    } else if(user === null){
        return children;
    } else{
        return <Redirect to="/"/>;
    }
}