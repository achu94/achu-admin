import { createMedia } from "@artsy/fresnel";
import Navbar from "./Navbar/Navbar";

const AppMedia = createMedia({
    breakpoints: {
        mobile: 320,
        tablet: 768,
        computer: 992,
        largeScreen: 1200,
        widescreen: 1920
    }
});

const mediaStyles = AppMedia.createMediaStyle();
const { MediaContextProvider } = AppMedia;

const leftItems = [
    { as: "a", content: "General", key: "home", href: "/" },
    { as: "a", content: "Products", key: "products", href: '/products' },
    { as: "a", content: "Galerie", key: "galerie", href: '/galerie' },
    { as: "a", content: "Referenz", key: "referenz", href: '/referenz' },
    { as: "a", content: "Kontakt", key: "kontakt", href: '/kontakt' },
];
const rightItems = [
    { as: "a", content: "Konto", key: "konto", href:"/konto" },
    { as: "a", content: "Logout", key: "logout", href:"/logout" }
];

function Layout(props) {


    return (
        <>
        <style>{mediaStyles}</style>

    <MediaContextProvider>
        <Navbar leftItems={leftItems} rightItems={rightItems}>
            <main>{props.children}</main>
        </Navbar>
    </MediaContextProvider>
        </>
    )

}

export default Layout;