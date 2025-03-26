import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';

function App() {

  function handleClick() {
    alert('I am clicked');
  }

  const handleClicked3 = () => {
    alert("I am clicked 3")
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      {/* <button onClick="handleClick()">Click Me</button> */}

      <Batsman></Batsman>

      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('I am clicked 2')
      }}>Click Me 2</button>


      <button onClick={handleClicked3}>Click Me 3</button>

      <button onClick={() => { alert('click 4') }}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
