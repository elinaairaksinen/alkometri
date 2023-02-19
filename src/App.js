import './App.css';
import { useState } from 'react'; 

function App() {

const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(0);
const [time, setTime] = useState(0);
const [promilles, setPromilles] = useState(0);
const [gender, setGender] = useState('male');



function calculate(e) {
  e.preventDefault();
  const burning = weight /10;
  const litres = bottles * 0.33;
  const grams = litres * 8 * 4.5;
  const gramsLeft = grams - (burning*time);
  let promilles1 = 0;

  if (gender === 'male') {
    promilles1 = gramsLeft / (weight * 0.7);
  }
  else {
    promilles1 = gramsLeft / (weight * 0.6);
  }
  setPromilles(promilles1);
}




  return (
    <form onSubmit={calculate}>
      <h3>Alcometer</h3>

      <div>
        <label> Weight </label>
        <input type="number"
        value={weight}
        onChange={e => setWeight(e.target.value)}
        
        />
      </div>
    

      <div>
        <label>Bottles</label>
        <input type="number"
        value={bottles}
        onChange={e => setBottles(e.target.value)}
        />
      </div>

      <div>
        <label>Time</label>
        <input type="number" 
        value={time}
        onChange={e => setTime(e.target.value)}
        />
      </div>

      <div>
        <label> Promilles: </label>
        <output> {promilles.toFixed(2)}</output>
      </div>

      <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked onChange= {e => setGender(e.target.value)} /><label>Male</label>
      <input type="radio" name="gender" value="female" onChange= {e => setGender(e.target.value)} /><label>Female</label>

      </div>

      <button>Calculate</button>

    </form>
  );
}

export default App;
