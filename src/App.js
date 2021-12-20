
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';


function App() {
  return (
    <>
      {/* this is a component that which we import from components folder  */}
      {/* we set porps in the this navbar to set titel and ther elements */}
      <Navbar title="Hcompany" about="set pages name" />

      {/* this is text area which we used from bootstrap */}
      <div className='container'>
        {/* we use the className="container" to give good look for more search on google */}
        <TextForm heading="FIRST React app"/>
      </div>



    </>
  );
}

export default App;
