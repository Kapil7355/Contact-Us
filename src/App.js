// import logo from './logo.svg';
import './App.css';
import Navigation from './Component/navigation';
import Form from './contactForm/form';
import ContactHeader from './contactHeader/ContactHeader';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <ContactHeader/>
    <Form/>
    

    </div>
  );
}

export default App;
