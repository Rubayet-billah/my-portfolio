import "./App.css";
import Header from "./Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";
import Projects from "./Pages/Home/Projects/Projects";
import Skills from "./Pages/Home/Skills/Skills";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails";

function App() {
  return (
    // <div
    //   className="font-montserrat min-h-screen
    // bg-gradient-to-r
    // from-black
    // via-gray-900
    // to-black
    // background-animate text-white"
    // >
    <div
      className="font-montserrat min-h-screen
main-background
    background-animate text-white"
    >
      <Header />
      <main className="max-w-7xl mx-auto py-24">
        {/* <Banner />
        <Projects />
        <Skills /> */}
        <ProjectDetails />
      </main>
    </div>
  );
}

export default App;
