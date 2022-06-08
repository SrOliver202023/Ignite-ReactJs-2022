import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';


export function Comment() {
  return (
    <div className={styles.commentBox}>
      <img
        src='https://github.com/sroliver202023.png'
      />

      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Emmerson Oliveira</strong>
            <time
              title='11 de Maio às 08:13h'
              dateTime='2022-05-11 08:13:30'>
              Cerca de 1h atrás
            </time>
          </div>
          <button title="Deletar comentário">
            <Trash size={20} />
          </button>
        </header>
        <p>Muito bom Devon, parabéns!!  👏👏</p>
      </div>
      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  );
}