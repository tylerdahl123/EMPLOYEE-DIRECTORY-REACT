

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <img alt="Employee" src={props.image} className="img-fluid" />
//           <li>{props.name}</li>
//         </li>
//       ))}
//     </ul>
//   );
// }//need to build out the thing that the data will rest in for somereason it seems as though i haven o way of being able to display the data on the screen.

import React from 'react';


  function SearchResults(props) {
    return (
      <thead>
        <tr>
          <th>
            <img alt={props.firstName} src={props.picture} />
          </th>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.city}</td>
        </tr>
      </thead>
    );
  }
  

export default SearchResults;