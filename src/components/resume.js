const style = {
    h1: {
        padding: '1rem',
        fontSize: '34px',
    },
    li: {
        padding: '1px',
        fontSize: '19px',
        fontWeight: 'bold',
    },
    div: {
        paddingTop: '1.5rem',
        paddingLeft: '1.5rem',
    }
}

const href = 'https://docs.google.com/document/d/1WhK_KthKLtrstphqb6KtI4ap_srGzZZgel66Mk_6wSI/edit?usp=sharing';

function Resume() {
    return (
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <h1 class="card-title" style={style.h1} >Front-end Proficiencies:</h1>
                        <ul class="card-text">
                            <li style={style.li}>HTML</li>
                            <li style={style.li}>CSS</li>
                            <li style={style.li}>JavaScript</li>
                            <li style={style.li}>Bootstrap</li>
                            <li style={style.li}>React</li>
                            <li style={style.li}>Responsive design</li>
                        </ul>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <h1 class="card-title" style={style.h1}>Back-end Proficiencies:</h1>
                        <ul class="card-text">
                            <li style={style.li}>APIs</li>
                            <li style={style.li}>Node</li>
                            <li style={style.li}>Express</li>
                            <li style={style.li}>MySQL design</li>
                            <li style={style.li}>Sequelize</li>
                            <li style={style.li}>MongoDB</li>
                            <li style={style.li}>Mongoose</li>
                            <li style={style.li}>REST</li>
                            <li style={style.li}>GraphQL</li>
                        </ul>
                    </div>
                </div>
                <div style={style.div} >
                    <a href="https://docs.google.com/document/d/1WhK_KthKLtrstphqb6KtI4ap_srGzZZgel66Mk_6wSI/edit?usp=sharing" >
                        <button
                            type="button"
                            class="btn button primary-button text-uppercase"

                        >View Resume
                        </button>
                    </a>

                </div>


            </div>
        </div>

    );
}

export default Resume;