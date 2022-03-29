import React from "react";
import { Button } from "@mui/material";

const FoodList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--food">
                    <div className="offerslisted__listitem--type">
                        <p><strong>Food Name:</strong></p>
                        <p>{element.name}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p><strong>Address:</strong></p>
                        <p>{element.address}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p><strong>Description:</strong></p>
                        <p>{element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p><strong>Day:</strong></p>
                        <p>{element.day}</p>
                    </div>

                    <div className="offerslisted__listitem--type">
                        <p><strong>Status:</strong></p>
                        <p>{element.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p><strong>Offer Created Time:</strong></p>
                        <p>{element.created_at}</p>
                    </div>

                    <div className="offerslisted__listitem--buttons">
                        <Button variant="outlined"><a href="#">Edit</a></Button>
                        <Button variant="contained" color="error"><a href="#">Delete</a></Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default FoodList;
