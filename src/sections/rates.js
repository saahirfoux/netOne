import React from 'react';
 
function Rates(props) {
  console.log(props, 'Before Boolean');
  return !props.showDefault ? <Default /> : <> <Body id={props} /> </>;
}
 
function Body({ showDefault }) { 

  const w2Disabled = showDefault === 'netone';
  const icDisabled = showDefault === '1099';

  return <>
          <div class="rateFields">
            <label for="w2Rate">W2 Rate</label>
            <input disabled={w2Disabled} type="text" id="w2Rate" name="rate" required/>
          </div>
          <div class="rateFields">
            <label for="icRate">IC Rate</label>
            <input  disabled={icDisabled} type="text" id="icRate" name="rate" required/>
          </div>
        </>
}
 
function Default() { 
  return <div className="mid-container">
            <p>
              Please select a desired Employment Status
            </p>
        </div>
}

export default Rates;