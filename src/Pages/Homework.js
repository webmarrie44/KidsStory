import React from 'react';

const homeworkTasks = [
  {
    id: 1,
    task: "Draw a picture of the mice and the elephants from the story.",
  },
  {
    id: 2,
    task: "Write a short paragraph about what you would do if you were one of the mice in the story.",
  },
  {
    id: 3,
    task: "Create a small diorama showing the village before and after the elephants came.",
  },
  {
    id: 4,
    task: "List 5 things that the mice and elephants have in common.",
  },
  {
    id: 5,
    task: "Write a letter to the mice thanking them for helping the elephants.",
  },
];

const Homework = () => {
  return (
    <div className="homework-container mt-5">
      <h1 className="homework-title">🎨 Homework Tasks 🎨</h1>
      <ul className="homework-list">
        {homeworkTasks.map((task) => (
          <li key={task.id} className="homework-item">
            {task.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Homework;
