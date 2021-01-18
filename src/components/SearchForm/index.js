import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group" style={{ display: 'flex' }}>
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
    
      </div>
    </form>
  );
}

export default SearchForm;