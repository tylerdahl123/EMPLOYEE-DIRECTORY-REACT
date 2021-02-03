import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Header from "../components/Header"
import Alert from "../components/Alert";
import Wrapper from "../components/Wrapper";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    result: [],
    error: ""
  };

// When the component mounts, get a list of all available base employees and update this.state.employees
  componentDidMount() {
    API.getUsers()
      .then((res) => {
        // console.log(res);
        this.setState({...this.state,
          employees: res.data.results.map((employee, id) => ({
            firstName: employee.name.first,
            lastName: employee.name.last,
            email: employee.email,
            phone: employee.phone,
            picture: employee.picture.large,
            key: id,
          })),
          filteredEmployees: res.data.results.map((employee, id) => ({
            firstName: employee.name.first,
            lastName: employee.name.last,
            email: employee.email,
            phone: employee.phone,
            picture: employee.picture.large,
            key: id,
          })),
        });
      })
      .catch((err) => console.log(err));
  }


  handleInputChange = event => { console.log(event);
this.setState({ search: event.target.value });
this.filteredEmployees();
  };



  //instead of making an api call make a filter functional loop...return all the results with the name eqaul to the search...reset employee array to filtered results 
filteredEmployees(){
  console.log(this.state.employees, this.state.filteredEmployees, "hello")
  const search = this.state.search.toLowerCase();
  //figure out how to return the employees after i search...bring back the other ones. 
 return  this.state.filteredEmployees = this.state.employees.filter(employee =>{
    return (
      employee.firstName.toLowerCase().includes(search) || 
      employee.lastName.toLowerCase().includes(search)
    )
  })
}


sortEmployees(){
  console.log(this);
  const sortedEmployees =  this.state.employees.sort((a,b) => {
    if (a.firstName.toLowerCase()< b.firstName.toLowerCase()) return -1;
    if (a.firstName.toLowerCase()> b.firstName.toLowerCase()) return 1;
    return 0;
      
    
  }) 
  console.log(sortedEmployees);

  this.setState({...this.state, filteredEmployees: sortedEmployees});
}

//make sure to update teh sate 
displayEmployees = () => {
  return this.filteredEmployees()
  .sort(this.sortEmployees)
    .map((employee, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={employee.picture} alt="user"></img>
          </td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
         <td>{employee.phone}</td>
        </tr>
      );
    });
};



  handleFormSubmit = event => {
    event.preventDefault();
    
 };


  //in pupster they have the results get autofilled into the searchbar for the Componenet did mount feature...i need to be able to translate that into the whole div.
  render() {
    return (
      <div>
        <Wrapper >
        <Header />
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Employee Name!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
        
          <input
            onChange={(event) => this.handleInputChange(event)}
            type="search"
            placeholder="Search By Name"
          />   
          <button onClick={() => this.sortEmployees()} > Or Sort by Alphabetical order.</button>
          {this.state.filteredEmployees.map((employee, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={employee.picture} alt="user"></img>
          </td>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.email}</td>
         <td>{employee.phone}</td>
        </tr>
      );
    })}
          
          {/* <tbody>{this.displayEmployees()}</tbody> */}
        </Container>
        </Wrapper>
      </div>
    );
  }
}
//it has something to do with the set up of the table and being able to find it within the api...i have no structure it seems when im trying to call;
//what i need to do is figure out why this code works and mine doesnt 
//what is the differnce between pupster and this? if i can figure that out i can get it working...
//i belive it lies within the creation of the search results div....


export default Search;
