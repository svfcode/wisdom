import './App.css'
import Header from './common/Header'
import Footer from './common/Footer'
import Main from './components/Main'
import Contacts from './common/Contacts'
import Description from './common/Description'

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Main />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
