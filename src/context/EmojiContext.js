import { emojidata } from '../data/emoji'
import { createContext, useContext, useEffect, useState } from "react";
const EmojiContext = createContext();
export const EmojiProvider = ({ children }) => {

    const [emojies, setEmojies] = useState(emojidata);
    const [text, setText] = useState("");
    const filteredData = emojies.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
    return <EmojiContext.Provider value={{ filteredData, setEmojies, setText, text }}>{children}</EmojiContext.Provider>
}
export const useEmoji = () => useContext(EmojiContext)