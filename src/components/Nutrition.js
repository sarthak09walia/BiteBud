import React, { useState } from "react";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

const apiKey = "<API_KEY>";

const Nutrition = () => {
  const [recipes, setRecipes] = useState([]);
  const [value1, setValue1] = useState(50);
  const [minCarbs, setMinCarbs] = useState(10);
  const [maxCarbs, setMaxCarbs] = useState(100);
  const [minProtein, setMinProtein] = useState(10);
  const [maxProtein, setMaxProtein] = useState(100);
  const [minCalories, setMinCalories] = useState(100);
  const [maxCalories, setMaxCalories] = useState(1000);
  const [minFat, setMinFat] = useState(10);
  const [maxFat, setMaxFat] = useState(100);
  const [steps, setSteps] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {};

    if (minCarbs) {
      params.minCarbs = minCarbs;
    }

    if (maxCarbs) {
      params.maxCarbs = maxCarbs;
    }

    if (minProtein) {
      params.minProtein = minProtein;
    }

    if (maxProtein) {
      params.maxProtein = maxProtein;
    }

    if (minCalories) {
      params.minCalories = minCalories;
    }

    if (maxCalories) {
      params.maxCalories = maxCalories;
    }

    if (maxFat) {
      params.maxFat = maxFat;
    }
    if (minFat) {
      params.minFat = minFat;
    }
    console.log(JSON.stringify(params));

    let queryString = "";
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        queryString += `${key}=${params[key]}&`;
      }
    }

    // Remove the trailing '&' character
    queryString = queryString.slice(0, -1);

    console.log(apiKey);
    try {
      const result = await axios.get(
        `https://api.spoonacular.com/recipes/findByNutrients?${queryString}&number=${value1}&apiKey=${apiKey}`
      );
      setRecipes(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const Steps = async (id) => {
    const result = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`
    );
    const result1 = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
    );
    setSteps(result.data);
    setIngredients(result1.data.ingredients);
    console.log(result.data);
    console.log(result1.data.ingredients);
  };

  return (
    <>
      <div className="text-center container-fluid">
        <h1>Nutrition </h1>
        <div className="row">
          <div className="col-lg-9">
            <form onSubmit={handleSubmit}>
              <div className="container bg-success rounded-2 p-2">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        required
                        className="form-control"
                        placeholder="Minimum Carbs"
                        value={minCarbs}
                        onChange={(event) => setMinCarbs(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maximum Carbs"
                        value={maxCarbs}
                        onChange={(event) => setMaxCarbs(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Minimum Protein"
                        value={minProtein}
                        onChange={(event) => setMinProtein(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maximum Protein"
                        value={maxProtein}
                        onChange={(event) => setMaxProtein(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Minimum Calories"
                        value={minCalories}
                        onChange={(event) => setMinCalories(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maximum Calories"
                        value={maxCalories}
                        onChange={(event) => setMaxCalories(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Minimum Fat"
                        value={minFat}
                        onChange={(event) => setMinFat(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group m-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maximum Fat"
                        value={maxFat}
                        onChange={(event) => setMaxFat(event.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center w-100">
                  <div className="w-100 w-md-25" style={{ maxWidth: "100px" }}>
                    <InputText
                      value={value1}
                      onChange={(e) => setValue1(e.target.value)}
                      className="w-100"
                    />
                    <Slider
                      value={value1}
                      onChange={(e) => setValue1(e.value)}
                      className="w-100"
                    />
                  </div>
                </div>
                <br />

                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 d-flex p-1">
            <div className=" w-100 rounded-2 mt-sm-2">
              <h4 className="pt-1">Default Values</h4>
              <hr></hr>
              <ul className="text-left">
                <li>Minimum Carbohydrates:10</li>
                <li>Maximum Carbohydrates:100</li>
                <li>Minimum Proteins:10</li>
                <li>Maximum Proteins:100</li>
                <li>Minimum Calories:100</li>
                <li>Maximum Calories:1000</li>
                <li>Minimum Fat:100</li>
                <li>Maximum Fat:1000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {loading && <div>Loading...</div>}
      {recipes.map((item) => (
        <div key={item.id} className="mt-3 text-center">
          <h2>
            <button
              className="bg-warning px-4 rounded-3"
              onClick={() => {
                Steps(item.id);
                setVisible(true);
              }}
            >
              {item.title}
            </button>{" "}
          </h2>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "315", height: "230" }}
            className="border border-black"
          />
          <h3>Calories: {item.calories}</h3>
          <h3>Carbs: {item.carbs}</h3>
          <h3>Fat: {item.fat}</h3>
          <h3>Protein: {item.protein}</h3>
          <hr></hr>
        </div>
      ))}
      {steps?.length > 0 ? (
        <div className="card flex justify-content-center">
          <Dialog
            header="Receipe"
            visible={visible}
            maximizable
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            <h4>Ingredients</h4>
            <ol>
              {ingredients.map((ingredient) => (
                <li key={ingredient.number}>
                  {ingredient.amount.metric.value}{" "}
                  {ingredient.amount.metric.unit} {ingredient.name}
                </li>
              ))}
            </ol>
            <h4>Steps</h4>
            <ol>
              {steps[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          </Dialog>
        </div>
      ) : null}
    </>
  );
};

export default Nutrition;
