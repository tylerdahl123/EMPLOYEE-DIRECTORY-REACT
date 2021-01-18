// import React from "react";
// import "./style.css";

// function SearchResults(props) {
//   return (
//     <ul className="list-group search-results">
//       {props.results.map(result => (
//         <li key={result} className="list-group-item">
//           <img alt="Employee" src={result} className="img-fluid" />
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default SearchResults;
import React from 'react';

function SearchResults(props) {
  return (
    <div>
      <ul>
        <h1>
          <img alt={props.firstName} src={props.picture} />
        </h1>
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
        <li>{props.email}</li>
        <li>{props.phone}</li>
        <li>{props.city}</li>
      </ul>
    </div>
  );
}

export default SearchResults;