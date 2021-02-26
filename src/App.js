import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App(){
  const bekubs =["Salman ", "tawhid", "Rafayet ", "Rafsan", "Ayman"]
  const Products = [
    {name: 'PhotoShop', price: '$120'},
    {name: 'Illustrator', price : '$40'},
    {name: 'LightRoom', price: '$50'}
  ] 

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            bekubs.map(bekub => <li>{bekub}</li>)
          }
          <li>{bekubs[0]}</li>
          <li>{bekubs[1]}</li>
          <li>{bekubs[2]}</li>
          <li>{bekubs[3]}</li>
          <li>{bekubs[4]}</li>

        </ul>
        {
            Products.map(product => <Product product={product}></Product>)
          }
        <Product product={Products[0]}></Product>
        <Product product={Products[1]}></Product>
        <Product product={Products[2]}></Product>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Product (props){
  const boxStyle = {
    border:'2px solid yellow ',
    margin : '10px' ,
    backgroundColor :'gray',
    borderRadius : '5px',
    height : '200px',
    width :  '200px',
    float : 'left'
  }
  const {name, price} = props.product ;
  return (
  <div style={boxStyle}>
   <h3>{name}</h3>
   <h5>{price}</h5>
   <button>Buy Now</button>
  </div>
  )
}

function Counter() {
  const [count , setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const[users, setUsers] = useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }) 

  return (
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
      <ul></ul>
    </div>
  )
}

function Person() {
  const Style={
    border : '2px solid gray',
    borderRadius : '5px' ,
    margin : '10px',
    padding : '50px',
  }
  return (
    <div style={Style}>
     <h1>Name: Jabbar kakku</h1>
     <h3>Hero of the year.</h3>
    </div>
    )
}

export default App;