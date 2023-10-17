const schemeGenerator = document.getElementById('generate-scheme')
const colorPalette = document.getElementById('color-palette')

getScheme()
schemeGenerator.addEventListener('click', getScheme)



function getScheme() {
    const inputValue = document.getElementById('color1').value.slice(1)
    const colorTheme = document.getElementById('color-theme').value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${inputValue}&mode=${colorTheme}&count=5`)
        .then(response => response.json())
        .then(data => {
            let colors = ''

            for (let hex of data.colors) {
                colors += `
                    <div class="color-container">
                        <div class="color" style="background-color: ${hex.hex.value}"></div>
                        <p>${hex.hex.value}</p>
                    </div>`
            }

            colorPalette.innerHTML = colors
            console.log(colors)
    })
}