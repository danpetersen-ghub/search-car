import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];


export default class App extends React.Component {
// ATTEMPT 1   
//    displayUsers(){
//     const newUsers = users.map(
//         ({id, name}) => <li key={id}>{name}</li>
//         );
//     return (
//         <div>
//             {newUsers}
//         </div>
//     );    
// } 
// render() {
//     <ul>
//         {this.displayUsers()}
//     </ul>
// }


// ATTEMPT 2:   
// displayUsers(){
//     const newUsers = users.map( ({id, name}) => {
//         return <li key={id}>{name}</li>
//          } 
//     ); 
// } 
// render() {
//     <ul>
//         {this.displayUsers()}
//     </ul>
// }


// ATTEMPT 3:
  render() {
    const newUsers = users.map( ({id, name}) => {
        return <li key={id}>{name}</li>
            } 
    ); 
    
    return (
        <ul>
            {newUsers}
        </ul>
    );
  }
}
