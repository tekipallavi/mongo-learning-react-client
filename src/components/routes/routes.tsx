import { Route, Routes } from "react-router-dom";
import Home from "../home/home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          {/*   <Route path="proposals" element={<Proposals />} />
            <Route path="notifications" element={<Notifications />} /> */}
        </Routes>
    )
}

export default AppRoutes;