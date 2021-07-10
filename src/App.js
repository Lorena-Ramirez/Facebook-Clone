
import './App.css';
import Header from "./components/Header/Header.js";
import Sidebar from './components/Sidebar/Sidebar.js';
import Feed from './components/Feed/Feed.js';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';

function App() {
  const user = "Lorena";

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app___body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
