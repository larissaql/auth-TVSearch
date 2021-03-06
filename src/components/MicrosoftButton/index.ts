import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth'
import { firebaseApp } from '../../config/firebase'


const onClick = () => {
  const auth = getAuth(firebaseApp)
  const provider = new OAuthProvider('microsoft.com')
  signInWithPopup(auth, provider)
  .then((result) => {
      const credential = OAuthProvider.credentialFromResult(result)
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

const renderMicrosoftLoginButton = (container: HTMLElement) => {
  const htmlContent = `
        <div class="login-button-microsoft">
        <button type="button" class="login-button-microsoft">
            <img src="/assets/img/microsoft.png" alt="Microsoft">
            <span>Entrar com Microsoft</span>
        </button>
        </div>
    `

  container.innerHTML = htmlContent
  const loginButton = <HTMLButtonElement>document.querySelector('.login-button-microsoft')
  loginButton.onclick = onClick
}

export default renderMicrosoftLoginButton
