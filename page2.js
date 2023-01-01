var html =
  '<h2>Pesan Berhasil Terkirim</h2><h3>Jangan lupa kirim pap yaa😉</h3><h4 class="timer">10</h4><p>Dibuat Oleh :</p><a href="https://instagram.com/valenntinawa" class="yt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" height="30px" alt="" srcset="" />Valennl</a><div class="banner"><p>heloow dek</p><a href="https://instagram.com/valenntinawa"><img src="https://instagram.com/valenntinawa alt="" /></a></div>';

document.querySelector("body").innerHTML += html;

timer = document.querySelector(".timer");
var time = timer.innerHTML;

function timeku(linkku) {
  timer.innerHTML = time;
  console.log(time);
  if (time == 0) {
    window.location.replace(linkku);
    // console.log(linkku);
  } else {
    time--;
    setTimeout(function () {
      timeku(linkku);
    }, 1000);
  }
}
