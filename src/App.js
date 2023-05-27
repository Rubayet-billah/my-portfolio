import "./App.css";
import Header from "./Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";

function App() {
  return (
    <div data-theme="black" className="font-montserrat min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}

export default App;
