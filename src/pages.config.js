import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AboutMe": AboutMe,
    "Portfolio": Portfolio,
    "Services": Services,
    "Tools": Tools,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};