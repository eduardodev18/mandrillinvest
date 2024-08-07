import React, { useRef, useState } from "react";

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef: any = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col items-center justify-between px-6 lg:pb-9 lg:grid lg:grid-cols-2 xl:container">
            <div className="mb-12 lg:mb-0">
                <h2 className="text-5xl mb-7 text-custom-white font-thin lg:text-7xl">
                    Invista na <br className="hidden lg:flex" />{" "}
                    <span className="italic text-custom-yellow font-medium">
                        Eficiência
                    </span>{" "}
                    <br className="hidden lg:flex" /> do Audiovisual
                </h2>
                <p className="text-custom-white text-lg font-light mb-10 lg:mb-[100px]">
                    <strong className="font-bold">
                        Ganhe retornos mensais de até 2% <br className="hidden lg:flex"/>
                    </strong>{" "}
                    enquanto ajuda a indústria a crescer
                </p>
                <button className="bg-custom-yellow text-[#101110] text-sm font-bold w-full lg:w-[221px] h-[42px] rounded-[26px] flex items-center justify-center hover:bg-custom-gradient">
                    <img
                        src="/arrow-button-menu.svg"
                        className="mr-2"
                        alt="Imagem de um Icone preto em formato de seta"
                    />
                    Cadastre-se Agora
                </button>
            </div>
            <div className="relative h-60 bg-hero-pattern bg-no-repeat bg-cover bg-center rounded-3xl w-full overflow-hidden lg:h-[422px]" onClick={handlePlayPause}>
                <video
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                    src="/video-m.mp4"
                    controls={false}
                    onClick={handlePlayPause}
                />
                <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? (
                        <img src="/pause.svg" alt="Pause" />
                    ) : (
                        <img src="/play.svg" alt="Play" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Hero;
