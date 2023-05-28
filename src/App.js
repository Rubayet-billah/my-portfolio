import "./App.css";
import Header from "./Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";
import Projects from "./Pages/Home/Projects/Projects";

function App() {
  return (
    <div data-theme="black" className="font-montserrat min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto py-24">
        <Banner />
        <Projects />
      </main>
    </div>
  );
}

export default App;
