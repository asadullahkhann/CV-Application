import './App.css';
import { useState } from 'react';
import Form from './components/form';
import Resume from './components/resume';
import initialCV from './exports/initial-cv';

function App() {
  const [cv, setCV] = useState(initialCV);
  const [formSubmitted, setformSubmitted] = useState(true);
  function handleChange(e) {
    const prop = e.target.getAttribute('name');
    const val = e.target.value;
    setCV({...cv, [prop]: val});
  }
  function handleSubmit(e) {
    e.preventDefault();
    setformSubmitted(true);
  }
  function handleEdit() {
    setformSubmitted(false);
  }
  
  if (formSubmitted) {
    return (
      <>
      <Resume cv={cv} />
      <div className='edit-btn-wrapper'><button onClick={handleEdit}>Edit</button></div>
      </>
    )
  }

  return (
   <>
   <h1>Quick CV</h1>
   <Form onChange={handleChange} onSubmit={handleSubmit} values={cv}/>
   </>
  )
}

export default App
