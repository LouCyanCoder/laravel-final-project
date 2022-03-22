import React from "react";
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <div className="aboutUs__container">
                <h3>Why do we do this?</h3>
                <p></p>
                <Button
                    size="large"
                    variant="contained"
                    color="success"
                >
                    Read about us
                </Button>
            </div>
        </section>
    );
};

export default AboutUs;
