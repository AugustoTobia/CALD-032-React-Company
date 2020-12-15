import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddCompany extends Component {
    state = {
        companyName: '',
        cuit: Number,
        email: '',
        fiscalAddress: ''
    }

    onNameChange = (e) => this.setState({ companyName: e.target.value });
    onCuitChange = (e) => this.setState({ cuit: e.target.value });
    onEmailChange = (e) => this.setState({ companyName: e.target.value });
    onAddressChange = (e) => this.setState({ companyName: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddCompany(this.state.title);
        this.setState({ title: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
               <input type="text" name="companyName" placeholder="Company Name" style={{flex: '10', padding: '5px'}} value={this.state.companyName} onChange={this.onNameChange} />
               <input type="number" name="cuit" placeholder="Cuit..." style={{flex: '10', padding: '5px'}} value={this.state.cuit} onChange={this.onCuitChange} />
               <input type="text" name="email" placeholder="Contact Email" style={{flex: '10', padding: '5px'}} value={this.state.email} onChange={this.onEmailChange} />
               <input type="text" name="fiscalAddress" placeholder="Fiscal Address" style={{flex: '10', padding: '5px'}} value={this.state.fiscalAddress} onChange={this.onAddressChange} />
               <input type="submit" value="Submit" className="submitbtn" style={{flex: '1'}}/> 
            </form>
        )
    }
}

AddCompany.propTypes = {
    AddCompany: PropTypes.func.isRequired
}  

export default AddCompany
