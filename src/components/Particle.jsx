import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Particle(){
  const optionsVar = {
    "fullScreen": {
        "enable": true,
        "zIndex": -1,
    },
    "fpsLimit": 120,
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "white",
            "animation": {
                "enable": false,
                "speed": 20,
                "sync": false
            }
        },
        "opacity": {
            "value": 0.5
        },
        "size": {
            "value": {
                "min": 0.1,
                "max": 3
            }
        },
        "links": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "none",
            "outModes": {
                "default": "out"
            }
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "repulse"
            },
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100
            },
            "push": {
                "quantity": 4
            }
        }
    },
    "detectRetina": true,
    
}

	const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

	return(
		<Particles
			id="tsparticles"
				init={particlesInit}
				Loaded={particlesLoaded}

				options={
				  optionsVar
				}



		/>
		)
}

export default Particle