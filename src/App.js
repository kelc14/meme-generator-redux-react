import logo from "./logo.svg";
import "./App.css";
import Meme from "./Meme";
import MemeForm from "./MemeForm";
import { useSelector } from "react-redux";

function App() {
  const { memes } = useSelector((store) => store.meme);

  return (
    <div className="App">
      <h1>MEME GENERATOR</h1>
      <MemeForm />
      {memes.map((meme) => (
        <Meme meme={meme} key={meme.id} />
      ))}
    </div>
  );
}

export default App;
