import React from 'react';
import FetchAPI from './FetchAPI';


const App = () => {
    return (<>
        <div className="w3-container w3-sand w3-cursive">
            <div className="w3-panel w3-center w3-round w3-grey">
                <h1>Space X</h1>
            </div>
            <div className="w3-row-padding">
                <FetchAPI />
            </div>
            <div className="w3-panel w3-center w3-round w3-grey">
                <p className="w3-large">React JS Project.</p>
                <p className="w3-medium">Design and Developed by Jeetendra Gupta.</p>
                <p className="w3-small">© 2020</p>
            </div>
        </div>
    </>);
}


export default App;