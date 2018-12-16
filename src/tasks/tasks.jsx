import React, { Component } from 'react';
import Task from 'tasks/task';
import createRequest from 'core/create-request';
import { fetchTasks,  } from 'core/api-config';
import classNames from 'utils/class-names';
import AddTasks from 'add-task/add-task';

class Tasks extends Component {
  state = {
    isLoading: true,
    tasks: [
      { id: '1', text: 'bla', isCompleted: true },
      { id: '2', text: 'blabla', isCompleted: true },
      { id: '3', text: 'blablabla', isCompleted: false },
       ],
  };

  toggleTask = (event) => {
    const { id } = event.currentTarget.dataset;
    console.log(`update task-${id}`);

    this.setState(state => ({
      tasks: state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }

        return task;
      }),
    }));
  };
  addTask = (text) => {
    this.setState({ isLoading: true });

    createRequest(addTask, null, { text }).then(({ status, data }) => {
      if (status === "OK") {
          this.setState(({ task }) => ({
          isLoading: false,
          tasks: tasks.concat(data)
        }));
      }    
    });
  }
  render() {
    const { tasks, isLoading } = this.state;
    return (
      <div className={classNames('tasks', { loading: isLoading })}>
        {tasks.map(task => (
          <Task task={task} toggleTask={this.toggleTask} key={task.id} />
        ))}
        {!isLoading && <AddTasks addTask={this.addTask}/>}
      </div>
    );
  }
  componentDidMount() {
    createRequest(fetchTasks).then((request) => {
      if (request.status === 'OK') {
        this.setState({isLoading: false, tasks: request.data});
      }
    });
  }
}

export default Tasks;
