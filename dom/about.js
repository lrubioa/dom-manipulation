var body = document.body
body.style.fontFamily = "Arial, sans-serif"; 

var nName = document.getElementById("nickname")
nName.textContent = "Luisa";

var favs = document.getElementById("favorites")
favs.textContent = "Rain";

var homeT = document.getElementById("hometown")
homeT.textContent = "Buckeye";

var me = document.createElement("img")
me.src = "/images-s2/lllll.png"
me.style.width = "250px"
me.style.height = "300px"

body.appendChild(me)