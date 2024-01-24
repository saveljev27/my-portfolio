import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/localStorage'
import moon from './moon.svg'
import sun from './sun.svg'
import './BtnDarkMode.styles.css'

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkmode', 'light')
  const btnRef = useRef(null)

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active')
    } else {
      document.body.classList.remove('dark')
      btnRef.current.classList.remove('dark-mode-btn--active')
    }
  }, [darkMode])

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  )
}

export default BtnDarkMode
