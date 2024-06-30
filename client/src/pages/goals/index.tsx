import { useParams } from "react-router-dom";

import OnePage from "./one";
import ManyPage from "./many";

const GoalsRootPage = () => {
    const { goalId = "", userId = null } = useParams();

    // с :userId - все списки целей какого-либо пользователя
    // без :userId - все списки целей владельца аккаунта
    // с one/:goalId - конкретный список целей
    if (!!goalId) {
        return <OnePage goalId={goalId} />;
    } else {
        return <ManyPage userId={userId} />;
    }
};

export default GoalsRootPage;
