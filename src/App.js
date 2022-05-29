import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './components/tab-system/Tabs';


function App() {
  return (
    <div className="App" id="page-container">
      <div id="content-wrapper">
        <Header></Header>
        <Tabs></Tabs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
