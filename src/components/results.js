import React from 'react';
import './css/results.scss';

const Results = () => {

  const resultsLottery = [ "02", "23", "04", "20", "16", "13" ];
  const especialResults = [ "05", "01", "14" ];

   const renderList = resultsLottery.map((item) => 
      <span>{item}</span>
   );
 

  return (
    <div className="results">
        <h2>RESULTADO DEL SORTEO DEL 01-01-23</h2>
        <div className="results-number">
          {renderList}
          <span className='bronze'>{especialResults[0]}</span>
          <span className='silver'>{especialResults[1]}</span>
          <span className='golden'>{especialResults[2]}</span>
        </div>
    </div>
  )
}

export default Results