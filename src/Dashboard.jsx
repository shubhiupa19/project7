// Dashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditCrewmateForm from './EditCrewmateForm'; 
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ crewmates, onDelete, onEdit }) => {
  const [editingId, setEditingId] = useState(null);
 

  const handleSave = (id, updatedFields) => {
    onEdit(id, updatedFields);
    setEditingId(null); // Exit editing mode after saving
  };

  const navigate = useNavigate();
  const handleCrewmateInfo = (id) => {
    navigate(`/crewmate/${id}`);
  };

  if (!crewmates) {
    return <div>Loading...</div>;
  }



 

  return (
    <div className = "parent-container">
        <div className = "crewmate-list">
      <h2>Crewmate List</h2>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            {editingId === crewmate.id ? (
              <EditCrewmateForm crewmate={crewmate} onSave={handleSave} />
            ) : (
              <>
                {crewmate.name} - {crewmate.attribute}
                <button onClick={() => setEditingId(crewmate.id)}>Edit</button>
                <button onClick={() => onDelete(crewmate.id)}>Delete</button>
                <button onClick={() => handleCrewmateInfo(crewmate.id)}>Crewmate Info</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Link to="/create">
        <button>Create New Crewmate</button>
      </Link>
      </div>
    </div>
  );
};

export default Dashboard;
