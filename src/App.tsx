import foodArray from './components/Foods';
import { choice, remove } from './components/Helpers';

function App () {
  const food: string = choice(foodArray);
  const food2: string = choice(foodArray);
  const remaining = foodArray;
  remove(remaining, '🥗');
  // console.log(remaining);
  return (
    <>
      <div>
        <h1>React working with Modules</h1>
        <p>Randomly draw a food from the array: { food }</p>
        <p>I'd like one random food, please: { food2 }</p>
        <p>Remove the 🥗 from the array of foods.</p>
        <p>I'm sorry, we're all out. We have { remaining.map((remain, index) => (<span key={ index }>{ remain }</span>)) } other food left.</p>
      </div>
    </>
  );
}

export default App;
