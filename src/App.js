import React from 'react'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "04/01/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "05/01/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "06/01/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "07/01/2023",
    },
  ]);


  const [darkMode, setDarkMode] = useState('false');

    
  // for local storage
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);



  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />

      </div>
    </div>

  )
}

export default App