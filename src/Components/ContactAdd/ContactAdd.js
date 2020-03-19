import React, { Fragment, Component } from "react"
import "./ContactAdd.css";

class ContactAdd extends Component {

    state = {
        name: null,
        email: null,
        phone: null,
        address: null,
        avatar: null
    };

    getName = (event) => {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        });
    }
    getAddress = (event) =>{
        console.log(event.target.value)
        this.setState({
            address: event.target.value
        });
    }
    getPhone = (event) =>{
        console.log(event.target.value)
        this.setState({
            phone: event.target.value
        });
    }
    getEmail = (event) =>{
        console.log(event.target.value)
        this.setState({
            email: event.target.value
        });
    }
    getAvatar = (event) =>{
        console.log(event.target.value)
        this.setState({
            avatar: event.target.value
        });
    }

    sendData = (event) =>{
        event.preventDefault();
        console.log("sending");
        const {name,address,phone,email,avatar} = this.state;
        this.props.addContact(name,address,phone,email,avatar);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.sendData}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name contact</label>
                        <input onChange={this.getName} type="text" class="form-control" placeholder="Enter name"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Address contact</label>
                        <input onChange={this.getAddress} type="text" class="form-control" placeholder="Enter address"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone contact</label>
                        <input onChange={this.getPhone} type="tel" class="form-control" placeholder="Enter phone"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email contact</label>
                        <input onChange={this.getEmail} type="email" class="form-control" placeholder="Enter email"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Select number avatar</label>
                        <input onChange={this.getAvatar} type="number" min="1" max="99" class="form-control" placeholder="Enter email"></input>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Fragment >
        )
    }
}
export default ContactAdd;