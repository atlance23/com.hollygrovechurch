export default function Slider({data}) {
    const slideCount = data.length;
    const pauseTime = 2; // seconds
    const moveTime = 1;  // seconds
    const totalTime = (pauseTime + moveTime) * slideCount;

    // Generate the keyframes string dynamically
    let keyframes = '';
    for (let i = 0; i <= slideCount; i++) {
        const startPause = (i * (pauseTime + moveTime) / totalTime) * 100;
        const endPause = ((i * (pauseTime + moveTime) + pauseTime) / totalTime) * 100;
        const moveEnd = ((i + 1) * (pauseTime + moveTime) / totalTime) * 100;
        
        const distance = i === slideCount ? 0 : -(i * 100);
        
        keyframes += `
            ${startPause}% { transform: translateX(${distance}vw); }
            ${endPause}% { transform: translateX(${distance}vw); }
        `;
    }

    return (
        <>
            <style>
                {`
                    @keyframes dynamicSlide {
                        ${keyframes}
                    }
                    .sliderAnimation {
                        display: flex;
                        animation: dynamicSlide ${totalTime}s infinite;
                    }
                `}
            </style>
            <div 
            className="sliderContainer"
            style={{
                '--slide-count': slideCount,
                display: 'flex',
                width: `calc(${slideCount} * 100vw)`
            }}
            >
                <div className="sliderAnimation">
                    {mapSlidesObj(data)}
                </div>
            </div>
        </>
    )
}

function mapSlidesObj(dataObj) {
    if (!dataObj || !Array.isArray(dataObj)) return null;
    
    return (
        <>
            {dataObj.map(({
                slideId,
                hasHeading,
                hasSubheading,
                ctaButton,
                isCentered,
                hasBackgroundImage,
                imageUri,
                headingContent,
                subheadingContent
            }) => (
                <div 
                key={slideId}
                style={{
                    backgroundImage: `url(${imageUri})`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }} 
                className="slide"
                >
                    <h2 style={{
                        color: "var(--text-secondary-color)",
                        fontFamily: "var(--heading-font)",
                        }}>{hasHeading ? headingContent : ""}</h2>
                </div>
            ))}
        </>
    )
}