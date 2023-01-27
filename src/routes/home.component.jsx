import { Outlet } from "react-router-dom";
import Hero from "../components/hero/hero.component";
import ServicesPreview from "../components/services-preview/services-preview.component";

export const Home = () => {
    return (
        <div className="w-full">
            <Outlet />
            <Hero />
            <ServicesPreview />


        </div>
    );
}

export default Home;