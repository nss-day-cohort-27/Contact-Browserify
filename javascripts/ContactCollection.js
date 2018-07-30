"use strict";

let contacts = [
    {
        name: "Meg Ducharme",
        phone: "5555555555",
        address: "101 North Pole Ave Santa, NP"
    },
    {
        name: "Judy Armstrong",
        phone: "4109274657",
        address: "11 Hemlock Court, Hunt Valley, MD 21030"
    },
    {
        name: "Jimmy Armstrong",
        phone: "4104563465",
        address: "Somewhere in DC"
    }
];

localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts(){
    return JSON.parse(localStorage.getItem("contacts"));
}

module.exports = getContacts;