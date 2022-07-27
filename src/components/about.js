//make a variable for the image
import image from '../img/Profile Pic.jpeg'
const style = {
    imageArea: {
        padding: '1rem',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        borderRadius: '55px',
        maxWidth: '200px',
    }
}

function About() {
    return (
        <div>
            <section class="about-area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-12" style={style.imageArea}>
                            <div class="about-image">
                                <img
                                    src={image}
                                    style={style.imageStyle}
                                    alt="About me"
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 about-title">
                            <h2 class="text-uppercase pt-5">
                                <span>Let me</span>
                                <span>introduce</span>
                                <span>myself</span>
                            </h2>
                            <div class="paragraph py-4 w-80">
                                <p class="para">
                                    Hello! My name is Cameron Buss, thank you for showing interest in
                                    my portfolio. I have been a web development student for about
                                    six months now, and I am so excited to continue learning. I have extensively learned to create with HTML, JavaScript and CSS. My
                                    work experience is limited, but I have a few projects I am
                                    proud to show off. Some have been completed on my own, and others while participating in the Univeristy of Washington
                                    coding bootcamp. While in the bootcamp, I have successfully worked in groups to complete large projects while learning complex techniques including, but not limited to, Node.js, Express.js, MongoDB.
                                </p>
                                <p class="para">
                                    In the future I hope to expand my knowledge by working as a full stack developer at a well established company. I enjoy designing UX/UI to create a flawless user experience, as well as working on functionality in the back-end.
                                </p>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;