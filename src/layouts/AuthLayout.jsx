import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Outlet /> {/* Login va Register shu yerda chiqadi */}
        </div>
    );
};

export default AuthLayout;
