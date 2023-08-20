import './Ingredients.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

const toSentenceCase = (text) => {
  return text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const apiKey='a119fb12cfa8427ca177bfec0e3d689f'

const Ingredients= () => {
  const [recipes, setRecipes] = useState([]);
  const [value1, setValue1] = useState(50);
  const [steps, setSteps] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { value } = event.target.elements.ingredients;
    const formattedValue = value.split(' ').map((word) => `+${word}`).join(',');

    setLoading(true);
    try {
      const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formattedValue}&number=${value1}&apiKey=${apiKey}`);
      setRecipes(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const Steps= async (id)=>{
    const result = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`);
    setSteps(result.data); 
    console.log(result.data);
  };
  
// eslint-disable-next-line
  return (
    <div className="App mt-4">
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
      <h2>Ingredients</h2>
      <div className="w-100 bg-success px-5 py-4 rounded-2">
        <div className="mb-3">
        <label className="form-label">Enter Ingredients Here:</label>
          <input type="text" className="form-control form-control-lg form-control-sm m-2" name="ingredients"/>
        </div>
        <div className="d-flex justify-content-center w-100">
          <div className="w-100 w-md-25" style={{ maxWidth: '100px' }}>
            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} className="w-100" />
            <Slider value={value1} onChange={(e) => setValue1(e.value)} className="w-100" />
          </div>
        </div>
        <button type="submit" className="btn btn-dark mt-2">Submit</button>
      </div>
      <hr />
      <br />
      </form>

      {loading && <div>Loading...</div>}
      {recipes.map((item) => (
        <div key={item.id}>
          <h2><button className='bg-warning px-4 rounded-3' onClick={() => {Steps(item.id); setVisible(true);  }}>{item.title}</button> </h2>
          <img src={item.image} alt={item.title} style={{ width: '315', height:'230' }} className='border border-black' />
          <h3 >Missing Items: <span className='text-danger'>{item.missedIngredientCount}</span></h3>

          {item.missedIngredients.map((missed) => (
            <div key={missed.id} className="container text-center inline-block">
              
              <div className="row">
              <div className="col">
              <h3>{toSentenceCase(missed.name)}</h3>
              <h5>Amount Needed: {missed.amount} {missed.unit}</h5>
              <img src={missed.image} alt={missed.name} className='border border-black mb-1' />
              </div>
              </div>
            </div>
          ))}
        <hr></hr>
        </div>
      ))}
      {steps?.length > 0 ?(
      <div className="card flex justify-content-center">
           
            <Dialog header="Receipe" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <ol>
              {steps[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li> 
              ))}
            </ol>
            </Dialog>
        </div>)
        : null
      }
    </div>
  );
}

export default Ingredients;
