import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from "./Headers";


export default function Layout({children}) {
  return (
  	<>
	    <Nav />
	    <Header/>
	    <div className={styles.container}>
		    <main className={styles.main}>
			    {children}
		    </main>
	    </div>
    </>
  )
}

