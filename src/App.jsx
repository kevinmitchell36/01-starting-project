import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
  const [selected, setSelected] = useState('Components')

  function handleSelect(selectedButton) {
    setSelected(selectedButton)

  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => 
              <CoreConcepts 
                title={concept.title}
                description={concept.description} 
                image={concept.image} 
                key={concept.id}/>
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map(concept => 
              <TabButton 
                onSelect={() => handleSelect(concept.title)} 
                key={concept.id}>{concept.title}
              </TabButton>
            )}
          </menu>
            {selected}
        </section>
      </main>
    </div>
  );
}

export default App;
