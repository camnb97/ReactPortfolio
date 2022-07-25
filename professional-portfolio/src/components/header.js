import Nav from './nav';
//import an image as abackground
import image from './img/Cloudy-Sky-Thin.png';

// const style = {
//     
//     img: {
//         width: '100',
//     }
// }

const style = {
    h1: {
        paddingLeft: '1rem',
        paddingTop: '1rem',
        // padding: '',
    },
    p: {
        paddingLeft: '1rem',
        fontSize: '20px',
    },
    nav: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
}

function Header() {
    return (
        <header className='App-header' >
            <section>
                <h1 style={style.h1} >Cameron Buss</h1>
                <p style={style.p} >Full-Stack Developer</p>
            </section>
            <section style={style.nav} >
                <Nav></Nav>
            </section>


        </header>
    );
}

export default Header;