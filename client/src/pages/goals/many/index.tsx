import { Link } from "react-router-dom";
import { RoutesStructure } from "../../../config";

import "./index.scss";

type ManyPageProps = {
    userId: string | null;
};

const ManyPage = ({ userId }: ManyPageProps) => {
    if (userId) {
        // fetch some user data
    } else {
        // fetch account owner data + allow create/update/delete
    }

    return (
        <div className="goals-many">
            <h3>Many Goals Page of {userId ? userId : "account owner"}</h3>

            <Link to={RoutesStructure.Goals.one + "/1"}>
                Navigate to goal 1
            </Link>
            <Link to={RoutesStructure.Goals.one + "/2"}>
                Navigate to goal 2
            </Link>

            <Link to={RoutesStructure.Goals.index}>Navigate to my goals</Link>
            <Link to={RoutesStructure.Goals.index + "/user1"}>
                Navigate to goals of user1
            </Link>
            <Link to={RoutesStructure.Goals.index + "/user2"}>
                Navigate to goals of user2
            </Link>
        </div>
    );
};

export default ManyPage;
