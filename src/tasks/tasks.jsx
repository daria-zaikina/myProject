import React from 'react';
import Task from 'tasks/task';

const tasks = [
  { id: '1', text: 'bla', isCompleted: true },
  { id: '2', text: 'blabla', isCompleted: true },
  { id: '3', text: 'blablabla', isCompleted: false },
];

function Tasks() {
  return (
    <div className="tasks">
      {tasks.map(data => (
        <Task data={data} key={data.id} />
      ))}
    </div>
  );
}
export default Tasks;
