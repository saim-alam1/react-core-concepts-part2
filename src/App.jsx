import './App.css';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';
import { Suspense } from 'react';


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json());


// const fetchFriends = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const postFetch = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }


function App() {

  // const fetchPromise = fetchFriends();

  // const postPromise = postFetch();

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

      {/* <Players></Players> */}

      {/* <Suspense fallback={<h3>Posts are coming...</h3>}>
        <Posts promisePosts={postPromise}></Posts>
      </Suspense> */}


      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat.....</h3>}>
        <Friends promiseRecive={fetchPromise}></Friends>
      </Suspense> */}

      {/* <Batsman></Batsman>

      <Counter></Counter> */}


      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2() {
        alert('I am clicked 2')
      }}>Click Me 2</button>


      <button onClick={handleClicked3}>Click Me 3</button>

      <button onClick={() => { alert('click 4') }}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button> */}
    </>
  )
}

export default App
