import styles from './style.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
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
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>

      </div>

      <footer>


      </footer>

    </article>
  );
}