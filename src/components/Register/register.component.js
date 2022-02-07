import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            Name: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.Name === '') errors.Name = 'Name can not be blank.';
        if (data.userName === '') errors.userName = ' Username can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
            alert("form  successful submitted")
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div className='div1'>
            <Form  onSubmit={this.handleSubmit} style={{width:"350px" ,marginLeft:"8px",marginRight:"1px" }}>
                 
                <FormGroup>
                    <Label  for="Name" style={{marginTop:'15px'}}>Name</Label>
                    <Input id="Name" placeholder='Enter your full name..' value={data.Name} invalid={errors.Name ? true : false} name="Name" onChange={this.handleChange} />
                    <FormFeedback>{errors.Name}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="userName">Username</Label>
                    <Input id="userName" placeholder='Enter a username..' value={data.userName} invalid={errors.userName ? true : false} name="userName" onChange={this.handleChange} />
                    <FormFeedback>{errors.userName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" placeholder='Enter your email address..' value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" placeholder='Enter your password..' value={data.password} type="password" name="password" invalid={errors.password ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" placeholder='Enter your paswword again..' value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} onChange={this.handleChange} />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>
               
                <Button style={{width:"100%"}} color="success">Sign up</Button>
                <h6 style={{ marginTop:"5%",marginLeft:'13%',color:'slategray'}}>Already have an account?<a href='Signin.'> Sign in.</a></h6>
               < h6 style={{ marginTop:"10%"}}> </h6>
            </Form>
            </div>
        );
    }
  
}

export default Register;