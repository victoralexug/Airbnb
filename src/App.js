import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/card';
import Data from './data';



function App() {
  const cards = Data.map(item => {
    return (
      <Card
        key= {item.id}
        item= {item}
      />
    )
    
  })
  return (
    <div>
      <Nav />
      <Hero /> 
      <section className='cards-list'>
        {cards}
      </section>
   </div>
     
  );
}

export default App;