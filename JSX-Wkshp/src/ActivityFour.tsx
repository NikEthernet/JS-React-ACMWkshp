import { useState } from 'react';
import placeholderPic from './assets/profilepic.png';
import './ActivityFour.css';

// TODO 1
//Create a type called "User" that contains
//four elements:
// id(string), name(string), age(number), and picture(string)

const NAMES = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah"];

// TODO 2
function createUser(index: number): User {
  //These are set consts to use as values for your user type vars
  const name = NAMES[index % NAMES.length];
  const age = Math.floor(Math.random() * 80) + 1; 

  //Set up a random ID variable using crypto.randomUUID()

  //Return a user object using the values above 
  //and 'placeholderPic' for the picture
  
}

function App() {
  // TODO 3: Create a state to hold an array of User objects
  // Start with an empty array of type User
  // Hint: useState<User[]>([])

  return (
    <div className="container">
      <h1>Users!</h1>

      {/* TODO 4: Wire this button so that when you click it,
        a random user is added to the users array
      */}
      <button className='add-button'>
        Add User
      </button>

      {/* TODO 5: display the amount of users currently within the user array */}
      <p className='count'>Total Users: {/* display the user count here! */}</p>

      <ul className="user-list">
        {/* TODO 6 solution
          Use .map() to render each user as a list item
          Each item should display: 
            User picture as an <img>
            User name
            User age
          
          As a reminder, don't forget the 'key' prop. 
            */}

      </ul>
    </div>
  );
}

export default App;