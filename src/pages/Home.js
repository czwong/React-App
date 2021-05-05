import React, { useContext } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import './Home.css';
import * as BsIcons from 'react-icons/bs';
import {
  MdControlPoint,
  MdStop,
  MdPlayArrow,
  MdCreate,
  MdDeleteSweep,
} from 'react-icons/md';
import { emailContext } from '../components/Context/EmailContext';

function Home() {
  const { email, Task, setTask, Id, setId } = useContext(emailContext);

  const createTaskButton = () => {
    const emailCount = email.length;
    const newTask = [];
    var counter = 0;

    if (emailCount > 0) {
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
      setTask([...Task, ...newTask]);
    }
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
        <div className='home-content'>
          <div className='task-row'>
            <Dropdown className='dropdown'>
              <Dropdown.Toggle>Proxy List</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className='buttons-row'>
              <div
                className='button'
                id='create-btn'
                onClick={createTaskButton}
              >
                <span>
                  <MdControlPoint /> Create Tasks
                </span>
              </div>
              <div className='button' id='edit-btn'>
                <span>
                  <MdCreate /> Edit All
                </span>
              </div>
              <div className='button' id='start-btn'>
                <span>
                  <MdPlayArrow /> Start All
                </span>
              </div>
              <div className='button' id='stop-btn'>
                <span>
                  <MdStop /> Stop All
                </span>
              </div>
              <div
                className='button'
                id='delete-btn'
                onClick={deleteTaskButton}
              >
                <span>
                  <MdDeleteSweep /> Delete Tasks
                </span>
              </div>
            </div>
          </div>
          <div className='task-title'>
            <span>ID</span>
            <span>Proxy</span>
            <span>Email</span>
            <span>Status</span>
            <span>Actions</span>
          </div>
          <div className='task-box'>
            {Task.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <span>{item.id}</span>
                  <span>proxy</span>
                  <span>email</span>
                  <span>status</span>
                  <div className='action-buttons'>
                    <span>{item.start_icon}</span>
                    <span>{item.stop_icon}</span>
                    <span onClick={() => deleteTask(item.id)}>
                      {item.delete_icon}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
