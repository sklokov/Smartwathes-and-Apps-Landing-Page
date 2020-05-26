/*
function playPause() {
    let mediaPlayer = document.getElementById('buttonJs');
    if (mediaPlayer.paused) {
        mediaPlayer.play(); 
        $('.pause-btn').show();
        $('.play-btn').hide();
    } else {
        mediaPlayer.pause(); 
        $('.play-btn').show();
        $('.pause-btn').hide();
    }
}
*/

let videoPlayer = document.getElementById('buttonJs');
let videoPath = "https://youtu.be/-FYBMk3YYf8"
buttonJs.onclick = () => {
    window.open(videoPath, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');"
    
  }

