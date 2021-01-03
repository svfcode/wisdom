import './App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import Main from './components/Main'
import Contacts from './common/Contacts'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
