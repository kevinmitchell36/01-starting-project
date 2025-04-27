import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"
import Section from "./Section"

function CoreConcepts({title, children}) {
  return (
    <Section title="Time to get started" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(concept => 
          <CoreConcept 
            {...concept} 
            key={concept.id}/>
        )}
      </ul>
    </Section>
  )
}

export default CoreConcepts
