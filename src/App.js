import "./App.css";
import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "This is my first note!",
    //   date: "15/08/1997",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my second note!",
    //   date: "04/05/1985",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my third note!",
    //   date: "10/02/1954",
    // },
    // {
    //   id: nanoid(),
    //   text: "This is my fourth note!",
    //   date: "15/06/1969",
    // },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("notes");
    if (data) {
      const notes = JSON.parse(data);
      setNotes(notes);
    }
  }, []);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter(function (note) {
      return note.id !== id;
    });
    setNotes(newNotes);
    localStorage.removeItem("notes");
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div className={darkMode && "dark-mode"}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
