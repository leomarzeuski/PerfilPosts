import styles from './Header.module.css'

import Ignitelogo from '../images/Ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.Header}>
      <img src={Ignitelogo} alt="logo do ignitelogo" />
      <strong>Leozin feeds</strong>
    </header>
  )
}
