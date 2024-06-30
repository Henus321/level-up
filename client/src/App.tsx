import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesStructure } from "./config";

import Layout from "./components/layout";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import AuthRootPage from "./pages/auth";
import FriendsPage from "./pages/friends";
import GoalsRootPage from "./pages/goals";

const App = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<Layout />}>
                    <Route path={RoutesStructure.Auth.index}>
                        <Route path="" index element={<AuthRootPage />} />
                        <Route path=":type" element={<AuthRootPage />} />
                    </Route>
                    <Route
                        path={RoutesStructure.Friends.index}
                        element={<FriendsPage />}
                    />
                    <Route
                        path={RoutesStructure.Home.index}
                        element={<HomePage />}
                    />
                    <Route path={RoutesStructure.Goals.index}>
                        <Route index element={<GoalsRootPage />} />
                        <Route path={":userId"} element={<GoalsRootPage />} />
                        <Route path="one/:goalId" element={<GoalsRootPage />} />
                    </Route>

                    <Route
                        path={RoutesStructure.Profile.index}
                        element={<ProfilePage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
