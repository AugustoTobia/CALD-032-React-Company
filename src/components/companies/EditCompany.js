import React, { Component } from 'react';

export class EditCompany extends Component {
    
    state = {
        id: '' ,
        companyName: '',
        cuit: '',
        email: '',
        fiscalAddress: ''
    }

    componentDidUpdate (prevProps) { 
        if (this.props.companySelected !== prevProps.companySelected) {
            this.setState({
                id: this.props.companySelected.id,
                companyName: this.props.companySelected.companyName,
                email: this.props.companySelected.email,
                fiscalAddress: this.props.companySelected.fiscalAddress,
                cuit: this.props.companySelected.cuit,
            })
        } 
    }

    onChange = (e) => this.setState( {[e.target.name]: e.target.value } );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.editCompany(this.state);
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
            <div className="addSection">
                <h2>Edit Technician</h2>
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
                            placeholder="Email"
                            value={this.state.email} 
                            onChange={this.onChange} 
                    />
                    <input 
                            type="text" 
                            name="fiscalAddress" 
                            className="input" 
                            placeholder="Address"
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
                            value="Submit Changes" 
                            className="submitBtn" 
                    /> 
                </form>
            </div>
        )
    }
}

export default EditCompany;
