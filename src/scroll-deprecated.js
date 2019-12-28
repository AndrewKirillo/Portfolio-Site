// componentDidMount() {
//     window.addEventListener('wheel', this.throttle(this.handleScroll, 1000), {passive: false});
//   }

//   componentWillUnmount() {
//     window.removeEventListener('wheel', this.handleScroll);
//   }

  throttle = (fn, wait) => {
    var time = Date.now();
    return (e) => {
      if ((time + wait - Date.now()) < 0) {
        fn(e);
        time = Date.now() + 1000;
      } else {
        e.preventDefault();
      }
    }
  }

  // prevTime = new Date().getTime();

  handleScroll = (e) => {
    console.log(e);
    e.preventDefault();
    // var currTime = new Date().getTime();
    // var timeDiff = currTime - this.prevTime;
    // this.prevTime = currTime;
    // if (timeDiff > 40) {
      if (e.deltaY < 0) {
        window.scrollBy({
          behavior: 'smooth',
          top: -window.innerHeight,
          left: 0
        });
      } else if (e.deltaY > 0) {
        window.scrollBy({
          behavior: 'smooth',
          top: window.innerHeight,
          left: 0
        });
      }
    // }
    
    
  }