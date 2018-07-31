"use strict";

let Database = Object.create(null, {
    addContact: {
        value: function(newContact){
            let databse = this.getContacts();
            databse.push(newContact);
            this.setContacts(databse);
        }
    },
    getContacts: {
        value: function(){
            return JSON.parse(localStorage.getItem("contacts")) || [];
        }
    },
    setContacts: {
        value: function(contacts){
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }
});


module.exports = Database;