import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";

function App() {
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
      </main>
    </div>
  );
}

export default App;
