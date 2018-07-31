"use strict";

let database = Object.create(null, {
    init: {
        value: function(){
            this.getDatabase();
        }
    },
    contacts: {
        value: []
    },
    addContact: {
        value: function(newContact){
            let database = this.getContacts();
            database.push(newContact);
            this.setContacts(database);
        }
    },
    getContacts: {
        value: function(){
            return this.contacts;
        }
    },
    getDatabase: {
        value: function(){
            return JSON.parse(localStorage.getItem("contacts")) || [];
        }
    },
    setContacts: {
        value: function(contacts){
            localStorage.setItem("contacts", JSON.stringify(contacts));
            this.contacts = this.getDatabase();
        }
    }
});


module.exports = database;