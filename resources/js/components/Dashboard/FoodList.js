import React from "react";
import { Button } from "@mui/material";

const FoodList = ({ food }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--type">
                        <p>Food Name: {food.name}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>Address: {food.address}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>Description: {food.description}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>Day: {food.day}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p>Status: {food.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time: {food.created_at}</p>
                    </div>

                    <Button variant="outlined">Options</Button>
                    <Button variant="outlined">Details</Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default FoodList;
