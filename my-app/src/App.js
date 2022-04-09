import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Hero from './components/Hero';
import data from './data';
function App() {
  const cardComponents = data.map(item => {
    return <Card 
              key={item.id}
              item={item}
          />
  })
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="cards-list">
                {cardComponents}
      </section>
    </div>
  );
}

export default App;
