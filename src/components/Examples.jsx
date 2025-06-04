import { useState } from "react"
import { CORE_CONCEPTS, EXAMPLES } from "../data"
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

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
    <Section title="Examples" id="examples">
      <Tabs buttons={
        <>
        {CORE_CONCEPTS.map(concept => 
          <TabButton 
            isHighlighted={selected === concept.title.toLowerCase()}
            onClick={() => handleSelect(concept.title)} 
            key={concept.id}>{concept.title}
          </TabButton>
        )}
        </>
      }>
      {tabContent}
      </Tabs>
        
    </Section>
  )
}

export default Examples
