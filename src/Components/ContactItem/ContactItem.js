import React, { Fragment, Component } from "react";
import "./ContactItem.css";

class ContactItem extends Component {

    state = {
        name: this.props.name,
        phone: this.props.phone,
        email: this.props.email,
        address: this.props.address,
        gender: this.props.gender,
        avatar: this.props.avatar,
        IsFavorite: false
    };

    randomImage(){
        const randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            avatar: randomAvatar
        });
    }

    // setFavourite(){
    //     this.setState({
    //         IsFavorite: !this.state.IsFavorite
    //     })
        
    // }

    render() {
        const {gender, avatar}=this.state;
        const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`
       
       let startstyle = "fa fa-star-o fa-2x star";
       if(this.props.IsFavorite === true){
           startstyle = "fa fa-star fa-2x star";
       }
        return (
            <Fragment>
                <li className="contact-item">
                    <img src={URL} alt="Contact image"></img>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.phone}</p>
                    <p>{this.state.address}</p>
                    <p>{this.state.email}</p>
                    <button className="btn btn-info" onClick={this.randomImage.bind(this)}>Random Image</button>
                    <i onClick={this.props.setFavourite} className={startstyle}></i>
                    <i onClick={this.props.deleteContact} className="fa fa-trash-o fa-2x trash"></i>
                </li>
            </Fragment>
        )
    }
}

export default ContactItem;