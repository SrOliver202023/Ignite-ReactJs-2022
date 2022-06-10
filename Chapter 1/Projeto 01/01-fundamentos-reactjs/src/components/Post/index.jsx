import { format, formatDistanceToNow } from 'date-fns';

import styles from './style.module.css';

import { Comment } from '../Comment';

import { Avatar } from '../Avatar';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

  const [newCommentText, setNewCommentText] = useState('');
  const [comments, setComments] = useState([
    'Que post muito bacana hein! 👏👏'
  ]);

  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });


  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(text) {
    event.target.setCustomValidity('');
    setNewCommentText(text.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete) {
    // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor
    // (novo espaço na memória)

    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }


  const isNewCommentEmpty = newCommentText.length === 0;
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
            return <p key={`#L ${line.content} - ${new Date()} - @${Math.random()}`}>{line.content}</p>;
          } else if (line.type = "link") {
            return <p key={`#L ${line.content} - ${new Date()} - @${Math.random()}`}><a href='#'>{line.content}</a></p>;
          }

        })}

        {/* <p>
          <a href="#">#novoprojeto</a> {'  '}
          <a href="#">#nlw</a>{'  '}
          <a href="#">#rocketseat</a>{'  '}
        </p> */}

      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />


        <footer>
          <button type='submit'
            disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map((comment) => (
            <Comment
              key={`#C ${comment} - ${new Date()} - @${Math.random()}`}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))
        }

      </div>
    </article>
  );
}