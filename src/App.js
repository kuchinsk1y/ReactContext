import React from 'react';
import { NotesProvider } from './context/NotesContext';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';

function App() {
  return (
    <NotesProvider>
      <div className="min-h-screen bg-gray-800 flex justify-center items-center">
        <div className="bg-gray-900 p-6 rounded-lg w-full max-w-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Notes App</h1>
          <AddNoteForm />
          <NoteList />
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
