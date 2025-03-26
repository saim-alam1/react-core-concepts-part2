import { useState } from "react"

export default function Batsman() {
  const [run, setRun] = useState(0);

  const [sixes, setSixes] = useState(0);

  const handleSingles = () => {
    const updatedRun = run + 1;
    setRun(updatedRun);
  }

  const handleFours = () => {
    const updatedRun = run + 4;
    setRun(updatedRun);
  }

  const handleSixs = () => {
    const updatedRun = run + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
    setRun(updatedRun);
  }

  const handleClear = () => {
    const clearRun = run * 0;
    setRun(clearRun);
  }

  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <p>Sixes: {sixes}</p>
      {
        run > 50 && <p>You scored : 50</p>
      }
      <h1>Score: {run}</h1>
      <button onClick={handleSingles}>singles</button>
      <button onClick={handleFours}>fours</button>
      <button onClick={handleSixs}>six</button>
      <button onClick={handleClear}>clear</button>
    </div>
  )
}