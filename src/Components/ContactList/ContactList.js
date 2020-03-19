import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({List, setFavourite, deleteContact}) => {

const singleContact = List.map(item =>{
return (
    <ContactItem 
    key={item.id}
    name={item.name} 
    phone={item.phone} 
    email={item.email} 
    address={item.address} 
    gender={item.gender} 
    avatar={item.avatar}
    IsFavorite={item.IsFavorite}
    setFavourite={()=>setFavourite(item.id)}
    deleteContact = {()=>deleteContact(item.id)}>

    </ContactItem>
);
});

    return (
        <Fragment>
            <p>Contact list:</p>
            <ul className="list">
                {singleContact}
            </ul>
        </Fragment>
    )
}

export default ContactList;