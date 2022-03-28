import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const FilterServices = () => {
    const [selected_accommodation, setSelectedAccommodation] = useState(null);

    const fetchAccommodation = async () => {
        const response = await fetch("/api/accomodation");
        const result = await response.json();
        result && setSelectedAccommodation(result);
        // console.log(result);
    };
    console.log(selected_accommodation);

    useEffect(() => {
        fetchAccommodation();
    }, []);

    const handleAccommodation = (e) => {
        const val = e.target.value;
        if (val === Accommodation) {
        }
    };

    return (
        <div>
            <Form className="nav_filter">
                <Form.Check
                    type="switch"
                    label="All"
                    value="All"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Accommodation"
                    value="Accommodation"
                    name="services"
                    onClick={handleAccommodation}
                />
                <Form.Check
                    type="switch"
                    label="Food"
                    value="Food"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Lawyer"
                    value="Lawyer"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Administration"
                    value="Administration"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Translation"
                    value="Translation"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Psychology"
                    value="Psychology"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Education"
                    value="Education"
                    name="services"
                />
                <Form.Check
                    type="switch"
                    label="Mentoring"
                    value="Mentoring"
                    name="services"
                />
            </Form>
        </div>
    );
};

export default FilterServices;
