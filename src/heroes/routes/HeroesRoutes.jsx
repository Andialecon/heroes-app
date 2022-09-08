
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../design/components/navbar/Navbar";
import { MarvelPage, DcPage, HeroPage, InicioPage } from "../pages";



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="inicio" element={<InicioPage/>} />
                <Route path="marvel" element={<MarvelPage/> } />
                <Route path="dc" element={ <DcPage /> } />
                <Route path="heroe" element={<HeroPage />} />
                <Route path="/*" element={<Navigate to="/inicio" />} />
            </Routes>
        </>
    )
}
