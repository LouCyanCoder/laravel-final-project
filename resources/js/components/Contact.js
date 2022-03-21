import React from "react";
import ReactDOM from "react-dom";

const Contact = () => {
    return (
        <section className="contactForm">
            <div className="contactForm__title">
                <h3>Any questions? Get in touch with us</h3>
                <p></p>
            </div>
            <form action="" method="post">
                <textarea></textarea>
                <input type="text" name="email"></input>
                <input type="text" name="name"></input>
                <button>Send</button>
            </form>
        </section>
    );
};

export default Contact;

// ReactDOM.render(<Contact />, document.getElementById("root2"));
