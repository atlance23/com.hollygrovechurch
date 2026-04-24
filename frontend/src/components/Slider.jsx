export default function Slider({data}) {
    const slideCount = data.length;
    const pauseTime = 2.5; // seconds
    const moveTime = 1;  // seconds
    const totalTime = (pauseTime + moveTime) * slideCount;

    // Generate the keyframes string dynamically
    let keyframes = '';
    for (let i = 0; i <= slideCount; i++) {
        const startPause = (i * (pauseTime + moveTime) / totalTime) * 100;
        const endPause = ((i * (pauseTime + moveTime) + pauseTime) / totalTime) * 100;
        
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
                settings: { hasHeading, hasSubheading, ctaButton }, // Corrected nesting
                imageUri,
                headingContent,
                subheadingContent,
                ctaButtonText
            }) => (
                <div 
                    key={slideId}
                    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUri})`}} 
                    className="slide"
                >
                    {/* Heading Logic */}
                    {hasHeading && headingContent && (
                        <h2 className="slideHeading">
                            {headingContent}
                        </h2>
                    )}
                    {/* Subheading Logic */}
                    {hasSubheading && subheadingContent && (
                        <h3 className="slideSubHeading">
                            {subheadingContent}
                        </h3>
                    )}

                    {/* CTA Button Logic */}
                    {ctaButton && ctaButtonText && (
                        <button 
                        style={{ 
                            
                        }} 
                        className="slideCtaBtn"
                        >
                            {ctaButtonText}
                        </button>
                    )}
                </div>
            ))}
        </>
    )
}