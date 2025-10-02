import Header from "../Header"
import Hero from "../Hero"

function Home() {

    const homeHeroImage: string="https://www.churchmotiongraphics.com/wp-content/uploads/2018/01/WorshipBackground.jpg"

    return(
        <>
            <Header />
            <Hero url={homeHeroImage} />
        </>
    )
}

export default Home