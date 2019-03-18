import React, { Component } from "react";
import "./App.css";

const preload = {
  data: [
    {
      name: "Reactjs",
      url: "https://reactjs.org",
      description: "A JavaScript library for building user interfaces"
    },
    {
      name: "Vuejs",
      url: "https://vuejs.org",
      description: "The Progressive JavaScript Framework"
    },
    {
      name: "Emberjs",
      url: "https://www.emberjs.com",
      description:
        "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern"
    }
  ]
};

const Frameworks = props => {
  return (
    <div>
      {props.items.data.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.url}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return <Frameworks items={preload} />;
};

export default App;
