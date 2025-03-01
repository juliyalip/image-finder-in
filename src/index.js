import './styles.css';
import './js/modal'
import ApiService from './js/api-service';
import LoadMoreBtnClass from './js/loadMoreBtnClass';
import getRefs from './js/getRefs';
import { cardImgTemplate } from './js/cardImgTemplate';

const { formEl, galleryEl } = getRefs()

const apiService = new ApiService()
const loadMore = new LoadMoreBtnClass({ selector: '[data-set="load"]', hidden: true })

formEl.addEventListener("submit", onSearchImages)


async function onSearchImages(e) {
    e.preventDefault()

    const searchValue = e.currentTarget.elements.query.value

       if (!searchValue) {
        return alert("please enter search query")
    }
    clearContainer()
    apiService.resetPage()
    loadMore.show()
    apiService.query = searchValue;

    
    const result = await apiService.fetchArticles()
    console.log(result)
    const { hits, totalHits } = result;
    apiService.incrementPage()

    const cardsMarkup = makeImagesMarkup(hits);
    renderCards(cardsMarkup)
    formEl.reset()
}

function makeImagesMarkup(images) {
    return images.map(cardImgTemplate).join('')
}

function renderCards(listMarkup) {
    return galleryEl.insertAdjacentHTML('beforeend', listMarkup)
}

function clearContainer() {
    galleryEl.innerHTML = ''
    console.log("clear")
}
