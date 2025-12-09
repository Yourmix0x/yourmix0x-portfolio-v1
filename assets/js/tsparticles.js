document.addEventListener("DOMContentLoaded", async function () {
  // Detect seasonal mode: Dec 1 - Jan 5 or ?seasonal=true
  const isSeasonalWindow = () => {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();
    if (month === 11 && date >= 1) return true;
    if (month === 0 && date <= 5) return true;
    return false;
  };

  const seasonalParam = new URLSearchParams(window.location.search).get(
    "seasonal"
  );
  const isHoliday =
    (seasonalParam && seasonalParam.toLowerCase() === "true") ||
    isSeasonalWindow();

  const snowOptions = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#9ca3af",
        },
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 5,
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 3.5,
        direction: "bottom",
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  const defaultOptions = {
    fullScreen: {
      enable: true,
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 4,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#111111",
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 6,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 160,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: "#171717",
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 1,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  // Initialize tsParticles
  const options = isHoliday ? snowOptions : defaultOptions;

  await tsParticles.load("tsparticles", options);
});
