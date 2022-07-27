// import projectimage1 from './img/';
//pass in the image folder 
import image from './img/BlackJackSS.png';
import image2 from './img/Screenshot-rn-password-gen.png';
import image3 from './img/DDscreenshot.png';
import image4 from './img/screenshot2_deployed.png';
import image5 from './img/NoteTakerSS.png';
import image6 from './img/PassengerCounterSS.png';

const style = {
  h1: {
    fontSize: '26px',
  }
}

function Projects() {
  return (
    <section class="project-area">
      <div class="container">
        <div class="project-title pb-5">
          <h1 class="text-uppercase title-h1" style={style.h1} >Recent Projects</h1>
          <h1 class="text-uppercase title-h1"></h1>
        </div>
        <div class="row grid">
          <div class="col-lg-4 col-md-6 col-sm-12 element-item ">
            <div class="our-project">
              <div class="img">
                <a
                  class="test-popup-link"
                  href="https://camnb97.github.io/HW3_PasswordGenerator/"
                >
                  <img
                    src={image2}
                    alt="portfolio-1"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Password Generator</h4>
                <span class="text-secondary"
                >generates a random password</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 element-item ">
            <div class="our-project">
              <div class="img">
                <a
                  class="test-popup-link"
                  href="https://camnb97.github.io/PlayBlackJack/"
                >
                  <img
                    src={image}
                    alt="portfolio-1"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Blackjack</h4>
                <span class="text-secondary">Simple JavaScript app</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 element-item ">
            <div class="our-project">
              <div class="img">
                <a
                  class="test-popup-link"
                  href="https://pure-harbor-04320.herokuapp.com/"
                >
                  <img
                    src={image4}
                    alt="portfolio-1"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Text Editor PWA</h4>
                <span class="text-secondary"
                >text editor that can be installed and used offline</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 element-item ">
            <div class="our-project">
              <div class="img">
                <a
                  class="test-popup-link"
                  href="https://owenmg.github.io/Dinner_Decider/"
                >
                  <img
                    src={image3}
                    alt="portfolio-1"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Dinner Decider</h4>
                <span class="text-secondary"
                >An easy app for choosing a meal to cook</span
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 element-item ">
            <div class="our-project">
              <div class="img">
                <a class="test-popup-link" href="https://note-taker542.herokuapp.com/">
                  <img
                    src={image5}
                    alt="portfolio-1"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Note Taker</h4>
                <span class="text-secondary">Easy way to keep notes</span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 element-item ">
            <div class="our-project">
              <div class="img">
                <a class="test-popup-link" href="https://camnb97.github.io/Passenger_Counter/">
                  <img
                    src={image6}
                    alt="portfolio-1"
                    class="img-fluid"
                  />
                </a>
              </div>
              <div class="title py-4">
                <h4 class="text-uppercase">Passenger Counter</h4>
                <span class="text-secondary">Keep track of passengers entering public transit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;