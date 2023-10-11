import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App.tsx";
import HomePage from "../../features/home/HomePage.tsx";
import Catalog from "../../features/catalog/Catalog.tsx";
import ProductDetails from "../../features/catalog/ProductDetails.tsx";
import AboutPage from "../../features/about/AboutPage.tsx";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage />},
            { path: 'catalog', element: <Catalog />},
            { path: 'catalog/:id', element: <ProductDetails />},
            { path: 'about', element: <AboutPage />},
            { path: 'contact', element: <HomePage />}
        ]
    }
])