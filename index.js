

function playsong(id){
    document.querySelector(".playing").classList.remove("playing")
    player.src = `https://www.youtube.com/embed/${id}?autoplay=1`
    document.getElementById(event.target.id).classList.add("playing")

}