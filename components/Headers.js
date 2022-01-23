import headerStyles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
          <span>Django</span> Web Framework
      </h1>
        <p className={headerStyles.description}>
            Django is a progressive web framework that enables us to build apps very fast.
        </p>
    </div>
  )
}
