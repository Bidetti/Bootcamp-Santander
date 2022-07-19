const BASE_URL = "https://thatcopy.pw/catapi/rest/"

const catButton = document.getElementById("change-cat")

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL)
        const json = await data.json()

        return json.webpurl;
    }catch (e){
        console.error(e)
    }
}

const loadImage = async() => {
    const catImage = document.getElementById("cat")
    catImage.src = await getCats();
}

catButton.addEventListener("click", loadImage)

loadImage()

//problema no fetch com o site