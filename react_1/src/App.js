import './App.css';
import Card from "./components/card";

function App() {
  return (

// CONTENT 
    <div className="App">
{/* CARD */}
     {titles.map((name, key) => {
        return (
          <Card
            title={name.title}
            key={key}
            profession={name.profession}
            img={name.img}
          />
        );
      })}
    </div>
  );
}

export default App;
