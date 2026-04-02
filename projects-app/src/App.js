/*
  EE461L Frontend Technologies – Task 3: React Projects App
  Student: Manas Pathak

  App.js – Root component that renders the Projects page.
*/
import React from 'react';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      {/* RUBRIC: Projects component is rendered by App */}
      <Projects />
    </div>
  );
}

export default App;
