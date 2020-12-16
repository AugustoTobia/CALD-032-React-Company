import React, { Component } from 'react'
import propTypes from 'prop-types';

export class AddCompany extends Component {
    state = {
        id: 1,
        companyName: '',
        cuit: 2,
        email: '',
        fiscalAddress: ''
    }

    onNameChange = (e) => this.setState({ [e.target.name]: e.target.value });
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddCompany(this.state.title);
        this.setState({ title: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
               <input type="text" name="companyName" placeholder="Company Name" style={{flex: '10', padding: '5px'}} value={this.state.companyName} onChange={this.onChange} />
               <input type="number" name="cuit" placeholder="Cuit..." style={{flex: '10', padding: '5px'}} value={this.state.cuit} onChange={this.onChange} />
               <input type="text" name="email" placeholder="Contact Email" style={{flex: '10', padding: '5px'}} value={this.state.email} onChange={this.onChange} />
               <input type="text" name="fiscalAddress" placeholder="Fiscal Address" style={{flex: '10', padding: '5px'}} value={this.state.fiscalAddress} onChange={this.onChange} />
               <input type="submit" value="Submit" className="submitbtn" style={{flex: '1'}} className="submitBtn" /> 
            </form>
        )
    }
}


export default AddCompany
