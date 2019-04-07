import React from "react";
import "./TopBar.css";

const TopBar = props => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <h3 className="navbar-brand">Shape Shifter</h3>
            <div className="text-center">
                <h4>{props.message}</h4>
            </div>
            <div className="nav navbar-nav navbar-right">
                <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
            </div>
        </div>
    </nav>
)

export default TopBar;