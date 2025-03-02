export const cardImgTemplate = (card) => {
    const {
        webformatURL,
        tags,
        largeImageURL,
        likes,
        views,
        comments,
        downloads
    } = card;

    return (`
        <li class="img-card">
        <div class="img-card-wrap">
            <img src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}" class="image"/>
        </div>
            <div class="stats-list">
                <div class="stat-item">
                    <i class="material-icons">thumb_up</i>
                   <span> ${likes}</span>
                </div>
                <div class="stat-item">
                    <i class="material-icons">visibility</i>
                 <span>   ${views}</span>
                </div>
                <div class="stat-item">
                    <i class="material-icons">comment</i>
                <span>    ${comments}</span>
                </div>
                <div class="stat-item">
                    <i class="material-icons">cloud_download</i>
                 <span>   ${downloads} </span>
                </div>
            </div>
        
        </li>
    `);
};
