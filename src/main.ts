import renderSearchForm from './components/TVShow/SearchForm'
import './styles.css'

const token = localStorage.getItem('token')

if (token) {
  const app = <HTMLDivElement>document.getElementById('app')
  renderSearchForm(app)
  const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    app.insertAdjacentElement('beforeend', resultArea)
} else {
  location.href = 'login.html'
}

export default {}
