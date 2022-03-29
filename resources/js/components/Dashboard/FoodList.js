import React from "react";
import { Button } from "@mui/material";

const FoodList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--type">
                        <p>Food Name: {element.name}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>Address: {element.address}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>Description: {element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>Day: {element.day}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>Status: {element.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time: {element.created_at}</p>
                    </div>

                    <Button variant="outlined"><a href="#">Edit</a></Button>
                    <Button variant="outlined"><a href="#">Delete</a></Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default FoodList;
