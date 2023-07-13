import "./App.css";
import Header from "./Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";
import Projects from "./Pages/Home/Projects/Projects";

function App() {
  return (
    <div
      className="font-montserrat min-h-screen  bg-gradient-to-r
    from-gray-900
    via-black
    to-slate-900
    background-animate text-white"
    >
      <Header />
      <main className="max-w-7xl mx-auto py-24">
        <Banner />
        <Projects />
      </main>
    </div>
  );
}

export default App;
