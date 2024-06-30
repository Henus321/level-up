import { useNavigate } from "react-router-dom";

type OnePageProps = {
    goalId: string;
};

const OnePage = ({ goalId }: OnePageProps) => {
    const myId = "";
    const createdById = "";

    const navigate = useNavigate();

    if (myId === createdById) {
        // allow create/update/delete(Modal)
    } else {
        // allow like/watch
    }

    return (
        <div>
            <h3>One Goal Page id={goalId}</h3>

            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default OnePage;
