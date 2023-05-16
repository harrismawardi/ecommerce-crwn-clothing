import CategoryTile from "../category-tile/category-tile";
import './directory.scss';

const Directory = ({categories}) => {
    const categoryTiles = categories.map((category) => {
        return <CategoryTile key={category.id} category={category} />
    })

    return (
        <div className='directory-container'>
            {categoryTiles}
        </div>
    );
}

export default Directory;