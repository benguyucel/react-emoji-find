import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

const EmojiList = ({ emoji }) => {
    const [symbol, setSymbol] = useState("");
    const handleClick = (symbol) => {
        setSymbol(symbol)
        navigator.clipboard.writeText(symbol)
    }
    return (
        <ul className='emoji-list'>
            <li>
                <div className="text">
                    <span className='symbol'>{emoji.symbol}</span>
                    <span className='title'>{emoji.title}</span>
                </div>

                <span className='copy' onClick={() => handleClick(emoji.symbol)}>Copy to clipboard</span>
            </li>
        </ul>
    )
}

export default EmojiList