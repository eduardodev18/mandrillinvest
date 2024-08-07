import "./index.css";
import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-[#0A0A0A] border-gray">
            <div className="flex flex-col-reverse py-24 items-center justify-between px-6 lg:grid lg:grid-cols-2 xl:container">
                <div>
                    <img
                        src="/about-us.svg"
                        className="w-full"
                        alt="Imagem de um gráfico"
                    />
                </div>

                <div>
                    <div className="relative mb-12 flex items-center bg-[#0A0A0A] justify-center text-center rounded-[100px] text-base lg:text-[32px] lg:font-normal text-custom-white font-normal h-[55px] lg:h-[103px] w-full lg:w-[423px] border gradient-border lg:-ml-16 lg:-top-0">
                        <div className="absolute bg-[#8FFF9D] text-[#000] text-sm font-bold uppercase rounded-[100px] h-[40px] w-[94px] left-0 lg:left-10 -top-8 flex justify-center items-center">
                            Sobre
                        </div>
                        O Que é Mandrill Invest?
                    </div>

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
        </div>
    );
};

export default AboutUs;
