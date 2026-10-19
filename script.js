async function getImage() {
    try {

        const character = document.getElementById("character").value
        const url = "https://api.disneyapi.dev/character?name="+character;
        console.log(character)
        const headers = new Headers();
        headers.append("Accept", "application/json")

        const response = await fetch(url, {headers: headers});

        const json = await response.json();
        console.log(JSON.stringify(json));
        const characterHolder = document.getElementById("characterHolder");
        
        let img = document.createElement('img')
        img.src = json.data[0].imageUrl;
        img.width = 100;
        characterHolder.appendChild(img)

        
    } catch (error) {
        console.log(error);
    }
}