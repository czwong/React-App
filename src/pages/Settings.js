import React, { useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Settings.css';

function Settings() {
  const inputVal = useRef(null);
  const saveButton = () => {
    localStorage.value = 200;
    console.log(localStorage);
    console.log(inputVal.current.value.split('\n'));
  };

  return (
    <Container fluid>
      <Row>
        <div className='settings-content'>
          <div className='tcard'>
            <textarea
              placeholder='Enter your emails...'
              id='group-area'
              autocomplete='off'
              autocapitalize='off'
              spellcheck='false'
              data-gramm_editor='false'
              ref={inputVal}
            ></textarea>
          </div>
          <div className='buttons-row'>
            <div className='button' id='save-btn' onClick={saveButton}>
              <span>Save All</span>
            </div>
            <div className='button' id='remove-btn'>
              <span>Delete All</span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Settings;
