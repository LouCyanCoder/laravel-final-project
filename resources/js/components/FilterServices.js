import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const FilterServices = ({ selection, setSelection }) => {
    const [selected_accommodation, setSelectedAccommodation] = useState(null);
    const [selected_food, setSelectedFood] = useState(null);
    const [selected_services, setSelectedServices] = useState(null);

    const fetchAccommodation = async () => {
        const response = await fetch("/api/accomodation");
        const result = await response.json();
        result && setSelectedAccommodation(result);
        // console.log(result);
    };

    const fetchFood = async () => {
        const response = await fetch("/api/food");
        const result = await response.json();
        result && setSelectedFood(result);
        // console.log(result);
    };

    const fetchServices = async () => {
        const response = await fetch("/api/services");
        const result = await response.json();
        result && setSelectedServices(result);
        // console.log(result);
    };

    useEffect(() => {
        fetchAccommodation();
        fetchFood();
        fetchServices();
    }, []);

    const handleAccommodation = (e) => {
        const val = e.target.value;
        if (val === setSelectedAccommodation) {
        }
        console.log(val);
    };

    const handleChange = (e) => {
        if (e.target.name === "all") {
            if (selection.all) {
                return setSelection({
                    [e.target.name]: e.target.checked,
                });
            } else {
                return setSelection({
                    all: true,
                    accommodation: true,
                    food: true,
                    lawyer: true,
                    administration: true,
                    translation: true,
                    psychology: true,
                    education: true,
                    mentoring: true,
                });
            }
        }

        if (selection.all && e.target.name !== "all" && !e.target.checked) {
            return setSelection({
                ...selection,
                [e.target.name]: e.target.checked,
                all: false,
            });
        }
        return setSelection({
            ...selection,
            [e.target.name]: e.target.checked,
        });
    };

    console.log(selection);
    return (
        <div>
            <Form className="nav_filter">
                <Form.Check
                    type="switch"
                    label="All"
                    checked={selection.all}
                    name="all"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Accommodation"
                    checked={selection.accommodation}
                    name="accommodation"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Food"
                    checked={selection.food}
                    name="food"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Lawyer"
                    checked={selection.lawyer}
                    name="lawyer"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Administration"
                    checked={selection.administration}
                    name="administration"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Translation"
                    checked={selection.translation}
                    name="translation"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Psychology"
                    checked={selection.psychology}
                    name="psychology"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Education"
                    checked={selection.education}
                    name="education"
                    onChange={handleChange}
                />
                <Form.Check
                    type="switch"
                    label="Mentoring"
                    checked={selection.mentoring}
                    name="mentoring"
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
};

export default FilterServices;
