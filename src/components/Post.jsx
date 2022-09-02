import { format } from 'date-fns'; 21.5k (gzipped: 6k)
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'"
  )

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarImg} />
          <div className={styles.authorInfo}>
            <strong> {author.name} </strong>
            <span> {author.role} </span>
          </div>
        </div>

        <time tittle="" dateTime="2022-05-11 08:13:30">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}></div>
      <form className={styles.commentForm}>
        <strong> Deixe seu feedback </strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
