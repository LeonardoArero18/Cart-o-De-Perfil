import './App.css';
import CardProfile from './components/Cartao-de-Perfil/CardProfile';
import Contacts from './components/Lista-de-contatos/Contacts';

function App() {
  return (
    <div className="App">
      <CardProfile  name="Maria Silva" age='30' bio='Desenvolvedora Front-end'/>
      <CardProfile  name="João Souza" age='28' bio='Designer UX/UI'/>
      <CardProfile  name="Ana Costa" age='32' bio='Gerente de Projetos'/>
      <Contacts />
    </div>
  );
}

export default App;
