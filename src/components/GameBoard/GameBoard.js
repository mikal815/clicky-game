import React from "react";
import "./GameBoard.css";

const GameBoard = props => (
    
        <div className="row">
            
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
                {props.children}
            </div>
            <div className="col-md-2">
            </div>
           
        </div>
    
)

export default GameBoard;