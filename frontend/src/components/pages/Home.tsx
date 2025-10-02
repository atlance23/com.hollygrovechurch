import Header from "../Header"
import Hero from "../Hero"

function Home() {

    const homeHeroImage: string="https://github.com"

    return(
        <>
            <Header />
            <Hero url={homeHeroImage} />
        </>
    )
}

export default Home