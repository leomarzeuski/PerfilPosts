import { Header } from './components/Header'
import { Post } from './components/Post'

import './Global.css'

import styles from './App.module.css'
import { sidebar as Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {},
    content: []
  }
]
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Leo Marzeuski"
            content=" sdhghh h hdoahdododoah oh hhdaohhdoa hoh ohodh aohdohadhodahohdoa"
          />

          <Post
            author="Leo Marzeuski"
            content=" sdhghh h hdoahdododoah oh hhdaohhdoa hoh ohodh aohdohadhodahohdoa"
          />
          <Post
            author="Leo Marzeuski"
            content=" sdhghh h hdoahdododoah oh hhdaohhdoa hoh ohodh aohdohadhodahohdoa"
          />
        </main>
      </div>
    </div>
  )
}
