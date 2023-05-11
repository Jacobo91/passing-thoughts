/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FormInput from "../Components/FormInput/FormInput";
import List from "../Components/List/List";
import { useState } from "react";
import generateUniqueId from '../utils';

function App() {

  const [thoughts, setThoughts] = useState([]);

  const handleThoughtChange = (newThought) => {
    setThoughts([{id: generateUniqueId(), thought: newThought}, ...thoughts]);
    
  }

  const removeThought = (id) => {
    setThoughts(thoughts.filter(thought => thought.id !== id))
  }

  return (
    <div className="App">
      <main>
        <section className='container' >
          <h1
            css={css`
              text-align: center;
              padding: 10px 0 0 0;
            `}
            data-testid="app title"
          >
            💭 Passing Thoughts
          </h1>
          <FormInput 
            onThoughtChange={handleThoughtChange} 
          />
          <List thoughts={thoughts} onRemoveThought={removeThought} />
        </section>
      </main>
    </div>
  );
}

export default App;
