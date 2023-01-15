function open_card() {
    document.getElementById('front').className = 'open-card';
    setTimeout(() => {
      const audioElement = document.getElementById("myAudio");
      audioElement.play();
    }, 500)
  }
  
  function close_card() {
    document.getElementById('front').className = '';
    const audioElement = document.getElementById("myAudio");
      audioElement.pause();
      audioElement.currentTime = 0;
  }