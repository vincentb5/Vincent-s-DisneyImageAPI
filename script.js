async function getImage() {
    try {
        const url = "https://disneyapi.dev/character?name="+characterName;
        console.log(characterName)
        
        const response = await fetch(url);

        const json = await response.json();
        console.log(JSON.stringify(json));
        
        jokeHolder.textContent = json.data;
        let img = document.createElement('img')
        img.src = json.data[0].imageUrl;
        img.width = 100;
        characterHolder.appendChild(img)
    } catch (error) {
        console.log(error);
    }
}