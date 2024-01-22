import KeenSlider from 'keen-slider'

const adventagesSlider = () => {
  function ThumbnailPlugin(main) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx) {
        slider.slides[idx].classList.add("active")
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            main.moveToIdx(idx)
          })
        })
      }

      slider.on("created", () => {
        addActive(slider.track.details.rel);
        addClickEvents();
        if(main.size>=713 && main.size<1110) {
          document.querySelector('.advantages-slider').style.width = '300px';
          main.update();
        } else if(main.size===1110) {
          document.querySelector('.advantages-slider').style.width = '523px';
          main.update();
        }
        main.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  };

  var slider = new KeenSlider(
    ".advantages-slider__images",
    {
      slides: {
        spacing: 16
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: {
            perView: 3
          }
        }
      },
    }
  );

  var thumbnails = new KeenSlider(
    ".advantages-slider__titles",
    {
      initial: 0,
      mode: "snap",
      slides: {
        perView: "3"
      },

    },
    [ThumbnailPlugin(slider)]
  )
}

export default adventagesSlider;
