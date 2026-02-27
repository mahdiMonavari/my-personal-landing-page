import TopBar from "./Components/TopBar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div>
      <TopBar />
      <section id="HERO">
        <Hero />
      </section>
      <section className="h-screen bg-primary" id="ABOUT ME"></section>
    </div>
  );
}

export default App;
