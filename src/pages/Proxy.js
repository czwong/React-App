import React, { useRef, useContext } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Proxy.css';
import { useProxyList } from '../components/Context/ProxyContext';

function Proxy() {
  const { ProxyList, setProxyList } = useProxyList();

  const inputName = useRef(null);
  const inputProxy = useRef(null);

  const saveButton = () => {
    const proxyList = [];
    proxyList.push({
      name: inputName.current.value,
      number: inputProxy.current.value.split('\n').length,
      cName: 'proxy-group',
    });
    setProxyList([...ProxyList, ...proxyList]);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={5}>
            <div className='proxy-content-1'>
              <h5>Enter Proxies</h5>
              <div className='rcard'>
                <textarea
                  placeholder='IP:Port:User:Pass'
                  id='group-area-1'
                  autoComplete='off'
                  autoCapitalize='off'
                  spellCheck='false'
                  data-gramm_editor='false'
                  ref={inputProxy}
                ></textarea>
              </div>
              <h6>Proxy List Name</h6>
              <div className='proxy-name'>
                <input type='text' id='proxy-list-name' ref={inputName} />
                <div
                  className='button'
                  id='proxy-save-btn'
                  onClick={saveButton}
                >
                  <span>Save</span>
                </div>
                <div className='button' id='proxy-remove-btn'>
                  <span>Clear</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={7}>
            <div className='proxy-content-2'>
              <h5>Proxy List</h5>
              <div className='proxy-list'>
                <span>List Name</span>
                <span>Number of Proxy</span>
              </div>
              {ProxyList.map((item, index) => {
                return (
                  <div key={index} className={item.cName}>
                    <span>{item.name}</span>
                    <span>{item.number}</span>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Proxy;
