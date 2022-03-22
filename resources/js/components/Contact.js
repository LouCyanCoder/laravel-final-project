import React from "react";
import ReactDOM from "react-dom";

const Contact = () => {
    return (
        <section className="contactForm">
            <div className="contactForm__title">
                <h2>Any questions? Get in touch with us</h2>
                <p></p>
            </div>
            <form action="" method="post">
                
                <div className="contactForm__textarea">
                    <textarea placeholder="Message"></textarea>
                </div>

                <div className="contactForm__text">
                    <input type="text" name="email" placeholder="Email Address"></input>
                    <input type="text" name="name" placeholder="Full Name"></input>
                </div>
                <button>Send</button>
            </form>
        </section>
    );
};

export default Contact;

// ReactDOM.render(<Contact />, document.getElementById("root2"));
