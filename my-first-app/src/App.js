import logo from "./logo.svg";
import "./App.css";

const statement = <h1>React is cool!</h1>;

const student = {
  firstName: "ana",
  lastName: "martinez",
};

const { firstName, lastName } = student;

function capitalizeFirstLetter() {
  return `I have capitalized the first letter: ${
    firstName[0].toUpperCase() + firstName.slice(1)
  } ${lastName[0].toUpperCase() + lastName.slice(1)}!`;
}

function App() {
  return (
    <div className="App">
      {statement}

      <h3>
        Hi, {student.firstName} {student.lastName}!
      </h3>

      <h4>
        Here is uppercased: {firstName.toUpperCase()} {lastName.toUpperCase()}.
      </h4>

      <h4>{capitalizeFirstLetter()}</h4>
    </div>
  );
}

export default App;
