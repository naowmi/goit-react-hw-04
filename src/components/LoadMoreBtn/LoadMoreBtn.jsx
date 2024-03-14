import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ page, setPage }) {
    const handleLoadMore = () => {
        setPage(page + 1);
    }

    return (
        <div>
            <button onClick={handleLoadMore} className={css.button}>Load More</button>
        </div>
    )
}