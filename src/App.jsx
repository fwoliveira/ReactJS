import './App.css';
import Header from './Header';



function App() {
  function handleButtonClick(){
    alert('Clicou no botão')
  }

  function sum(a,b){
    return a+b
  }

  return (
    <>
      <Header title="Meu primeiro componente React" />
      <Header title="Um componente com props" />
      <h2>Senac Campinas</h2>
      <div>retorno da soma:{sum(a,b)}</div>
      <button onClick={handleButtonClick}> click me</button>
    </>
  );
}

export default App;
