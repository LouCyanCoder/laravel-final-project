import React from "react";
import ReactDOM from "react-dom";

const Contact = () => {
    return (
        <section>
            <div>
                <h3>Any questions? Get in touch with us</h3>
                <p>lorem</p>
            </div>
            <div>
                <textarea></textarea>
                <input type="text" name="email"></input>
                <input type="text" name="name"></input>
                <button>Send</button>
            </div>
        </section>
    );
};

export default Contact;

// ReactDOM.render(<Contact />, document.getElementById("root2"));
