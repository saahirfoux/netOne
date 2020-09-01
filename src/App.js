import React, { useState, useRef } from 'react';
import './App.css';
import { Documents, Rates, TravelSlider, LearnMore } from './sections';


function App() {
  
  const handleTravel = (event) => {
    console.log(event.target.checked, 'Yolo');
    if (event.target.checked) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const InitialState = {
    status: false,
    onSite: false,
    remote: false,
    w2: false,
    ic: false
  }

  const [rate, setRates] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [validators, setValidators] = useState(InitialState);

  const showModal = () => {
    setShow(!show);
  };

  const updateStatus = (status) => {
    /**
     * update the rates
     * update the validator 
     * */
    setRates(status)
    validators.status = true;
    setValidators(validators);
  }
  const updateOnSite = () => {
    validators.onSite = true;
    setValidators(validators);
  }
  const updateRemote = () => {
    validators.remote = true;
    setValidators(validators);
  }

  const employmentStatusField = useRef(null);
  const onSiteField = useRef(null);
  const remoteField = useRef(null);


  const checkValidators = () => {
    let {status, onSite, remote, w2, ic} = validators;

    if (!status) {
      employmentStatusField.current.className = "status required"
    } else {
      employmentStatusField.current.className = "status"
    }
    if (!onSite) {
      onSiteField.current.className = "fieldItems required"
    } else {
      onSiteField.current.className = "fieldItems"
    }
    if (!remote) {
      remoteField.current.className = "fieldItems required"
    } else {
      remoteField.current.className = "fieldItems"
    }
  }
  
  return (
    <>
      <div className="box flex">
        <div className="mainContainer">
          <div>
            <fieldset className="employmentContainer">
              <legend>Employment Status:<div class="icons info"></div></legend>
              <div className="emp-container">
                <div className="status" ref={employmentStatusField}>
                  <div className="fieldItems">
                    <input type="radio" id="netone" name="status" value="netone" onClick={e => updateStatus("netone")}/>
                    <label for="netone">W2 with NetOne Recruiter</label>
                  </div>
                  <div className="fieldItems">
                    <input type="radio" id="1099" name="status" value="1099" onClick={e => updateStatus("1099")}/>
                    <label for="1099">IC 1099 Only</label>
                  </div>
                  <div className="fieldItems">
                    <input type="radio" id="ICW2" name="status" value="ICW2" onClick={e => updateStatus("ICW2")}/>
                    <label for="ICW2">IC, also willing to work as W2</label>
                  </div>
                </div>
                <Documents selected={rate}/>
              </div>
              <div className="learnMore">
                <button onClick={e => showModal(e)}>Learn More</button>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset id="hourly">
              <legend>Hourly Pay Rate:</legend>
              <Rates showDefault={rate}/>
              <div className="market-analysis">
                <button id="market-btn" type="submit">Market Analysis Tool</button>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset id="locationPreferences">
              <legend>Location Preference:</legend>
              <div ref={onSiteField} className="fieldItems">
                <input type="checkbox" id="onsite" name="onsite" onChange={updateOnSite} value="onesite"/>
                <label for="onsite">Onsite</label>
              </div>
              <div ref={remoteField}  className="fieldItems">
                <input type="checkbox" id="remote" name="remote" onChange={updateRemote} value="remote"/>
                <label for="remote">Remote</label>
              </div>
              <div className="fieldItems">
                <input type="checkbox" id="travel" name="travel" value="travel" onChange={handleTravel}/>
                <label for="travel">Willing to Travel</label>
              </div>
              <TravelSlider visible={isVisible}/>
            </fieldset>
          </div>
        </div>
        <div>
          <LearnMore onClose={showModal} show={show}/>
        </div>
        <div className="btnContainer">
          <button>Cancel</button>
          <button onClick={checkValidators}>Save</button>
        </div>
      </div>
    </>
  );
}

export default App;
