import React, { useEffect, useState } from 'react'
import { useEmoji } from '../../context/EmojiContext'
const SearchInput = () => {
    const [title, setTitle] = useState("");
    const { setText } = useEmoji();
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setText(title)
        }, 200)
        return () => clearTimeout(delayDebounceFn)
    }, [title])

    return (
        <>
            <form>
                <input placeholder='Search emoji' className='search-input'
                    value={title} type="text" onChange={e => setTitle(e.target.value)} />
            </form>
        </>
    )
}

export default SearchInput