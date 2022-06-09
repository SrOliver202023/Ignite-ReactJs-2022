import './global.css';

import styles from './App.module.css';

import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Avatar } from './components/Avatar';


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );

}

export default App;
