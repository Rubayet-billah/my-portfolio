import "./App.css";
import Header from "./Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";
import Projects from "./Pages/Home/Projects/Projects";
import Skills from "./Pages/Home/Skills/Skills";

function App() {
  return (
    <div
      className="font-montserrat min-h-screen  bg-gradient-to-r
    from-black
    via-gray-900
    to-black
    background-animate text-white"
    >
      <Header />
      <main className="max-w-7xl mx-auto py-24">
        <Banner />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
