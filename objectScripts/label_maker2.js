"use strict"


let myVar = {
    name: "sarah",
    address: "123 main st",
    city: "atl",
    state: "GA",
    zip: "30000"

};

printContact(myVar);

function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city);
    console.log(contact.state);
    console.log(contact.zip);

}
