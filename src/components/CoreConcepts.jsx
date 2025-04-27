import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map(concept => 
          <CoreConcept 
            {...concept} 
            key={concept.id}/>
        )}
      </ul>
    </section>
  )
}

export default CoreConcepts
