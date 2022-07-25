// font awsome docs
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const style = {
    footer: {
        paddingBottom: '1rem',
        paddingTop: '1rem',
    },
    icon: {
        fontSize: '28px',
        padding: '2px',
        color: 'darkblue',
    }
}

function Footer() {
    return (
        <footer className="footer-area" style={style.footer} >
            <div className="container">
                <div className="d-flex justify-content-center flex-wrap">
                    <div className="social text-center">
                        <h5 className="text-uppercase">Follow me</h5>
                        <a href='https://github.com/camnb97'>
                            <FaGithub style={style.icon}></FaGithub>
                        </a>
                        <a href='https://www.linkedin.com/in/cameronbuss-webdev/'>
                            <FaLinkedin style={style.icon}></FaLinkedin>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;