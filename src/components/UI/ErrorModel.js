import React from "react";
import Card from "./Card";
import Button from "./Button";
import './ErrorModel.css'
const ErrorModel = props => {
    return (
    <div>
        <div className="backdrop" onClick = {props.onConfirm} />
    <div className="modal">
        <Card>
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="action">
            <Button onClick = {props.onConfirm}>okay</Button>
        </footer>
        </Card>
    </div>
    </div>

    )
}


export default ErrorModel;