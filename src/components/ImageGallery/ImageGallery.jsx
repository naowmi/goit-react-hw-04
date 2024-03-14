import ImageCard from "./ImageCard";
import css from "./ImageGallery.module.css"
export default function ImageGallery({ images, onOpen }) {
    return (
        <>
            {(
                <ul className={css.container}>
                    {images.map((image => 
                        <li key={image.id}>
                            <div onClick={() => onOpen(image)}>
                             <ImageCard image={image} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
