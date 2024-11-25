import './App.css';
import Exercise from './Exercise3';
import UserFavoriteAnimals from './UserFavoriteAnimals';


function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5; 
  const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
  return (
    <div className="App">
      <Exercise/>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <p>Hello World!</p>
      {myelement}
      React is {sum} times better with JSX
      <UserFavoriteAnimals favAnimals={user.favAnimals}/>
    </div>
  );
}

export default App;
