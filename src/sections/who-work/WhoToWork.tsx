import React, { useEffect, useRef, useState } from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import smileAnimation from "../../assets/smile.json";
import chartAnimation from "../../assets/chart.json";
import diamondAnimation from "../../assets/diamond.json";

const style = {
    height: 160,
    width: 218,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 86,
};

const options = {
    animationData: smileAnimation,
};

const optionsChart = {
    animationData: chartAnimation,
};

const optionsDiamond = {
    animationData: diamondAnimation,
};

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("down");
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current) {
                setScrollDirection("down");
            } else if (currentScrollY < prevScrollY.current) {
                setScrollDirection("up");
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollDirection;
};

const Example = () => {
    const scrollDirection = useScrollDirection();
    const lottieObj = useLottie(options, style);

    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0.1, 1],
                type: "seek",
                frames: [0, 100],
            },
        ],
    });

    return Animation;
};

const ExampleChart = () => {
    const scrollDirection = useScrollDirection();
    const lottieObj = useLottie(optionsChart, style);

    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0.1, 1],
                type: "seek",
                frames: [0, 100],
            },
        ],
    });

    return Animation;
};

const ExampleDiamond = () => {
    const scrollDirection = useScrollDirection();
    const lottieObj = useLottie(optionsDiamond, style);

    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0.1, 1],
                type: "seek",
                frames: [0, 100],
            },
        ],
    });

    return Animation;
};

const WhoToWork = () => {
    return (
        <div className="bg-[#171918] relative py-10 lg:py-36">
            <div className="flex px-6 h-full w-full xl:container">
                <div className="lg:absolute mx-auto mb-12 lg:mb-0 lg:-top-5 px-5 lg:left-[120px]w-[181px] h-[40px] bg-[#9B8CFF] text-[#000] text-base font-bold uppercase flex items-center justify-center rounded-[100px]">
                    Como Funciona
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:container">
                <div>
                    <Example />
                    <h3 className="text-center lg:text-left text-custom-white text-[32px] font-semibold mb-5">
                        Cadastro
                    </h3>
                    <p className="text-center lg:text-left text-custom-white text-xl font-light tracking-wide">
                        Inscreva-se e entre na fila de espera.
                    </p>
                </div>

                <div>
                    <ExampleChart />
                    <h3 className="text-center lg:text-left text-custom-white text-[32px] font-semibold mb-5">
                        Investimento
                    </h3>
                    <p className="text-center lg:text-left text-custom-white text-xl font-light tracking-wide">
                        Escolha o valor a ser investido.
                    </p>
                </div>

                <div>
                    <ExampleDiamond />
                    <h3 className="text-center lg:text-left text-custom-white text-[32px] font-semibold mb-5">
                        Retorno
                    </h3>
                    <p className="text-center lg:text-left text-custom-white text-xl font-light tracking-wide">
                        Receba retornos mensais de até 2%.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoToWork;
