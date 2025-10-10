import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="container mx-auto py-4">
                <Outlet /> {/* Nested routes shu joyda render bo‘ladi */}
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
