import renderLoginButtons from './LoginButtons'
import './styles.css'

const token = localStorage.getItem('token')
if (token) {
  location.href = 'index.html'
} else {
  const app = <HTMLDivElement>document.getElementById('app')
      renderLoginButtons(app)
}
