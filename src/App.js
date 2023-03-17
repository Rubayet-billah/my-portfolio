import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";

function App() {
  return (
    <div className="font-montserrat">
      <Header />
      <main className="max-w-7xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}

export default App;
