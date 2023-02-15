var body = document.body
var container = document.createElement("div")

container.innerHTML = `
<div id="div1" class="divs">
    <img id="img1" class="imgs" src="/images-s2/ada-lovelace.jpg" alt="Ada Lovelace">
    <h2>Ada Lovelace</h2>
</div>

<div id="div2" class="divs">
    <img id="img2" class="imgs" src="/images-s2/alan-turing.jpg" alt="Alan Turing">
    <h2>Alan Turing</h2>
</div>

<div id="div3" class="divs">
    <img id="img3" class="imgs" src="/images-s2/charles-babbage.jpg" alt="Charles Babbage">
    <h2>Charles Babbage</h2>
</div>

<div id="div4" class="divs">
    <img id="img4" class="imgs" src="/images-s2/steve-jobs.jpg" alt="Steve Jobs">
    <h2>Steve Jobs</h2>
</div>

<div id="div5" class="divs">
    <img id="img5" class="imgs" src="/images-s2/bill-gates.jpg" alt="Bill Gates">
    <h2>Bill Gates</h2>
</div>

<div id="div6" class="divs">
    <img id="img6" class="imgs" src="/images-s2/elon-musk.jpg" alt="Elon Musk">
    <h2>Elon Musk</h2>
</div>
`

body.appendChild(container)



//css? 
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.justifyContent = "space-around"