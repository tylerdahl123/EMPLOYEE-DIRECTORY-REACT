import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

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
            city: event.location.city,
            picture: event.picture.large,
            key: id,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getUsers(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
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
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
           
          />
          <SearchResults 
          results={this.state.results} 
  
          />
        </Container>
      </div>
    );
  }
}
//it has something to do with the set up of the table and being able to find it within the api...i have no structure it seems when im trying to call;
//what i need to do is figure out why this code works and mine doesnt 
//i belive it lies within the creation of the search results div....


export default Search;
