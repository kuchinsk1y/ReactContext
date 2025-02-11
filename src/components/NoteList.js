import React from 'react';
import { useNotes } from '../context/NotesContext';

const NoteList = () => {
  const { notes, removeNote } = useNotes();

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">Your Notes</h2>
      <ul className="space-y-2">
        {notes.map((note, index) => (
          <li key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
            <span className='text-white'>{note}</span>
            <button
              onClick={() => removeNote(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;