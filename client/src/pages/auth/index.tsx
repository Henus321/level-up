import { useParams } from "react-router-dom";

import LoginPage from "./login";
import RegisterPage from "./register";

const AuthRootPage = () => {
    const { type = "" } = useParams();

    // с :type - регистрация
    // без :type - логин
    if (type === "register") {
        return <RegisterPage />;
    } else {
        return <LoginPage />;
    }
};

export default AuthRootPage;
