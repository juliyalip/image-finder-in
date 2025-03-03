import getRefs from "./getRefs"

const backDropEl = document.querySelector('.backDrop')
const contentEl = document.querySelector('.content')

const { galleryEl } = getRefs()

backDropEl.addEventListener("click", onClickBackDrop)
galleryEl.addEventListener("click", toggleModal)

function toggleModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    backDropEl.classList.remove("is-hidden");
    const bigImgSrc = e.target.dataset.source;
    renderBigImage(bigImgSrc);
}

function onClickBackDrop(e) {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
        return
    };
    contentEl.innerHTML = ""
    backDropEl.classList.add('is-hidden');
}

function renderBigImage(url) {
    const markup = `<img src=${url} alt="photo" />`;
    return contentEl.insertAdjacentHTML('beforeend', markup)
}
