import React from "react";
import './style.css'
export default function Form(item) {

    const val = new Promise((res, rej) => {
        setTimeout(() => {
            res('fgfgf')
        }, 4000)
    })
    async function df() {
        const response = await val
        console.log(response)
    }

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getMemeUrl() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevUrl => ({
            ...meme,
            randomImage: url

        }))

    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    const newArray = []
    let word = 'role'
    let data = ["email", "role", "type", "name"];
    for (let i = 0; i < data.length; i++) {

        const Data = data[i]
        if (Data === word) {
            newArray.unshift(Data)
            //  console.log('fdf')
        }
        else {
            newArray.push(Data)
        }
    }
    console.log(newArray)
    return (
        <div className="form-del">
            <div>
                <div className="input-field">
                    <input
                        type="text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="btn">
                    <button onClick={getMemeUrl}>
                        <p>Get a New image</p>
                        <img src="./image/pic.png" alt="" />
                    </button>
                </div>
                <div className="meme-image">
                    <img src={meme.randomImage} alt="dsd" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </div>
    )
}