import React, { useState, useEffect } from 'react';


const Popup = (props) => {
    const [getSpaceXData, setSpaceXDate] = useState([]);
    useEffect(() => {
        getData()
        async function getData() {
            try {
                let response = await fetch(`https://api.spaceXdata.com/v3/launches?flight_number=${props.id}`);
                let responseJson = await response.json();
                setSpaceXDate(responseJson);
                return responseJson;
            } catch (error) {
                console.error("Error " + error);
            }
        }
    }, [])

    // console.log(getSpaceXData);
    if (getSpaceXData) {
        return (<>
            <div className="w3-modal w3-show">
                <div className="w3-modal-content w3-animate-zoom">
                    <div className="w3-container">
                        <span onClick={props.handleClose} className="w3-button">❌</span>
                        {
                            getSpaceXData.map && getSpaceXData.map((item, index) => {
                                return (
                                    <div key={index} className="w3-card w3-blue-gray w3-container">
                                        <img src={item.links.mission_patch} alt={item.mission_name}
                                            style={{ width: "30%", paddingTop: "16px" }} title={item.mission_name} />
                                        <p>{item.flight_number} # {item.mission_name}</p>
                                        <p>{item.launch_date_utc}</p>
                                        <p>{item.details}</p>
                                    </div>
                                );
                            })
                        }
                        <span onClick={props.handleClose} className="w3-button w3-text-red">Close</span>
                    </div>
                </div>
            </div>
        </>);
    }
}


export default Popup;