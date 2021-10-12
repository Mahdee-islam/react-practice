import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const myStyle = {
    color:'white',
    fontWeight:'30px',
    textDecoration: 'underline'

  }
  return (
    <div className="App">
      <article className="blog">
        <h2 style = {myStyle}>This is Lorem Demi Text</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus eaque alias libero repudiandae quia, amet perspiciatis quidem aspernatur deserunt voluptas voluptatem blanditiis! Ducimus repudiandae esse quis. Distinctio harum fuga consequatur.</p>
        <p style={{textTransform:'uppercase',color:'white'}}>I am pro React Developer</p>
      </article>
      <Blogs author="Mahdi Islam" age="25"></Blogs>
      <Blogs author="Samir Islam" age = "23"></Blogs>
      <Blogs author="Hafiz Islam" age = "34"></Blogs>
      <Mobile></Mobile>
      <Todo></Todo>
    </div>
  );
}

function Blogs(props) {
 
  return(
    <div>
      <p>{props.author}</p>
    <p>{props.age}</p>
    </div>
  )
}
function Mobile() {
  const [charge, setCharge] = useState(100);
  const lowBateryLevel = () => {
    setCharge(charge - 10)
  }
  const highBateryLevel = () => {
    setCharge(charge + 10)
  }
  return (
    <div>
      <p>Charge: {charge} </p>
      <button onClick={lowBateryLevel} >battery down</button>
      <button onClick={highBateryLevel}>battery high</button>
    </div>
  )
}
function Todo() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>To do </h1>
      {
        users.map(user => <User id = {user.id} title = {user.title}></User> )
      }
    </div>
  )
}
function User(props) {
  const myStyle = {
    backgroundColor: 'stelblue',
    color:'white',
    boderRadius: '15px'
  }
  return(
   <div className="user" >
      <h2>{props.id}</h2>
    <p>{props.title}</p>
   </div>
  )
}

export default App;
