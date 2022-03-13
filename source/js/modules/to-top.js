const initToTop = () => {
  function visibilityToggle() {
    if (window.pageYOffset >= 500) {
      document.getElementById('to-top').classList.add('to-top--visible');
    } else {
      document.getElementById('to-top').classList.remove('to-top--visible');
    }
  }

  function animate(_ref) {
    let timing = _ref.timing;
    let draw = _ref.draw;
    let duration = _ref.duration;
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      let progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  if (document.getElementById('to-top')) {

    document.getElementById('to-top').addEventListener('click', function (e) {
      e.preventDefault();
      let scroll = window.pageYOffset;
      let targetTop = 0;
      let scrollDiff = (scroll - targetTop) * -1;
      animate({
        duration: 500,
        timing: (timeFraction) =ю {
          return Math.pow(timeFraction, 4);
        },
        draw: (progress) => {
          let scrollNow = scroll + progress * scrollDiff;
          window.scrollTo(0, scrollNow);
        }
      });
    }, false);

    window.addEventListener('scroll', visibilityToggle);
    visibilityToggle();
  }
};

export {initToTop};
