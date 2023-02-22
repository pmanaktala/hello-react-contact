import React, {useEffect, useState} from 'react'
import './App.css'
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    const addContacts = (name, phone) => {
        const newContact = {id: crypto.randomUUID(), name: name, phone: phone};
        setContacts([newContact, ...contacts])
    }

    const deleteContact = (id) => {
        const filteredContacts = contacts.filter(element => {
            return id !== element.id;
        });

        setContacts(filteredContacts);
    }

    return (<>
        <ContactForm addContacts={addContacts}></ContactForm>
        <ContactList contacts={contacts} deleteContact={deleteContact}></ContactList>
    </>)
}

export default App
