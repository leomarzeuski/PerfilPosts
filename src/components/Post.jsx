import { PencilLine } from 'phosphor-react'
import styles from './Post.module.css'
import amouo from '../images/amouo.jpeg'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={amouo} alt="sei la" />
          <div className={styles.authorInfo}>
            <strong> Camila Mendes </strong>
            <span> Web Developer master senior </span>
          </div>
        </div>

        <time title="12 de Agosto" dateTime="2022-08-12 08:08:08">
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Meu objetivo-mor com este livro não é tornar-me bilionário. Aliás, há
          apenas uma pessoa no mundo que se tornou bilionária tendo como
          principal atividade profissional escrever livros: J.K. Rowling, autora
          do fenômeno mundial Harry Potter.
        </p>

        <p>
          Minha principal motivação para escrever este livro é a mesma que me
          fez aceitar fazer parte da “equipe da riqueza” (Wealth Team) da
          Forbes, um seleto grupo de repórteres da revista norte-americana que
          cobre a seção de bilionários. Não me formei em jornalismo, caí de
          paraquedas na Forbes e fiquei profundamente empolgado com o privilégio
          de trabalhar descobrindo e revelando como os mais bem-sucedidos
          empresários da atualidade fazem para alcançar – e se manter, né Eike
          Batista? – o topo e acumular vastas fortunas no caminho.
        </p>

        <p>
          <a href="">
            Desde o primeiro dia na “equipe da riqueza”, tentei encontrar
            semelhanças entre os diversos bilionários. Meu propósito com este
            livro é mostrar que os 1.645 bilionários presentes na lista da
            Forbes possuem mais características em comum do que a quantidade de
            zeros antes da vírgula em suas contas bancárias. Eu acredito que
            existe um mindset bilionário, o que faz com que a maioria desses
            ricaços pense e aja de maneira similar.
          </a>
        </p>
      </div>
    </article>
  )
}
