import React from 'react';

const Contact = ({contact, deleteContact}) => {
    return (
        <>
            <p>{contact.name} {contact.phone}
                <button onClick={() => deleteContact(contact.id)}>Delete Contact</button>
            </p>
        </>
    );
};

export default Contact;
