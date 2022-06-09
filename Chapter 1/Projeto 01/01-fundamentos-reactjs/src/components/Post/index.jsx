import { format, formatDistanceToNow } from 'date-fns';

import styles from './style.module.css';

import { Comment } from '../Comment';

import { Avatar } from '../Avatar';
import { ptBR } from 'date-fns/locale';


export function Post({ author, publishedAt, content }) {
  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            src={author.avatarUrl}
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>

        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type = "link") {
            return <p><a href='#'>{line.content}</a></p>;
          }

        })}

        {/* <p>
          <a href="#">#novoprojeto</a> {'  '}
          <a href="#">#nlw</a>{'  '}
          <a href="#">#rocketseat</a>{'  '}
        </p> */}

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