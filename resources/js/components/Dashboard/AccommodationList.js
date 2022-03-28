import React from "react";
import { Button } from "@mui/material";

const AccommodationList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--accommodation">
                    <div className="offerslisted__listitem--type">
                        <p><strong>Type:</strong></p>
                        <p>{element.type}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p><strong>Description:</strong></p>
                        <p>{element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p><strong>Offer Created Time:</strong></p>
                        <p>{element.created_at}</p>
                    </div>

                    <div className="offerslisted__listitem--buttons">
                        <Button variant="outlined">Update</Button>
                        <Button variant="contained" color="error">Delete</Button>
                    </div>
                   
                </article>
            </div>
        </div>
    );
};

export default AccommodationList;
