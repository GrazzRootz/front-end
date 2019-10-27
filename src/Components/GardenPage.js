import React from 'react'
import App from '../App.css';

const GardenPage = () => {


     return (
     <div>
         <h1>Ken's Garden</h1>
         <img src='https://steemitimages.com/DQmbxDbMDwk2UUdyXNoAngPT9eDi1EVjCyuAEADYEE6aGVt/IMG_20180426_130346349.jpg' style={{height: '20vh'}} />
         <div>
             <h3>Plants In this Garden:</h3>
             <li>Tulips: 16</li>
             <li>Tomatoes: 12</li>
             <li>Potatoes: 20</li>
             <li>Oak Tree: 1</li>
        </div>
        <div>
            <h3>Tools Available Here</h3>
            <li>Lawnmower: 1</li>
            <li>Fertilizer: 5kg</li>
        </div>

    </div>
    );
}

export default GardenPage