// EditCrewmateForm.jsx
import React, { useState } from 'react';

const EditCrewmateForm = ({ crewmate, onSave }) => {
  const [name, setName] = useState(crewmate.name);
  const [attribute, setAttribute] = useState(crewmate.attribute);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(crewmate.id, { name, attribute });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <select
        value={attribute}
        onChange={(e) => setAttribute(e.target.value)}
      >
         <option value = "">Select Attribute</option>
                <option value = "Red">Red</option>
                <option value = "Blue">Blue</option>
                <option value = "Green">Green</option>
                <option value = "Yellow">Yellow</option>
                <option value = "Orange">Orange</option>
                <option value = "Black">Black</option>
                <option value = "White">White</option>
                <option value = "Purple">Purple</option>
                <option value = "Brown">Brown</option>
                <option value = "Cyan">Cyan</option>
                <option value = "Lime">Lime</option>
                <option value = "Pink">Pink</option>
               
      </select>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditCrewmateForm;
