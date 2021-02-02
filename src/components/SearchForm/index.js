import React from "react";
import "./style.css";
import API from "../../utils/API"

const employees = [

  
]



function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
 
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = employees.filter(employee =>
      employee.toLowerCase().includes(searchTerm)
    );
      

    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}


export default SearchForm;