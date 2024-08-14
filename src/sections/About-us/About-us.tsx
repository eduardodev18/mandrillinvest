import { Parallax } from "react-scroll-parallax";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="relative bg-[#0A0A0A] border-gray bg-form-2">
            <Parallax speed={-10}>
                <div className="flex flex-col-reverse py-36 items-center justify-between px-6 lg:grid lg:grid-cols-2 xl:container">
                    <div data-aos="fade-right" className="relative">
                        <img
                            src="/about-us.svg"
                            className="w-full"
                            alt="Imagem de um gráfico"
                        />

                        <Parallax translateY={[-15, 15]} className="absolute -bottom-14 left-20">
                            <img
                                src="/digital.png"
                                alt="Imagem de uma digital"
                                className="levitation"
                            />
                        </Parallax>

                        <Parallax translateY={[-20, 20]} className="absolute -top-14 left-96">
                            <img src="/raio.png" alt="Imagem de um raio" className="levitation"/>
                        </Parallax>
                    </div>

                    <div data-aos="fade-left" className="relative">
                        <div className="relative mb-12 flex items-center bg-[#0A0A0A] justify-center text-center rounded-[100px] text-base lg:text-[32px] lg:font-normal text-custom-white font-normal h-[55px] lg:h-[103px] w-full lg:w-[423px] border gradient-border lg:-ml-16 lg:-top-0">
                            <div className="absolute bg-[#8FFF9D] text-[#000] text-sm font-bold uppercase rounded-[100px] h-[40px] w-[94px] left-0 lg:left-10 -top-8 flex justify-center items-center">
                                Sobre
                            </div>
                            O Que é Mandrill Invest?
                        </div>

                        <Parallax translateY={[-25, 25]} className="absolute -top-8 right-14">
                            <img src="/tv.svg" alt="Imagem de uma TV" className="levitation"/>
                        </Parallax>

                        <Parallax translateY={[-10, 10]} className="absolute -bottom-40 left-10">
                            <img src="/code.svg" alt="Imagem de um código" className="levitation"/>
                        </Parallax>

                        <p className="text-custom-white text-base font-light mb-12 m-auto flex justify-center lg:text-xl lg:font-light">
                            Mandrill Invest é uma plataforma inovadora de{" "}
                            <br className=" hidden lg:flex" />
                            investimentos voltada para o setor audiovisual.{" "}
                            <br className=" hidden lg:flex" />
                            Nossa missão é fornecer uma solução eficiente para{" "}
                            <br className=" hidden lg:flex" />
                            antecipação de pagamentos aos fornecedores{" "}
                            <br className=" hidden lg:flex" /> dessa indústria,
                            garantindo retornos atrativos para{" "}
                            <br className=" hidden lg:flex" />
                            nossos investidores.
                        </p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default AboutUs;
