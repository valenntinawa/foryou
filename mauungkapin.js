// Menambahkan WM Link
function link(){
  var link = document.createElement("div");
  link.classList.add("link");
  link.setAttribute("style", "position: fixed; z-index: 9999; bottom: 15px; left: 15px;");
  var body = document.querySelector("body");
  body.appendChild(link);

  var divLink = document.querySelector(".link");
  var aYT = document.createElement("a");
  aYT.setAttribute("href", "https://instagram.com/valenntinawa");
  aYT.setAttribute("style", "text-decoration: none; color: white; opacity: 0.25; display: block; font-size: 0.9em;");
  aYT.innerHTML = "bukaa yaaw";

  var aTT = document.createElement("a");
  aTT.setAttribute("href", "https://instagram.com/valenntinawa");
  aTT.setAttribute("style", "text-decoration: none; color: white; opacity: 0.25; display: block; font-size: 0.9em;");
  aTT.innerHTML = " dibukaaw";

  divLink.appendChild(aYT);
  divLink.appendChild(aTT);
}
// Menampilkan text blur
function txtBlur(elemen, time, txt) {
  setTimeout(function () {
    elemen.innerHTML = txt;
    elemen.style = "display: none;";
    setTimeout(function () {
      elemen.style = "display: block; animation: anm 1s;";
    }, 70);
  }, time);
}
