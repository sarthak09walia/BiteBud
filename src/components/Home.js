import React from "react";
import Pop from "./pop";
const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-white rounded-2 p-2 mb-auto">
      <div className="container">
        <h1 className="display-4 text-center">Welcome to BiteBud!</h1>
        <hr></hr>
        <p className="lead">
          At BiteBud, we understand that maintaining a healthy lifestyle can be
          challenging. That's why we've created a platform that makes it easier
          for you to meet your nutrition goals and enjoy delicious meals at the
          same time.
          <br></br>
          <br></br>
          Our website provides personalized recipe suggestions based on your
          nutrition goals or available ingredients. You can simply enter your
          dietary requirements or the ingredients you have on hand, and our
          algorithm will generate a list of recipes that meet your needs.
          <br></br>
          <br></br>
          Whether you're looking for low-carb, gluten-free, vegan, or other
          types of recipes, BiteBud has got you covered. Our database is
          constantly updated with new and exciting recipes from around the
          world, so you'll never run out of options.
          <br></br>
          <br></br>
          So why wait? Start using BiteBud today and start enjoying healthy,
          delicious meals that are tailored to your needs!
        </p>
      </div>
    </div>
  );
};

export default Home;
