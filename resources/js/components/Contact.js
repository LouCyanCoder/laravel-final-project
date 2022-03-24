import React from "react";
import ReactDOM from "react-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dashboard from "./Dashboard/Dashboard";

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

                    <TextField id="filled-basic" label="Full Name" variant="filled" name="name" />
                    <TextField id="filled-basic" label="Email Adress" variant="filled" name="email" />

                <Button
                    size="large"
                    variant="contained"
                    color="success"
                    className=".contactForm__text--button"
                    >
                    Send
                </Button>
                
                </div>
                
            </form>

            <Dashboard />
        </section>
    );
};

export default Contact;

// ReactDOM.render(<Contact />, document.getElementById("root2"));
