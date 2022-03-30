import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";

const FilterServices = ({ selection, setSelection }) => {
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
                    service: true,
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

    useEffect(() => {
        setSelection({
            all: true,
            accommodation: true,
            food: true,
            service: true,
        });
    }, []);

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
                    label="Service"
                    checked={selection.service}
                    name="service"
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
};

export default FilterServices;
