import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccommodationList = ({ element }) => {

    const navigate = useNavigate();
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
                        <p>{(element.created_at.slice(0, 10))}</p>
                    </div>

                    <div className="offerslisted__listitem--buttons">
                        <Button variant="outlined" href={"/accommodation/"+element.id+"/edit"}>Edit</Button>
                        <Button variant="contained" color="error"><a href="#">Delete</a></Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default AccommodationList;
