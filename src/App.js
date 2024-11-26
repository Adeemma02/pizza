
import { useState } from 'react';
import './App.css';

const message =[
  'Learn React',
  'Apply for job',
  'invest your new income'
]

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function next(){
if(step < 2 ) setStep(step + 1)
  }
  function prev(){
if(step > 0) setStep(step - 1)
  }

  return (
    <>
    <button className='close' onClick={()=> setIsOpen(!isOpen)}> &times;</button>

    {isOpen && (
<div className="App">
<div className='num'>
  <div className={`${step >= 0? 'active' : ''} no`}>1</div>
  <div className={`${step >= 1? 'active' : ''} no`}>2</div>
  <div className={`${step >= 2? 'active' : ''} no`}>3</div>
</div>
<p>
  step {step + 1}: {message[step]}
</p>
<div className='btn'>
  <button className='prev' onClick={prev}> Previous</button>
  <button className='nxt' onClick={next}> next</button>
</div>
</div>
    )}
    
    </>
  );
}

export default App;
