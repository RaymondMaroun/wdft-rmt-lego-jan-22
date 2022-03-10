// ./src/components/Greeting.js

function Greeting(props) {
  //const message = "Hello Ana!";

  console.log(props);

  return (
    <div>
      <u>Hello {props.firstName}!</u>
    </div>
  );
}

export default Greeting;
