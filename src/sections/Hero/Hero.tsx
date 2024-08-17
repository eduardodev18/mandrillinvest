import React, { useEffect, useRef, useState } from "react";
import playAnimation from "../../assets/play.json";
import "./index.css";
import { useLottie } from "lottie-react";

const style = {
    height: 80,
};

const Example = ({ isHovered }) => {
    const [playCount, setPlayCount] = useState(0);
    const { View, play, stop } = useLottie(
        {
            animationData: playAnimation,
            loop: playCount < 2, // Loop enquanto o playCount for menor que 2
            autoplay: playCount < 2, // Autoplay nas duas primeiras execuções
        },
        style
    );

    useEffect(() => {
        if (playCount < 2) {
            play();
            setPlayCount(playCount + 1);
        }
    }, [play, playCount]);

    useEffect(() => {
        if (isHovered) {
            play();
        } else if (playCount >= 2) {
            stop();
        }
    }, [isHovered, play, stop, playCount]);

    return <div>{View}</div>;
};

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRef: any = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="flex flex-col items-center justify-between px-6 lg:pb-9 xl:py-48 lg:grid lg:grid-cols-2 xl:container">
            <div className="mb-12 lg:mb-0">
                <h2 className="relative h-52 text-5xl mb-7 text-custom-white font-thin lg:text-7xl">
                    <span className="letter-1">Invista na</span>{" "}
                    <br className="hidden lg:flex" />{" "}
                    <span className="letter-2 italic text-custom-yellow font-medium">
                        Eficiência
                    </span>{" "}
                    <br className="hidden lg:flex" />{" "}
                    <span className="letter-3">do Audiovisual</span>
                </h2>
                <p className="text-custom-white text-lg font-light mb-10 lg:mb-12">
                    <strong className="font-bold">
                        Ganhe retornos mensais de até 2%{" "}
                        <br className="hidden lg:flex" />
                    </strong>{" "}
                    enquanto ajuda a indústria a crescer
                </p>
                <button onClick={() => scrollToSection("contato")} className="bg-custom-yellow text-[#101110] text-sm font-bold w-full lg:w-[221px] h-[42px] rounded-[26px] flex items-center justify-center hover:bg-custom-gradient loading-button">
                    <img
                        src="/arrow-button-menu.svg"
                        className="mr-2"
                        alt="Imagem de um Icone preto em formato de seta"
                    />
                    Cadastre-se Agora
                </button>
            </div>
            <div
                className="relative h-60 bg-hero-pattern bg-no-repeat bg-cover bg-center rounded-3xl w-full overflow-hidden lg:h-[480px]"
                onClick={handlePlayPause}
            >
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover ${
                        isPlaying ? "opacity-100" : "opacity-0"
                    }`}
                    src="/video-m.mp4"
                    controls={false}
                    onClick={handlePlayPause}
                />

                <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handlePlayPause}
                >
                    {isPlaying ? (
                        <img src="/pause.svg" alt="Pause" />
                    ) : (
                        <Example isHovered={isHovered} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Hero;
