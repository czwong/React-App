import React, { useRef, useCallback } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Proxy.css';
import { useProxyGroup } from '../components/Context/ProxyContext';
import { useContextMenu } from '../components/Context/ContextMenuContext';
import Contextmenu from '../components/ContextMenuComponent/ContextMenu';

function Proxy() {
  const { ProxyGroup, setProxyGroup } = useProxyGroup();
  const { setXPos, setYPos, setVisibility } = useContextMenu();

  const inputName = useRef(null);
  const inputProxy = useRef(null);

  const saveButton = () => {
    const proxyGroup = [];
    const proxyGroup_name = inputName.current.value;
    const proxies = inputProxy.current.value
      .split('\n')
      .filter((proxy) => proxy !== '');
    const proxy_count = proxies.length;

    if (proxy_count !== 0 && proxyGroup_name !== '') {
      proxyGroup.push({
        id: ProxyGroup.length + 1,
        name: inputName.current.value,
        count: proxy_count,
        list: proxies,
        cName: 'proxy-group',
      });
      setProxyGroup([...ProxyGroup, ...proxyGroup]);
    }

    localStorage.setItem('Proxy', JSON.stringify(ProxyGroup));
  };

  const showContextMenu = useCallback(
    (e, index) => {
      e.preventDefault();
      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setVisibility(true);
      alert(index);
    },
    [setXPos, setYPos, setVisibility]
  );

  const hideContextMenu = () => {
    setVisibility(false);
  };

  return (
    <>
      <Container fluid onClick={hideContextMenu}>
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
                  resize='none'
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
              <div className='proxy-title'>
                <span>List Name</span>
                <span>Number of Proxy</span>
              </div>
              <div className='proxy-group-area'>
                <Contextmenu />
                {ProxyGroup.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={item.cName}
                      onContextMenu={(e) => {
                        showContextMenu(e, item.id);
                      }}
                    >
                      <span>{item.name}</span>
                      <span>{item.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Proxy;
