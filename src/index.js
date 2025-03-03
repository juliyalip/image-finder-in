import './styles.css';
import './js/modal'
import ApiService from './js/api-service';
import LoadMoreBtnClass from './js/loadMoreBtnClass';
import getRefs from './js/getRefs';
import { cardImgTemplate } from './js/cardImgTemplate';

const { formEl, galleryEl , loaderEl} = getRefs()

const apiService = new ApiService()
const loadMoreEl = new LoadMoreBtnClass({ selector:'[data-action="Loader more"]', hidden: true })

console.log(loadMoreEl)

formEl.addEventListener("submit", onSearchImages)
loadMoreEl.refs.button.addEventListener("click", onLoadMore)

async function onSearchImages(e) {
    e.preventDefault()

    const searchValue = e.currentTarget.elements.query.value

       if (!searchValue) {
        return alert("please enter search query")
    }
 try{
    loaderEl.classList.remove("is-hidden");

    clearContainer()
    apiService.resetPage()
  
    apiService.query = searchValue;

    
    const result = await apiService.fetchArticles()
    console.log(result)
    const { hits, totalHits } = result;
    apiService.incrementPage()

    const cardsMarkup = makeImagesMarkup(hits);
    renderCards(cardsMarkup)
    loadMoreEl.show()
  }catch(error){
    console.log(error)
 }finally{
    formEl.reset()
    loaderEl.classList.add('is-hidden')
 }
}

async function onLoadMore(e) {
    e.preventDefault();
    loadMoreEl.disable();  

    try {
        const result = await apiService.fetchArticles(); 
        console.log(result);

        const { hits } = result;
        apiService.incrementPage();  

        const cardsMarkup = makeImagesMarkup(hits);  
        renderCards(cardsMarkup);  
    } catch (error) {
        console.log(error);
    } finally {
        loadMoreEl.enable();  
        loaderEl.classList.add('is-hidden')
    }
}

function makeImagesMarkup(images) {
    return images.map(cardImgTemplate).join('')
}

function renderCards(listMarkup) {
    return galleryEl.insertAdjacentHTML('beforeend', listMarkup)
}

function clearContainer() {
    galleryEl.innerHTML = ''
   }
