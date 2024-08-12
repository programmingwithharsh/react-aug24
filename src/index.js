import ReactDOM from 'react-dom/client';
import Main from './Main';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const username = "Ankita"; // string
const interests = ["Badminton", "Basketball", "Volleyball", "Music"]; // array
const birth = { // object
  year: 2001,
  place: "Pune"
};

root.render(
  <Main mobile="iPhone" usernameProps={username} interestsProps={interests} birthProps={birth} />
);
