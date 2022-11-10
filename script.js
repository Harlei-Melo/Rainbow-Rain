function rain() {
      let amount = 250;
      let body = document.querySelector('body');
      let i = 0;
      while (i < amount) {
        let drop = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
    
    
    
        drop.style.width = size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 'S';
        drop.style.animationDuration = 1 + duration + 'S';
    
        body.appendChild(drop);
        i++
      }
    }
    
    rain();