
import './App.css';
import Header from "./components/Header/Header.js";
import Sidebar from './components/Sidebar/Sidebar.js';
import Feed from './components/Feed/Feed.js';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app___body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
