import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Proxy.css';

function Proxy() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={5}>
            <div className='proxy-content-1'>
              <h4>Enter Proxies</h4>
              <div className='tcard'>
                <textarea
                  placeholder='IP:Port:User:Pass'
                  id='group-area'
                  autoComplete='off'
                  autoCapitalize='off'
                  spellCheck='false'
                  data-gramm_editor='false'
                ></textarea>
              </div>
              <h6>Proxy List Name</h6>
              <div className='proxy-name'></div>
            </div>
          </Col>
          <Col sm={7}>
            <div className='proxy-content-2'>
              <h4>Proxy List</h4>
              <div className='proxy-list'>
                <span>Task ID</span>
                <span>Proxy</span>
                <span>Email</span>
                <span>Status</span>
                <span></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Proxy;
