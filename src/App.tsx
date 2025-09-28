import Containers from "./containers";
import Hero from "./Hero";
import NavBar from "./navbar";
import Footer from "./footer";
import Demo from "./demo";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Containers />
      </div>
      <div>
        <Demo />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App; 