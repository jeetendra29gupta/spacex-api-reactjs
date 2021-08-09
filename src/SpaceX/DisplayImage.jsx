import React, { useState } from 'react';
import Popup from './Popup';

const DisplayImage = (props) => {
    const [getOpen, setOpen] = useState(false);

    const togglePopup = () => {
        setOpen(!getOpen);
    }

     return (<>
        <div className="w3-col s6 m4 l3 w3-padding-small w3-center">
            <div className="w3-card w3-blue-gray w3-container">
                <img src={props.img} alt={props.name} style={{ width: "100%", paddingTop: "16px" }} title={props.name} />
                <p>
                    <button className="w3-button w3-round" onClick={togglePopup}>
                        {props.id} # {props.name.split("/")[0].split("&")[0]}
                    </button>
                </p>
            </div>
            {getOpen && <Popup handleClose={togglePopup} key={props.id} id={props.id} />}
        </div>
    </>);
}


export default DisplayImage;