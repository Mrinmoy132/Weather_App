import React, { useState, useRef } from 'react'
import "./EmojiPicker.css"
const EmojiPicker = () => {

    const allEmoji = ["😀", "😁", "😂", "🤣", "😍", "😎", "😊", "🤔", "😇", "🙃",
        "😅", "😢", "😭", "😡", "🤬", "🤗", "🤩", "😴", "😐", "😶",
        "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔",];
    const [pick, setPick] = useState(false);
    const [input, setInput] = useState("");
    const inputRef = useRef();

    const showEmoji = () => {
        setPick(prev => !prev);
        inputRef.current.focus();
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addEmoji = (index) => {
        const emoji = allEmoji[index];
        const start = inputRef.current.selectionStart;
        const end = inputRef.current.selectionEnd;

        const textBefore = input.slice(0, start);
        const textAfter = input.slice(end);

        const newText = textBefore + emoji + textAfter;
        setInput(newText);

        // Maintain cursor after emoji
        setTimeout(() => {
            inputRef.current.focus();
            inputRef.current.selectionStart = inputRef.current.selectionEnd = start + emoji.length;
        }, 0);
    }

    return (
        <>
            <form action="">
                <label htmlFor="comment"></label>
                <input type="text" name='comment' id='comment' value={input} onChange={handleChange} ref={inputRef} />
            </form>
            <button onClick={showEmoji} className='btn'>{pick?"Hide Emoji":"Show Emoji"}</button>
            {pick &&
                <div className='emojiContainer'>
                    {allEmoji.map((emoji, index) => {
                        return (
                            <div key={index} className='emojis' onClick={()=>addEmoji(index)}>{emoji}</div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default EmojiPicker