import Dashboard from "./admin/Dashboard";
import "./index.css"
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    )
}