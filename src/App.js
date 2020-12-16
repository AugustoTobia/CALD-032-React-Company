import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddCompany from './components/companies/AddCompany';
import Companies from './components/companies/Companies';
import Table from './components/layout/Table';

class App extends Component {

  state = {
    companies: [
      {
        companyName: 'test1',
        email: 'email1',
        fiscalAddress: 'test1',
        cuit: 1111,
        id: 1
      },
      {
        companyName: 'test1',
        email: 'email1',
        fiscalAddress: 'test1',
        cuit: 1111,
        id: 1
      },
      {
        companyName: 'test1',
        email: 'email1',
        fiscalAddress: 'test1',
        cuit: 1111,
        id: 1
      },    ]
  }

  //delete Company
  delCompany = (id) => (
    this.setState({companies: [...this.state.companies.filter(company => company.id !==id)]})
  )

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddCompany />
          <Table />
          <Companies companies={this.state.companies} delCompany={this.delCompany} />
        </div>
      </div>
    );
  }
}

export default App;
