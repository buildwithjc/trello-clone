import {Route, Routes} from "react-router-dom";

import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Board from "../pages/BoardPage";
import NotFound from "../pages/NotFoundPage";
import Dashboard from "../pages/DashboardPage";
import DashboardLayout from "../layouts/DashboardLayout";

function Router() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/board/:boardId" element={<Board />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;