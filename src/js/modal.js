const backDropEl = document.querySelector('.backdrop')
const contentEl = document.querySelector('.content')

backDropEl.addEventListener("click", onClickBackDrop)

function onClickBackDrop(e) {
    e.preventDefault();

   if (e.target !== e.currentTarget) {
        return
    };

      backDropEl.classList.add('is-hidden');

  
}

