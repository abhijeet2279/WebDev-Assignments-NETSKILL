let stopwatch = {
    elapsedTime: 0,
    intervalId: 0,
    
    start: function() {
      if (this.intervalId) return;
      this.intervalId = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    pause: function() {
      clearInterval(this.intervalId);
      this.intervalId = 0;
    }, 
    reset: function() {
      this.pause();
      this.elapsedTime = 0;
    }
  };
