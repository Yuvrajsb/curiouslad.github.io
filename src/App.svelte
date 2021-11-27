<script>
  import Particles from "svelte-particles";
  import Navbar from "./components/Navbar.svelte";
  import Projects from "./Projects.svelte";
  let particlesUrl = "../particles.json";

  let particlesConfig = {
    background: {
      color: {
        value: "#000000",
      },
      position: "absolute",
      repeat: "no-repeat",
      size: "cover",
      padding: 0,
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
          enable: true,
          force: 10,
          smooth: 25
        }
        },
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        grab: {
          distance: 250,
        },
      },
    },
    particles: {
      color: {
        value: "#3ac2d4",
      },
      links: {
        color: {
          value: "#3ac2d4",
        },
        distance: 150,
        enable: true,
        warp: true,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        path: {},
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        speed: 1,
        spin: {},
        warp: true,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        animation: {
          speed: 3,
          minimumValue: 0.1,
        },
      },
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 1,
          max: 3,
        },
        animation: {
          speed: 20,
          minimumValue: 0.1,
        },
      },
    },
  };

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let onParticlesInit = (main) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
  };
</script>

<body>
  <Navbar />
  <section class="hero is-medium">
    
    <div id="particlesection" class="hero-body fullheight">
      
      <Particles
        id="tsparticles"
        options={particlesConfig}
        on:particlesLoaded={onParticlesLoaded}
        on:particlesInit={onParticlesInit}
      />
      <div class="title mtitle is-link containercustom">
        <h6><strong>&lt;CuriousLad&gt;</strong></h6>
      </div>
      
    </div>
  </section>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="subtitle is-link">Hello there! I am CuriousLad! This is my webpage where I display stuff I work on, as well as communities I like!
      </p>
    </div>
  </section>
  <Projects />
  
</body>
<!-- or -->

<!-- <Particles
	id="tsparticles"
	url="{particlesUrl}"
	on:particlesLoaded="{onParticlesLoaded}"
	on:particlesInit="{onParticlesInit}"
  /> -->
<style>
  #particlesection {
    padding: 0;
    background-color: black;
    
  }
  
  .containercustom {
    text-align: center;
    position: absolute;
    height: 150px;
    top: 50%;
    color: white;
    }
   
  .title {
    margin-left: 2rem;
    
  }
  .mtitle{
    font-size: 33%;
  }
  .subtitle {
    margin-left: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
  .fullheight{
    height: max-content;
  }
</style>
