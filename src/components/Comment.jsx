import { Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import amouo from '../images/amouo.jpeg'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={amouo} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Frederico Silva</strong>
              <time title="12 de Agosto" dateTime="2022-08-12 08:08:08">
                Cerca de 30 minutos atrás
              </time>
            </div>
            <button tittle="Deletar os comentarios">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Leo, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span></span>
          </button>
        </footer>
      </div>
    </div>
  )
}
