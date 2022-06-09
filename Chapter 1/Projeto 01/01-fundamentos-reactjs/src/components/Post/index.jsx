import styles from './style.module.css';

import { Comment } from '../Comment';

import { Avatar } from '../Avatar';


export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src='https://github.com/sroliver202023.png'
          />


          <div className={styles.authorInfo}>
            <strong>Emmerson Oliveira</strong>
            <span>Mobile developer</span>
          </div>

        </div>


        <time title='06 de Junho de 2022 às 12:00' dateTime='2022-06-06 12:00:00'>Publicado há 3h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          👉
          <a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> {'  '}
          <a href="#">#nlw</a>{'  '}
          <a href="#">#rocketseat</a>{'  '}
        </p>

      </div>

      <form className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />


        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}