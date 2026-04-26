import Slider from "../components/Slider"
import Header from "./../components/Header"
import Parse from "../utils/language/main"
import { useEffect } from 'react';
import data from "./../data/styles/slider.json"

export default function Home() {
    useEffect(() => {
        Parse();
    }, []);
    return (
        <>
            <Header />
            <Slider data={data}/>
        </>
    )
}