import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddCompany from './components/companies/AddCompany';
import Companies from './components/companies/Companies';
import Aside from './components/layout/Aside';
import { v4 as uuid} from 'uuid';

class App extends Component {

  state = {
    companies: [
      {
        companyName: 'test1',
        email: 'email1',
        fiscalAddress: 'test1',
        cuit: 1111,
        id: uuid()
      },
      {
        companyName: 'test1',
        email: 'email1',
        fiscalAddress: 'test1',
        cuit: 1111,
        id: uuid()
      },
      {
        companyName: 'test1',
        email: 'email1',
        fiscalAddress: 'test1',
        cuit: 1111,
        id: uuid()
      },    ]
  }

  //Add company
  addCompany = ([companyName, email, cuit, fiscalAddress]) => {
    const newCompany = {
      id: uuid(),
      companyName,
      email,
      fiscalAddress,
      cuit,
    }
    this.setState({companies: [...this.state.companies, newCompany]
    })
  }

  //delete Company
  delCompany = (id) => (
    this.setState({companies: [...this.state.companies.filter(company => company.id !==id)]})
  )

  render() {
    return (
      <container classn>
      <div className="App">
        <Aside />
        <div className="main">
          <Header />
          <AddCompany addCompany={this.addCompany} />
          <Companies companies={this.state.companies} delCompany={this.delCompany} />
        </div>
      </div>
      </container>
    );
  }
}

export default App;
