import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Greeting from "./components/Greeting";
import StudentCard from "./components/StudentCard";
import Badge from "./components/Badge";
import StudentList from "./components/StudentList";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Harper" />
      <hr />
      <Greeting firstName="Michelle" />
      <hr />
      <Greeting firstName="Andrea" />
      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: "BCN", course: "WEB" }}
        />
        <StudentCard
          name="Mat"
          week={8}
          info={{ city: "MIA", course: "DATA" }}
        />
      </StudentList>
      <Badge badgeText="important" />
      <hr />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

      {/* see the new props! */}

      <ReactPlayer
        url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
        playing
        controls
        volume="0.5"
      />
    </div>
  );
}

export default App;
