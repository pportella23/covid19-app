import React from "react";
import "./ThemeToggle.css";

export default function ThemeToggle(props){
    return(
        <button onClick={props.clickAction}>Toggle theme</button>
    )
}
