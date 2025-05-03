import React from 'react';

export default function App() {
    return (
        <main>
            <header>
                <img className="icon" src="" alt="meme-icon"/>
                <h2>Meme Generator</h2>
            </header>
            <section className="input">
                <label>
                    Top Text
                    <br/>
                    <input type="text"/>
                </label>
                <label>
                    Bottom Text
                    <br/>
                    <input type="text"/>
                </label>

            </section>
            <button>
                Get a new meme image
            </button>
            <img className="meme" src="" alt="meme"/>
        </main>
    )
}