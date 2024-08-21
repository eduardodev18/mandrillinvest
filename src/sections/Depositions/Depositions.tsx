import { Parallax } from "react-scroll-parallax";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const Depositions = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const cardsData = [
        {
            id: 1,
            image: "/rafael.svg",
            name: "Rafael Gomes",
            role: "Funcionário Público",
            hoverImagem: "/rafael-hover.svg",
        },
        {
            id: 2,
            image: "/rafael-2.svg",
            name: "Rafael Gomes",
            role: "Funcionário Público",
            hoverImagem: "/rafael-2-hover.svg",
        },
        {
            id: 3,
            image: "/ricardo.svg",
            name: "Ricardo Secunho",
            role: "Arquiteto",
            hoverImagem: "/ricardo-hover.svg",
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="bg-[#101110] relative py-10 lg:py-[136px] mb-[200px]">
            <Parallax speed={-10}>
                <div className="grid grid-cols-1 px-6 xl:grid-cols-12 xl:container xl:px-0">
                    <div className="xl:col-span-4">
                        <div className="bg-[#FE6A0F] text-[#000] w-[160px] h-[40px] rounded-[100px] uppercase font-bold flex items-center justify-center mb-12">
                            Depoimentos
                        </div>

                        <h2 className="text-5xl mb-7 text-custom-white font-thin lg:text-7xl">
                            O que <br />{" "}
                            <span className="italic text-custom-yellow font-medium">
                                nossos <br className="hidden lg:flex" />{" "}
                                investidores
                            </span>{" "}
                            <br className="hidden lg:flex" /> dizem
                        </h2>
                    </div>

                    <div className="xl:col-span-8 flex flex-col xl:flex-row">
                        {cardsData.map((item, index: any) => {
                            return (
                                <div
                                    key={index}
                                    className="card w-full xl:w-1/2 mb-6 xl:mb-0"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        height: "600px",
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="base-image"
                                    />
                                    <img
                                        src={item.hoverImagem}
                                        alt={item.name}
                                        className={`hover-image ${
                                            hoveredIndex === index
                                                ? "visible"
                                                : ""
                                        }`}
                                    />
                                    <h2 className="absolute bottom-24 left-7 text-custom-white mb-4 max-w-40 leading-none text-[40px] font-medium">
                                        {item.name}
                                    </h2>
                                    <div className="flex items-center justify-center bg-[#8FFF9D] rounded-[44px] bottom-14 absolute left-7 px-3 text-xl h-[36px] font-bold">
                                        {item.role}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Depositions;
