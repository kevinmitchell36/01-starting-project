import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selected, setSelected] = useState()

  function handleSelect(selectedButton) {
    let convertToKey = selectedButton.toLowerCase()
    setSelected(convertToKey)
  }

  let tabContent = <p>Please select a topic</p>

  if (selected) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selected].title}</h3>
      <p>{EXAMPLES[selected].description}</p>
      <pre>
        <code>
          {EXAMPLES[selected].code}
        </code>
      </pre>
    </div>
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
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
