import renderGoogleLoginButton from "../components/GoogleButton";
import renderGithubLoginButton from "../components/GithubButton";
import renderMicrosoftLoginButton from "../components/MicrosoftButton";

import './styles.css'

const $ = document.querySelector.bind(document)

const renderLoginButtons = (container: HTMLDivElement) => {
    const htmlContent =`
        <h1>Olá, faça o seu login para acessar o TV Search!</h1>    
        
        <div id="login-button-google"></div>

        <div id="login-button-github"></div>

        <div id="login-button-microsoft"></div>
    `
    container.innerHTML = htmlContent

    const googleBtn = <HTMLDivElement>$('#login-button-google')
    const githubBtn = <HTMLDivElement>$('#login-button-github')
    const microsoftBtn = <HTMLDivElement>$('#login-button-microsoft')

    renderGoogleLoginButton(googleBtn)
    renderGithubLoginButton(githubBtn)
    renderMicrosoftLoginButton(microsoftBtn)
}
export default renderLoginButtons