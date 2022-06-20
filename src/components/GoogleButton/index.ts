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
      const { displayName, photoURL } = user
      localStorage.setItem('token', token || '')
      localStorage.setItem('userName', displayName || '')
      localStorage.setItem('userPhoto', photoURL || '')
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
        <button class="login-button">
            <img src="/assets/img/google.png" alt="Google">
            <span>Entrar com Google</span>
        </button>
    `

  container.innerHTML = htmlContent
  const loginButton = <HTMLButtonElement>document.querySelector('.login-button')
  loginButton.onclick = onClick
}

export default renderGoogleLoginButton
