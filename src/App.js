import './App.css';
import BodyContainer from './components/BodyContainer/BodyContainer';

function App() {

  const addToCartBtn = () => {
    console.log('button working');
}


  return (
    <div className="App">
      <BodyContainer
        addToCartBtn = {addToCartBtn}
      ></BodyContainer>
    </div>
  );
}

export default App;
