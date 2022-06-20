import axios from "axios"

import { API_URL } from "../../config/api"
import { getTvShow } from "../../models/TVShow"
import renderTVShowCard from "./TVShowCard"

const $ = document.querySelector.bind(document)
const http =axios.create({
    baseURL: API_URL
})


const renderSearchForm = (container: HTMLElement) => {
    const htmlContent = `
    
    <div id="header">
    <a href="/" id="titulo">TV Search</a>
    
    <ul id="menu">
        <li>
            <a href="/">Buscar</a>
        </li>
        <li>
            <a href="/">Favoritos</a>
        </li>
        <li>
            <a href="logout.html">Sair</a>
        </li>
    </ul>
    </div>

    <form id="search-form">
        <input type="text" name="filter" id ="filter" placeholder="Digite o título da série">
        <button>Pesquisar</button>
    </form>
    `
    container.innerHTML = htmlContent
}
const searchTVShows = async () => {
    const params = new URLSearchParams(document.location.search)
    const filter = params.get('filter')

    if(filter) {
        const response = await http.get('/search/shows', { params: {q: filter},})

        if(response.status == 200) {
            const {data} = response
            const resultArea = <HTMLDivElement>$('#result-area')
            resultArea.innerHTML = ''
            data.forEach((jsonObj: any) => {
                const {show} = jsonObj
                const tvShow = getTvShow(show)
                renderTVShowCard(tvShow, resultArea)
            });
        }
    }
}
searchTVShows()
export default renderSearchForm