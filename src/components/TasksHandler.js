import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';

export const CreateTask = () => {
  // const emailCount = document
  //   .getElementById('group-area')
  //   .value.split(/\r|\r\n|\n/).length;

  const emailCount = 5;
  const [Task, AddTask] = useState([
    {
      title: 1,
      start_icon: <BsIcons.BsPlayFill />,
      stop_icon: <BsIcons.BsStopFill />,
      delete_icon: <BsIcons.BsFillTrashFill />,
      cName: 'task-bar',
    },
  ]);

  // const TaskPopulate = () => {
  //   for (var i = 0; i < emailCount; i++) {
  //     TaskData.push({
  //       title: i,
  //       start_icon: <BsIcons.BsPlayFill />,
  //       stop_icon: <BsIcons.BsStopFill />,
  //       delete_icon: <BsIcons.BsFillTrashFill />,
  //       cName: 'task-bar',
  //     });
  //   }
  // };

  return (
    <>
      {Task.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            <span>{item.title}</span>
            <span>{item.start_icon}</span>
            <span>{item.stop_icon}</span>
            <span>{item.delete_icon}</span>
          </div>
        );
      })}
    </>
  );
};
