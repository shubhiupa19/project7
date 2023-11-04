import React, {useState} from 'react';
import { addCrewmate } from './supabaseService';
import { useNavigate } from 'react-router-dom';
import supabase from './supabaseClient'; 

const CreateCrewmateForm = ({onCreate}) => {
    const [name, setName] = useState('');
    const [attribute, setAttribute] = useState('');

    const navigate = useNavigate();

  // This function should be defined inside your component
  const handleBackClick = () => {
    navigate(-1);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase 
    .from ('crewmates')
    .insert([
    {name, attribute}
    ]);
    console.log(data);
    if (error) {
    console.error('Error adding crewmate:', error);

    setName('');
    setAttribute('');


}

  }
    return  (
        <div>
            <h2>Add New Crewmate</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type = "text"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                placeholder = "Name"
                required
                />
                <select value = {attribute} onChange = {(e) => setAttribute(e.target.value)} required> 
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
                <button type = "submit">Add Crewmate</button>
            </form>

            <button onClick={handleBackClick}>Back to Crewmate List</button>
        </div>
    );
}; 


export default CreateCrewmateForm;