let createContact = require("./Contact");
let getContacts = require("./ContactCollection");

//1. get contacts from LS (which is in our other module)
//2. iterate over them
//2.5 where should we put it?
//3. render them to the DOM

function listContacts(){
    getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactToDOM(contactComponent);
    });
}


function writeContactToDOM(contact){
    document.querySelector("#contactList").innerHTML += contact;
}

module.exports = listContacts;