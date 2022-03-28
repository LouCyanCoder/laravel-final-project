import React, { useState, useEffect } from "react";
import AccommodationList from "./AccommodationList";
import FoodList from "./FoodList";
import TransportList from "./TransportList";
import ServiceList from "./ServiceList";

const OffersListed = () => {
    const [selected_accommodation, setSelectedAccommodation] = useState([]);
    const [selected_transport, setSelectedTransport] = useState([]);
    const [selected_food, setSelectedFood] = useState([]);
    const [selected_service, setSelectedService] = useState([]);

    const fetchAccommodation = async () => {
        const response = await fetch("/api/accomodation");
        const result = await response.json();
        result && setSelectedAccommodation(result);
        // console.log(result);
    };
    // console.log(selected_accommodation);

    const fetchTransport = async () => {
        const response = await fetch("/api/transport");
        const result = await response.json();
        result && setSelectedTransport(result);
        // console.log(result);
    };

    const fetchFood = async () => {
        const response = await fetch("/api/food");
        const result = await response.json();
        result && setSelectedFood(result);
        // console.log(result);
    };

    const fetchService = async () => {
        const response = await fetch("/api/service");
        const result = await response.json();
        result && setSelectedService(result);
        // console.log(result);
    };

    useEffect(() => {
        fetchAccommodation();
        fetchTransport();
        fetchFood();
        fetchService();
    }, []);

    return (
        <section className="offerslisted__container">
            <h2>Posted Offers</h2>
            <div>
                <h3>Accommodation</h3>
                {selected_accommodation.length ? (
                    selected_accommodation.map((accommodation, id) => (
                        <AccommodationList
                            key={id}
                            accommodation={accommodation}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div>
                <h3>Transport</h3>
                {selected_transport.length ? (
                    selected_transport.map((transport, id) => (
                        <TransportList key={id} transport={transport} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div>
                <h3>Food</h3>
                {selected_food.length ? (
                    selected_food.map((food, id) => (
                        <FoodList key={id} food={food} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div>
                <h3>Service</h3>
                {selected_service.length ? (
                    selected_service.map((service, id) => (
                        <ServiceList key={id} service={service} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
};

export default OffersListed;
