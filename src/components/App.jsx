import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "./../contacts";

function creatContact(contact){
 return <Card
  key={contact.id}
  id={contact.id} 
  name={contact.name}
  imgURL={contact.imgURL}
  phone={contact.phone}
  email={contact.email}
   />
}

function App() {
  
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://avatars.githubusercontent.com/u/52969396?v=4"/>
      {contacts.map(creatContact)}
    </div>
  );
}

export default App;
