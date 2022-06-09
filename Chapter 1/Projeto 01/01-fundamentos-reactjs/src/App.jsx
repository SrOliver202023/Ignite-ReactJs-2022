import './global.css';

import styles from './App.module.css';

import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// author: { avatar_url:"", name:"", role:""}
// publishAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "github.com/sroliver202023.png",
      name: "Emmerson Oliveira",
      role: "Student @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishAt: new Date('2022-06-05 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishAt: new Date('2022-06-08 20:00:00')
  }
];

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishAt={post.publishAt}
                />
              );
            })
          }
        </main>
      </div>
    </div>
  );
}

export default App;
