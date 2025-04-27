import { useState } from "react"
import { CORE_CONCEPTS, EXAMPLES } from "../data"
import TabButton from "./TabButton";

function Examples() {
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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {CORE_CONCEPTS.map(concept => 
          <TabButton 
            isHighlighted={selected === concept.title.toLowerCase()}
            onSelect={() => handleSelect(concept.title)} 
            key={concept.id}>{concept.title}
          </TabButton>
        )}
      </menu>
        {tabContent}
    </section>
  )
}

export default Examples
