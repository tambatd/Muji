import React, { Component } from "react";	
import "./books.css";

export default class Books extends Component {

    Enter(){
        console.log("Mouse Entered");
    }

    
    Exit(){
        console.log("Mouse Exited");
    }

    render(){
       return(
           <div className="Books" onMouseEnter={() => this.Enter()} onMouseLeave={() => this.Exit()}>
           </div>
       )
   }   
}
