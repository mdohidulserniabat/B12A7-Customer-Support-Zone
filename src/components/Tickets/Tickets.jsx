import React, { use } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
const Tickets = ({ ticketsPromise, setCount, setResolvedCount }) => {
  const data = use(ticketsPromise);
  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const availableTickets = data.filter(
    ticket => !resolvedTasks.some(resolved => resolved.id === ticket.id) // <---
  );

  const handleClick = ticket => {
    if (!tasks.find(t => t.id === ticket.id)) {
      setTasks(prev => [...prev, ticket]);
      toast.success('Ticket added to Task Status');
      setCount(prev => prev + 1);
    } else {
      toast.error('Ticket already in Task Status');
    }
  };

  const handleResolve = ticketId => {
    const taskToResolve = tasks.find(t => t.id === ticketId);

    if (taskToResolve) {
      setTasks(prev => prev.filter(t => t.id !== ticketId));

      setResolvedTasks(prev => [...prev, taskToResolve]);

      toast.success('Ticket resolved!');
      setCount(prev => prev - 1);
      setResolvedCount(prev => prev + 1);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 mt-15">
      <div className="col-span-12 sm:col-span-9 order-2 sm:order-1">
        <h1 className="text-2xl font-semibold text-center sm:text-left px-4">
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 px-4">
          {availableTickets.map(ticket => (
            <div
              key={ticket.id}
              onClick={() => handleClick(ticket)}
              className="card shadow-lg cursor-pointer rounded-3xl"
            >
              <div className="flex justify-between items-center p-4">
                <h2 className="font-semibold">{ticket.title}</h2>
                <h3
                  className={`px-3 py-2 ${
                    tasks.find(t => t.id === ticket.id)
                      ? 'bg-[#F8F3B9]'
                      : 'bg-[#B9F8CF]'
                  } rounded-4xl flex items-center`}
                >
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={`${
                      tasks.find(t => t.id === ticket.id)
                        ? 'text-yellow-500'
                        : 'text-green-500'
                    } ml-auto`}
                  />
                  {tasks.find(t => t.id === ticket.id) ? 'In-Progress' : 'Open'}
                </h3>
              </div>
              <div className="card-body-text p-3">
                <p className="text-gray-500">{ticket.description}</p>
              </div>
              <div className="card-footer flex p-4 justify-between">
                <p className="text-gray-500">{ticket.id}</p>
                <p className="text-gray-500">{ticket.customer}</p>
                <p className="text-red-500">{ticket.priority}</p>
                <p className="text-gray-500">{ticket.assignee}</p>
                <p className="text-gray-500">{ticket.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="col-span-12 sm:col-span-3 order-1 sm:order-2 p-4">
        <h1 className="text-xl font-semibold">Task Status</h1>
        <p>Select a ticket to add to Task Status</p>
        <h1 className="text-xl font-semibold">Resolved Task</h1>
        <p>No resolved tasks yet.</p>
      </div> */}
      <div className="col-span-12 sm:col-span-3 order-1 sm:order-2 p-4">
        <h1 className="text-xl font-semibold">Task Status</h1>
        {tasks.length === 0 && <p>No tasks yet.</p>}
        <div className="flex flex-col gap-3 mt-3">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex flex-col justify-between items-center p-3 bg-gray-100 rounded shadow"
            >
              <span>{task.title}</span>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded w-full mt-2"
                onClick={() => handleResolve(task.id)}
              >
                Complete
              </button>
            </div>
          ))}
        </div>
        <h1 className="text-xl font-semibold">Resolved Task</h1>
        {resolvedTasks.length === 0 && <p>No resolved tasks yet.</p>}
        {resolvedTasks.map(resolvedTask => (
          <div
            key={resolvedTask.id}
            className="flex flex-col justify-between items-center p-3 mt-4 bg-[#E0E7FF] rounded shadow border-l-4 border-green-600"
          >
            <span className="font-medium text-center text-green-800">
              {resolvedTask.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
