import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="description of card 1" />
        <Card title='card 2' description='description of card 22'/>
        <Card title='card 3' description='description of card 333'/>
        <Card title='card 4' description='description of card 4444'/>
      </div>

      <Footer />
    </>
  );
}

export default App;
