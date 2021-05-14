import React, { useRef, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { emailContext } from '../components/Context/EmailContext';
import './Settings.css';

function Settings() {
  const { setEmail } = useContext(emailContext);
  const inputVal = useRef(null);
  const saveButton = () => {
    setEmail(
      inputVal.current.value.split('\n').filter((email) => email !== '')
    );
  };

  return (
    <Container fluid>
      <Row>
        <div className='settings-content'>
          <div className='tcard'>
            <textarea
              placeholder='Enter your emails...'
              id='group-area-2'
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
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
