import Slider from "../components/Slider"
import Header from "./../components/Header"
import Parse from "../utils/language/main"
import { GetDataFile } from "../utils/language/lexer"
import { useEffect } from 'react';

export default function Home() {
    const data = GetDataFile("/data/styles/slider.json");
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