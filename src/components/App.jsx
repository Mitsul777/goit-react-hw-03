import { useState } from 'react'
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import './App.css'
const initalContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
function App() {
    const [contacts, setСontacts ] = useState(initalContacts);
    const [filter, setFilter] = useState('')
    const visibleContacts = contacts.filter(contacts =>contacts.name.toLowerCase().includes(filter.toLowerCase()))
  return (
      <div>
          <h1>Phonebook</h1>
          <ContactForm   />
          <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={visibleContacts}  />
      </div>
  )
}

export default App
