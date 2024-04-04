import React from "react";
import Entry from "../Entry";
import emojipedia from "../emojipedia"

function createdictinary(value){
  return (
    <Entry
    key={value.id}
    emoji={value.emoji}
    name={value.name}
    meaning={value.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">

       {emojipedia.map(createdictinary)}
    
      </dl>
    </div>
  );
}

export default App;
