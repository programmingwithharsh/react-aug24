import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

const EditUser = () => {
    const navigate = useNavigate(); // useNavigate functional component hook

    const goBack = () => {
        navigate("/users");
    }

    const goToUsers = () => {
        navigate("/users");
    }

    const goToWelcome = () => {
        navigate("/");
    }

    const { id } = useParams();
    return (<div>
        <h1>Edit user {id}</h1>
        <button className="btn btn-primary" onClick={goBack}>Go Back</button>
        <Button name="OK" onClick={goToUsers} />
        <Button name="Cancel" onClick={goToWelcome} />
    </div>);
}

export default EditUser;