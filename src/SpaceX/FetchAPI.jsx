import React, { useState, useEffect } from 'react';
import DisplayImage from './DisplayImage';


const FetchAPI = () => {
    const [getSpaceXData, setSpaceXDate] = useState({});

    useEffect(() => {
        getData()
        async function getData() {
            try {
                let response = await fetch(`https://api.spaceXdata.com/v3/launches?limit=104`);
                let responseJson = await response.json();
                setSpaceXDate(responseJson);
                return responseJson;
            } catch (error) {
                console.error(error);
            }
        }
    }, [])

    if (getSpaceXData) {
        return (<>
            {
                getSpaceXData.map && getSpaceXData.map((item,index) => {
                    return(<DisplayImage key={index} id={item.flight_number} 
                    img={item.links.mission_patch_small} name={item.mission_name} />);
                })
            }
        </>);
    }
}


export default FetchAPI;