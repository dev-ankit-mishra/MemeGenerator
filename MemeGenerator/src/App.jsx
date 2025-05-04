import React from 'react';

export default function App() {

    const [meme,setMeme] = React.useState({
        imgUrl : "http://i.imgflip.com/1bij.jpg",
        topText : "ONE DOES NOT SIMPLY ",
        bottomText : "WALK INTO MORDOR"
    });

    // const [allMemes, setAllMemes] = React.useState([]);
    //
    // function handleClick(){
    //     const random=Math.floor(Math.random()*allMemes.length);
    //     const memeUrl=allMemes[random].url;
    //     setMeme((prev)=>{
    //         return({
    //             ...prev,
    //             imgUrl: memeUrl
    //         })
    //     })
    // }
    //
    // React.useEffect(()=>{
    //
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res=>res.json())
    //         .then(data =>{
    //             setAllMemes(data.data.memes)
    //         })
    // },[])
    //
    // function handleChange(e){
    //     e.preventDefault()
    //     const {name,value}=e.target;
    //     setMeme((prev)=>{
    //         return (
    //             {...prev,
    //             [name] : value}
    //         )
    //     })
    //
    // }


    return (
        <main>
            <header>
                <img className="icon" src="../public/troll-face.png" alt="meme-icon"/>
                <h2>Meme Generator</h2>
            </header>
            <section className="input">
                <label>
                    Top Text
                    <br/>
                    <input type="text"
                           name={"topText"}
                           value={meme.topText}
                           onChange={handleChange}
                    />
                </label>
                <label>
                    Bottom Text
                    <br/>
                    <input type="text"
                            name={"bottomText"}
                           value={meme.bottomText}
                           onChange={handleChange}
                    />
                </label>

            </section>
            <button onClick={handleClick}>
                Get a new meme image 🖼
            </button>
            <div className={'meme-div'}>
                <img src={meme.imgUrl}/>
                <span className={'top-text'}>{meme.topText}</span>
                <span className={'bottom-text'}>{meme.bottomText}</span>
            </div>
        </main>
    )
}