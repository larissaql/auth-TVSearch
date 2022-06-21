import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { firebaseApp } from '../../config/firebase'

import './../styles.css'

const onClick = () => {
  const auth = getAuth(firebaseApp)
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const { user } = result
      const { displayName } = user
      localStorage.setItem('token', token || '')
      localStorage.setItem('userName', displayName || '')
      if (token) {
        location.href = 'index.html'
      }
    })
    .catch((error) => {
      const { errorCode, errorMessage } = error
      console.log(errorCode, errorMessage)
    })
}

const renderGithubLoginButton = (container: HTMLElement) => {
  const htmlContent = `
        <button id="login-button-github">
            <img src="/assets/img/github.png" alt="Github">
            <span>Entrar com Github</span>
        </button>
    `

  container.innerHTML = htmlContent
  const loginButton = <HTMLButtonElement>document.querySelector('#login-button-github')
  loginButton.onclick = onClick
}

export default renderGithubLoginButton
