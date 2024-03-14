import { useState, useEffect } from 'react';

import './App.css'
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import fetchCards from './ApiRequest/Api';
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageModal from "./ImageModal/ImageModal";
import toast from 'react-hot-toast';


export default function App() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

useEffect(() => {
  if (query === "") return
  
  async function getData() {
   try {
     setIsLoading(true)
     setError(false)
     const data = await fetchCards(query, page)
     if (data.length === 0) {
       toast("Nothing was found");
       setAllDataLoaded(true)
       
     } else {
       setImages((prevImages) => {
       return [...prevImages, ...data]
     });
     }
    } catch (error) {
      setError(true)
   } finally {
     setIsLoading(false)
    }
  }
getData()
 
}, [query, page, allDataLoaded])

  const handleSearch = async (newQuery) => {
    if (query === newQuery) return
    setQuery(newQuery)
    setPage(1)
    setImages([])
    setAllDataLoaded(false)
  }
  const openModal = (image) => {
   setSelectedImage(image)
    setShowModal(true)
    }
const closeModal = () => {
        setShowModal(false)
    }
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      
      {images.length > 0 && <ImageGallery images={images} onOpen={openModal} />}


      {!allDataLoaded && images.length > 0 && !isLoading &&  (
        <LoadMoreBtn page={page} setPage={setPage} />
      )}
     
      <ImageModal onOpen={showModal} onClose={closeModal} image={selectedImage} />
        {isLoading && <Loader/>} 
    </>
  )
}
