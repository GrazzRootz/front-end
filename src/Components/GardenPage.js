import React, {useState} from 'react'
import App from '../App.css';

const GardenPage = () => {

  const [votes, changeVote] = useState('NO');

  const handleVote = (vote) => {
      if (votes !== vote) {
          changeVote(vote)
      }
  }

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
        <div>
           <h3> Get Involved In Ken's Garden:</h3>
           <li>
            <p>Should We Plant A Palm Tree In Ken's Garden?</p>
            <button onClick={() => handleVote('YES')}>Yes</button>
            <button onClick={() => handleVote('NO')}>No</button>
            <p> Current Winner: {votes} </p>
           </li>
        </div>

    </div>
    );
}

export default GardenPage