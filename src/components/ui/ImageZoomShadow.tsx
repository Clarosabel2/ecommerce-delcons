import React, { useRef, useState } from "react";

const ImageZoomShadow = ({ src, alt, className }) => {
    const [shadow, setShadow] = useState("0px 0px 10px rgba(0,0,0,0.4)");
    const [scale, setScale] = useState(1);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!imgRef.current) return; // <-- chequeo que no sea null

        const rect = imgRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const offsetX = (x - centerX) / centerX;
        const offsetY = (y - centerY) / centerY;

        const shadowX = -offsetX * 20;
        const shadowY = -offsetY * 20;

        setShadow(`${shadowX}px ${shadowY}px 15px rgba(0,0,0,0.6)`);
        setScale(1.1);
    };

    const handleMouseLeave = () => {
        setShadow("0px 0px 10px rgba(0,0,0,0.4)");
        setScale(1);
    };

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `scale(${scale})`,
                filter: `drop-shadow(${shadow})`,
                transition: "transform 0.3s ease, filter 0.3s ease",
                cursor: "pointer",
            }}
            className={className}
        />
    );
};

export default ImageZoomShadow;
