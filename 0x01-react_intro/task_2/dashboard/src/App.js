import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app-title"> School dashboard </h1>
      </header>
    </div>
    <body className="app-body">
      <p>Login to access the full dashboard</p>
      <label className="email" htmlFor="email">Email:</label>
      <input type="email" placeholder="Email" id="email" name="email" />

      <label className="password" htmlFor="password">Password:</label>
      <input type="password" placeholder="Password" id="password" name="password" />

      <button className="button" type="button"> OK </button>
    </body>
    <footer className="app-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
     </footer>
    </>
  );
}

export default App;
