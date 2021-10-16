import './App.css';
import useFirebase from './hooks/usefirebase';

function App() {
  const {GoogleSignIn,handleRegistaton,handleEmailChange,handlePasswordChange}=useFirebase()
  return (
    <div className="App">
      <form  onSubmit={handleRegistaton}>
      <h3>Naimur Rahman </h3>
      <input  onBlur={handleEmailChange} type="email" required/>
      <br/>
      <input  onBlur={handlePasswordChange} type="password" required/>
      <br/>
      <input onClick={handleRegistaton}  type="submit"/>
      <br/>
      </form>
      <button onClick={GoogleSignIn}>This is Button</button>
    </div>
  );
}

export default App;
