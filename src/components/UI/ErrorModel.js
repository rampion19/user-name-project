import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import './ErrorModel.css'

const BackDrop = props => {
    return <div className="backdrop" onClick={props.onConfirm} />
}

const ModalOverlay = props => {
    return (
        <div>
            <div className="modal">
                <Card>
                    <header className="header">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="content">
                        <p>{props.message}</p>
                    </div>
                    <footer className="action">
                        <Button onClick={props.onConfirm}>okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
}
const ErrorModel = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root"))}

            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm} />,
                document.getElementById("overlay-root"))}
        </React.Fragment>

    )
}


export default ErrorModel;