import React from "react";

const FilterServices = () => {
    return (
        <div>
            <input type="radio" value="Accommodation" name="services" />{" "}
            Accommodation
            <input type="radio" value="Food" name="services" /> Food
            <input type="radio" value="Lawyer" name="services" /> Lawyer
            <input type="radio" value="Administration" name="services" />{" "}
            Administration
            <input type="radio" value="Translation" name="services" />{" "}
            Translation
            <input type="radio" value="Psychology" name="services" /> Psychology
            <input type="radio" value="Education" name="services" /> Education
            <input type="radio" value="Mentoring" name="services" /> Mentoring
        </div>
    );
};

export default FilterServices;
