import React, {useState} from 'react';

const ContractForm = ({addContacts}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    return (<>
        <input type="text" id="name" placeholder="Name" onChange={e => {
            setName(e.target.value)
        }}/>

        <input type="tel" id="Phone" placeholder="Phone #" onChange={e => {
            setPhone(e.target.value)
        }}/>

        <button onClick={() => {
            addContacts(name, phone);
        }}>Add
        </button>
    </>);
};

export default ContractForm;
