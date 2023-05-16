import style from './Gallery.module.css';
const GalleryArticle = ({item}) => {
    // console.log("GalleryArticle" , item)
    let tags = item.galSearchKeyword.split(',');
    tags = tags.map((i) => <div>{i}</div>)
    return(
        <article>
            <header>
                <h2>{item.galTitle}</h2>
                <span>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl} />
            </div>
            <footer>
                <div>{item.galSearchKeyword.split(',')}</div>
            </footer>
        </article>
    )
}
export default GalleryArticle;