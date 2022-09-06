import { Header } from './components/Header'
import { Post } from './components/Post'
import './Global.css'

import styles from './App.module.css'
import { sidebar as Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpnraGJEUxCDNtllzvmxOLOPH52Qdb2_CmA&usqp=CAU',
      name: 'Camel case',
      role: 'Desenvolvedora Pleno'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Meu objetivo-mor com este livro não é tornar-me bilionário. Aliás, há apenas uma pessoa no mundo que se tornou bilionária tendo como principal atividade profissional escrever livros: J.K. Rowling, autora do fenômeno mundial Harry Potter.'
      },

      {
        type: 'paragraph',
        content:
          'Minha principal motivação para escrever este livro é a mesma que me fez aceitar fazer parte da “equipe da riqueza” (Wealth Team) da Forbes, um seleto grupo de repórteres da revista norte-americana que cobre a seção de bilionários. Não me formei em jornalismo, caí de paraquedas na Forbes e fiquei profundamente empolgado com o privilégi de trabalhar descobrindo e revelando como os mais bem-sucedidos empresários da atualidade fazem para alcançar – e se manter, né Eike Batista? – o topo e acumular vastas fortunas no caminho.'
      },

      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-12 08:08:08')
  },
  {
    id: 2,
    author: {
      avatarImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6jAtA0TCTmSo-AhfFdVod7BZdAdZ6L5eAw&usqp=CAU',
      name: 'Leo Marzeuski',
      role: 'Desenvolvedor Pleno'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Meu objetivo-mor com este livro não é tornar-me bilionário. Aliás, há apenas uma pessoa no mundo que se tornou bilionária tendo como principal atividade profissional escrever livros: J.K. Rowling, autora do fenômeno mundial Harry Potter.'
      },

      {
        type: 'paragraph',
        content:
          'Minha principal motivação para escrever este livro é a mesma que me fez aceitar fazer parte da “equipe da riqueza” (Wealth Team) da Forbes, um seleto grupo de repórteres da revista norte-americana que cobre a seção de bilionários. Não me formei em jornalismo, caí de paraquedas na Forbes e fiquei profundamente empolgado com o privilégi de trabalhar descobrindo e revelando como os mais bem-sucedidos empresários da atualidade fazem para alcançar – e se manter, né Eike Batista? – o topo e acumular vastas fortunas no caminho.'
      },

      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-09-13 10:08:09')
  }
]
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
