const style = {
    h1: {
        padding: '1rem',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    }
}

function Contact() {
    return (
        <div>
            <h1 style={style.h1}>Contact Me</h1>
            <section class="form-submit">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button
                    type="button"
                    class="btn button primary-button text-uppercase"
                >
                    submit
                </button>
                {/* <a href="camnb97@gmail.com" >
                    
                </a> */}
                <Mailto email="camnb97@gmail.com" subject="Hello" body="Hello world!">
                    <button
                        type="button"
                        class="btn button primary-button text-uppercase"

                    >email me
                    </button>
                </Mailto>
            </section>
        </div>
    );
}

function Mailto({ email, subject, body, ...props }) {
    return (
        <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
        </a>
    );
}

export default Contact;