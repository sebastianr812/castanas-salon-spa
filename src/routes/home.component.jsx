import { Outlet } from "react-router-dom";

import HeroTailwindUi from '../components/hero-tailwindui/hero-tailwindui.component';
import ServicesPreviewTailwindUi from '../components/services-preview-tailwindui/services-preview-tailwindui.component';
import FooterTailwindUi from '../components/footer-tailwindui/footer-tailwindui.component';




export const Home = () => {
    return (
        <div className="w-full">
            <Outlet />
            {/* <ImageCarousel />
            <Hero />
            <ServicesPreview />
             */}
            <HeroTailwindUi />

            <ServicesPreviewTailwindUi />


            <FooterTailwindUi />


        </div>
    );
}

export default Home;