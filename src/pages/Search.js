import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import Header from "../components/Header/style.css"

class Search extends Component {
  state = {
    search: "",
    employees: [],
    result: [],
    isMale: false,
    error: ""
  };
//check out sorting by email or gender
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((event, id) => ({
            firstName: event.name.first,
            lastName: event.name.last,
            email: event.email,
            phone: event.phone,
            picture: event.picture.large,
            key: id,
          })),
        });
      })
      .catch((err) => console.log(err));
  }



  searchEmployee = (filter) => {
    console.log('search', filter);
    const filteredList = this.state.employees.filter((name) => {
      //merge data together, then check to see if employee exists
      let values = Object.value(name).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    //Update the employee list with the filtered value
    this.setState({ employees: filteredList });
  };



  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    console.log("clicked");
    API.getNames(this.state.search)
   //instead of making an api call make a filter functional loop...return all the results with the name eqaul to the search...reset employee array to filtered results 
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        } 
       console.log(res);  
       this.setState({ result: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
 };
  //in pupster they have the results get autofilled into the searchbar for the Componenet did mount feature...i need to be able to translate that into the whole div.
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee Name!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
          value={this.state.search} 
           handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
           
          />
          {[...this.state.employees].map((res) => (
            <SearchResults style={{ width: "100%" }}
            firstName={res.firstName}
            lastName={res.lastName}
            picture={res.picture}
            email={res.email}
            phone={res.phone}
           
        
            />
          ))}
         
        </Container>
      </div>
    );
  }
}
//it has something to do with the set up of the table and being able to find it within the api...i have no structure it seems when im trying to call;
//what i need to do is figure out why this code works and mine doesnt 
//what is the differnce between pupster and this? if i can figure that out i can get it working...
//i belive it lies within the creation of the search results div....


export default Search;
