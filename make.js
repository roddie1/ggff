let images = document.getElementById("images")

function createImageElement(imgSource) {

    const imgElement = document.createElement("img");

    imgElement.className = "imgs"
    imgElement.src = imgSource
    imgElement.alt = ""

    return imgElement
}


const imgSrcs = [
    "https://i.redd.it/00mxrv8jiq4a1.png",
    "https://i.redd.it/vcqg8lg23n4a1.png",
    "https://i.redd.it/1bt23j0xis4a1.jpg",
    "https://i.redd.it/mnr1owzlxt4a1.jpg"
]

for (let i = 0; i < imgSrcs.length; i++) {
    const currentSource = imgSrcs[i];
    const img = createImageElement(currentSource)
    images.appendChild(img)
}
