function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const logScroll = ()=>{
  console.log("Scroll event");
}

window.addEventListener("scroll", throttle(logScroll, 1000))
