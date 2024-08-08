import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]; // index is 0, 1, 2, 3, 4

/*
 Without JSX 
*/
const element = React.createElement("h1", {}, "Programming With Harsh"); // normal h1 tag
// nested ul li
const element2 = React.createElement("ul",
  {},
  flowers.map((flower, index) => React.createElement("li", { key: index }, flower))
)

/*
  With JSX 
*/

const element3 = <h1>Programming With Harsh</h1>;
const expressionExample = <h1>Programming With Harsh - 2 + 2 is {2 + 2} flower is {flowers[0]}</h1>;
const element4 = <ul>
  {
    flowers.map((flower, index) => (
      <li key={index}>{flower}</li>
    ))
  }
</ul>

root.render(
  element4
);
