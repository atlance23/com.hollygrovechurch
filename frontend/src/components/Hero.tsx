interface heroProps {
    url: string
}

function Hero(props: heroProps) {
    return (
        <>
            <section className="heroSection" style={{backgroundImage: `url(${props.url})`}}>

            </section>
        </>
    )
}

export default Hero