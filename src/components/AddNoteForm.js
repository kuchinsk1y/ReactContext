import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";

const AddNoteForm = () => {
  const [newNote, setNewNote] = useState("");
  const { addNote } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote) {
      addNote(newNote);
      setNewNote("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Add a new note"
        className="w-full p-3 bg-gray-700 rounded-lg text-white"
      />
      <button
        type="submit"
        className="mt-3 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
