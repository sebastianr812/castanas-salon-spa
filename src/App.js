import { Routes, Route } from "react-router-dom";

import Navigation from './components/navigation/navigation.component';
import Home from "./routes/home.component";
import Services from "./routes/services.component";
import About from "./routes/about.component";
import ContactUs from './routes/contact-us.component';
import NavigationTailwindUi from './components/navigation-tailwindui/navigation-tailwindui.component';
import Gallary from './routes/gallary.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationTailwindUi />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallary" element={<Gallary />} />

      </Route>

    </Routes>
  );
}

export default App;
