import React, { Component } from 'react';
import './App.css';
import { v4 as uuid} from 'uuid';
import companies from './data/company.json'

import Header from './components/layout/Header';
import AddCompany from './components/companies/AddCompany';
import Company from './components/companies/Company';
import Aside from './components/layout/Aside';
import EditCompany from './components/companies/EditCompany'

class App extends Component {

  state = {
    companies: companies,
    company:{},
    selected: false
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

  selectCompany = (id) =>{
    const selected = this.state.companies.find(company => company.id === id);
    this.setState({company: selected});
  }
 
  editCompany = (edited) => {
    const companyIndex = this.state.companies.map((company) => 
      company.id
    ).indexOf(edited.id)
    const companiesUpdate = this.state.companies;
    companiesUpdate[companyIndex]=edited;
    this.setState({companies: companiesUpdate})
  }
  
  //delete Company
  delCompany = (id) => (
    this.setState({companies: [...this.state.companies.filter(company => company.id !==id)]})
  )

  render() {
    return (
      <div className="App">
        <Aside />
        <div className="main">
          <Header />
          <AddCompany addCompany={this.addCompany} />
          <Company companies={this.state.companies} selectCompany= {this.selectCompany} delCompany={this.delCompany} />
          <EditCompany editCompany= {this.editCompany} companySelected={this.state.company} selected={this.state.selected} />
        </div>
      </div>
    );
  }
}

export default App;
