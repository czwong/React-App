import React, { useState } from 'react';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import './Home.css';
import * as BsIcons from 'react-icons/bs';

function Home() {
  const emailCount = 5;
  const [Task, setTask] = useState([]);
  const [Id, setId] = useState(0);

  const incrementID = (ID) => {
    setId(ID + 1);
    return ID;
  };

  const createTaskButton = () => {
    const newTask = {
      id: incrementID(Id),
      start_icon: <BsIcons.BsPlayFill />,
      stop_icon: <BsIcons.BsStopFill />,
      delete_icon: <BsIcons.BsFillTrashFill />,
      cName: 'task-bar',
    };

    const newTasks = [...Task, newTask];

    setTask(newTasks);
  };

  const deleteTaskButton = () => {
    const deleteTasks = [];

    setTask(deleteTasks);
    setId(0);
  };

  return (
    <>
      <Container fluid id='container'>
        <Row>
          <Col sm={3}>
            <div className='column1-content'>
              <div className='tcard'>
                <textarea
                  placeholder='Enter your emails...'
                  id='group-area'
                  autocomplete='off'
                  autocapitalize='off'
                  spellcheck='false'
                  data-gramm_editor='false'
                ></textarea>
              </div>
              <div className='buttons-row'>
                <div className='button' id='save-btn'>
                  <span>Save All</span>
                </div>
                <div className='button' id='delete-btn'>
                  <span>Delete All</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className='column2-content'>
              <div className='scard'>
                <h4>Select Proxy List</h4>
                <Dropdown>
                  <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    Proxy List
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                    <Dropdown.Item href='#/action-2'>
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className='button-task' onClick={createTaskButton}>
                  <span>Create Tasks</span>
                </div>
                <div className='button-task' onClick={deleteTaskButton}>
                  <span>Delete Tasks</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className='column3-content'>
              <div className='buttons-row'>
                <div className='button' id='edit-btn'>
                  <span>Edit All Tasks</span>
                </div>
                <div className='button' id='save-btn'>
                  <span>Start All Tasks</span>
                </div>
                <div className='button' id='delete-btn'>
                  <span>Stop All Tasks</span>
                </div>
              </div>
              <div className='task-viewer'>
                <div className='task-title'>
                  <span>#</span>
                  <span>Email</span>
                  <span>Proxy</span>
                </div>
                <div className='task-box'>
                  <p className='task-message'>
                    <span>Create tasks to view</span>
                    {Task.map((item, index) => {
                      return (
                        <div key={index} className={item.cName}>
                          <span>{item.id}</span>
                          <span>{item.start_icon}</span>
                          <span>{item.stop_icon}</span>
                          <span>{item.delete_icon}</span>
                        </div>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;