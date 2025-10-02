interface heroProps {
    url: string
}

function Hero(props: heroProps) {
    return (
        <>
            <section style={{backgroundImage: `url(${props.url})`}}>

            </section>
        </>
    )
}

export default Hero