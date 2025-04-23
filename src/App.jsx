import CoreConcepts from "./components/CoreConcepts";
import componentsImg from "./assets/images/components.png";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts title="Components" description="The core UI building block" image={componentsImg}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
