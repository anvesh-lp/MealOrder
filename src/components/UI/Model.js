import React, {Fragment} from 'react';
import classes from "./styles/Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div onClick={props.onclose} className={classes.backdrop}/>
}

const ModelOverlay = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>);
}

const portalElement = document.getElementById('overlays');


function Model(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>, portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
        </Fragment>
    );
}

export default Model;