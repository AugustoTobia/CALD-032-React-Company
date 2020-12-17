import React, { Component } from 'react'
// import propTypes from 'prop-types';

export class AddCompany extends Component {
    state = {
        id: 0,
        companyName: '',
        cuit: 0,
        email: '',
        fiscalAddress: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
   
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCompany(this.state.companyName, this.state.cuit, this.state.email, this.state.fiscalAddress);
        this.setState({      
            id: 0,
            companyName: '',
            cuit: 0,
            email: '',
            fiscalAddress: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="companyName" 
                    className="input"
                    placeholder="Company Name"
                    value={this.state.companyName}
                    onChange={this.onChange}
                />
               <input 
                    type="text" 
                    name="email" 
                    className="input" 
                    placeholder="Contact Email"  
                    value={this.state.email} 
                    onChange={this.onChange} 
               />
               <input 
                    type="text" 
                    name="fiscalAddress" 
                    className="input" 
                    placeholder="Fiscal Address"  
                    value={this.state.fiscalAddress} 
                    onChange={this.onChange} 
               />
                <input 
                    type="number" 
                    name="cuit" 
                    className="input" 
                    placeholder="Cuit"  
                    value={this.state.cuit} 
                    onChange={this.onChange} 
                />
               <input 
                    type="submit" 
                    value="Submit" 
                    className="submitBtn" 
               /> 
            </form>
        )
    }
}


export default AddCompany
