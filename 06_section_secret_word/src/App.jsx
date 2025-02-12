import './App.css';

import { useCallback, useEffect, useState } from 'react';

import { wordsList } from './data/words';

import StartScreen from './components/StartScreen';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  console.log(wordsList);

  return (
    <>
      <div className="App">
      {gameStage === "start" && <StartScreen />};
      {gameStage === "game" && <StartScreen />};
      {gameStage === "end" && <StartScreen />};
      </div>
    </>
  );
};

export default App;
