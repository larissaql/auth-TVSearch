import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseApp } from '../../config/firebase'

const onClick = () => {
  const auth = getAuth(firebaseApp)
  const provider = new GoogleAuthProvider
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
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

const renderGoogleLoginButton = (container: HTMLElement) => {
  const htmlContent = `
      <div class="login-button-google">
        <button type="button" id="login-button-google">
            <img src="/assets/img/google.png" alt="Google">
            <span>Entrar com Google</span>
        </button>
      </div>
    `

  container.innerHTML = htmlContent
  const loginButton = <HTMLButtonElement>document.querySelector('.login-button-google')
  loginButton.onclick = onClick
}

export default renderGoogleLoginButton
