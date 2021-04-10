import React, { useState } from 'react';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import './Home.css';
import * as BsIcons from 'react-icons/bs';

function Home() {
  const [Task, setTask] = useState([]);
  const [Id, setId] = useState(0);

  const createTaskButton = () => {
    const emailCount = document
      .getElementById('group-area')
      .value.split(/\r|\r\n|\n/).length;
    const newTask = [];
    var counter = 0;

    for (let i = Id; i < Id + emailCount; i++) {
      newTask.push({
        id: i,
        start_icon: <BsIcons.BsPlayFill />,
        stop_icon: <BsIcons.BsStopFill />,
        delete_icon: <BsIcons.BsFillTrashFill />,
        cName: 'task-bar',
      });

      counter = i;
    }

    setId(counter + 1);
    const newTasks = [...Task, ...newTask];
    setTask(newTasks);
  };

  const deleteTask = (i) => {
    setTask(Task.filter((task) => task.id !== i));
  };

  const deleteTaskButton = () => {
    setTask([]);
    setId(0);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={4}>
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
          <Col sm={8}>
            <div className='column2-content'>
              <div className='task-creation-row'>
                <Dropdown>
                  <Dropdown.Toggle variant='success' id='dropdown-basic'>
                    Dropdown Button
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
                <div
                  className='button-creation-task'
                  onClick={createTaskButton}
                >
                  <span>Create Tasks</span>
                </div>
                <div
                  className='button-creation-task'
                  onClick={deleteTaskButton}
                >
                  <span>Delete Tasks</span>
                </div>
              </div>
              <div className='task-viewer'>
                <div className='task-title'>
                  <span>Task ID</span>
                  <span>Proxy</span>
                  <span>Email</span>
                  <span>Status</span>
                  <span></span>
                </div>
                <div className='task-box'>
                  {Task.map((item, index) => {
                    return (
                      <div key={index} className={item.cName}>
                        <span>{item.id}</span>
                        {/* <div className='message_status'></div> */}
                        <span>{item.start_icon}</span>
                        <span>{item.stop_icon}</span>
                        <span onClick={() => deleteTask(item.id)}>
                          {item.delete_icon}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
