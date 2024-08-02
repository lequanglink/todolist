import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="user">
        <img
          src="https://via.placeholder.com/50"
          alt="profile"
          className="profile-pic"
        />
        <div>
          <p>Do-it</p>
          <p>Hamza Mameri</p>
        </div>
      </div>
      <div className="section">
        <h3>Today's tasks</h3>
        <ul>
          <li>
            <span className="task-color" style={{ backgroundColor: "pink" }} />
            <p>Personal</p>
          </li>
          <li>
            <span className="task-color" style={{ backgroundColor: "cyan" }} />
            <p>Freelance</p>
          </li>
          <li>
            <span className="task-color" style={{ backgroundColor: "gold" }} />
            <p>Work</p>
          </li>
        </ul>
        <button className="add-filter">Add filter</button>
      </div>
      <div className="section">
        <h3>Scheduled tasks</h3>
      </div>
      <div className="section">
        <h3>Settings</h3>
      </div>
    </div>
  );
}

export default Sidebar;