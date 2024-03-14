import { useState } from "react";
import toast from 'react-hot-toast';
import css from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       if (input === "") return toast.error("Please enter at least one letter")
        onSearch(input)
    }
    return (
        <header className={css.header}>
            
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={handleInput}
                    className={css.input}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
                    
                <button type="submit" className={css.button}>Search</button>
            </form>
        </header>
    )
}
