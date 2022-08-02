import React from 'react'
import { useEmoji } from '../../context/EmojiContext'
import EmojiList from '../Emoji/EmojiList'
const EmojiResult = () => {
    const { filteredData } = useEmoji()
    return (
        <div className='emoji-result'>
            {filteredData.map((emoji, index) => (
                <EmojiList key={index} emoji={emoji} />
            ))}
        </div>
    )
}

export default React.memo(EmojiResult)