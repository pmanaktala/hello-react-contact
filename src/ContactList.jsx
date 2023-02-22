import React from 'react';
import Contact from "./Contact";

const ContactList = ({contacts, deleteContact}) => {

    return (<>
        {contacts.map(contact => {
            return <Contact key={contact.id} contact={contact} deleteContact={deleteContact}></Contact>
        })}
    </>);
};

export default ContactList;
