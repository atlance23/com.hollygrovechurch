import Slider from "../components/Slider"
import Header from "./../components/Header"
import data from "./../data/styles/slider.json"

export default function Home() {
    return (
        <>
            <Header />
            <Slider data={data}/>
        </>
    )
}