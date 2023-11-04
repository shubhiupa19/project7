import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateCrewmateForm from './CreateCrewmateForm';
import CrewmateInfo from './CrewmateInfo';
import { getCrewmates, deleteCrewmate, updateCrewmate } from './supabaseService';

function App() {
  const [crewmates, setCrewmates] = useState([]);


  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    const { data, error } = await getCrewmates();
    if (error) {
      console.error('Error fetching crewmates:', error);
    } else {
      setCrewmates(data);
    }
  };

  const onDelete = async (id) => {
    const { error } = await deleteCrewmate(id);
    if (error) {
      console.error('Error deleting crewmate:', error);
    } else {
      setCrewmates(crewmates => crewmates.filter(crewmate => crewmate.id !== id));
    }
  };

  const onEdit = async (id, updatedFields) => {
    const { error } = await updateCrewmate(id, updatedFields);
    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      setCrewmates(crewmates => crewmates.map(crewmate => crewmate.id === id ? { ...crewmate, ...updatedFields } : crewmate));
    }
  };


  return (
    <Router>
      <nav style={{ padding: '10px', background: 'blue', color: 'white' }}>
  <ul style={{ listStyle: 'none', display: 'flex' }}>
    <li style={{ marginRight: '10px' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
    </li>
    <li>
      <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>Create Crewmate</Link>
    </li>
    {/* ...other list items */}
  </ul>
</nav>
      <Routes>
        <Route path="/" element={<Dashboard crewmates={crewmates} onDelete={onDelete} onEdit={onEdit} />} />
        <Route path="/create" element={<CreateCrewmateForm onCreate={fetchCrewmates} />} />
        <Route path="/crewmate/:id" element={<CrewmateInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
