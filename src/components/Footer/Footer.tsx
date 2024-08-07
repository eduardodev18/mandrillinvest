import React from "react";
import "./index.css";

function Footer() {
    return (
        <div className="bg-[#171918]">
            <div className="flex flex-col items-center justify-between xl:flex-row px-6 py-[90px]  xl:container">

                <div className="relative flex items-center bg-[#171918] justify-center text-center text-base lg:text-[32px] lg:font-normal text-custom-white font-normal h-[55px] lg:h-[103px] w-full lg:w-[275px] border border-gradient-purple rounded-[100px] mb-12 xl:mb-0">
                    <div className="absolute bg-[#9B8CFF] text-[#000] text-sm font-bold uppercase rounded-[100px] h-[40px] w-[136px] left-0 lg:left-10 -top-8 flex justify-center items-center">
                        Contato
                    </div>
                    Fale Conosco
                </div>

                <div className="mb-12 xl:mb-0">
                    <ul className="grid grid-cols-4 gap-[45px]"> 
                        <li className="cursor-pointer">
                            <img src="/linkedin.svg" alt="" />
                        </li>
                        <li className="cursor-pointer">
                            <img src="/vector.svg" alt="" />
                        </li>
                        <li className="cursor-pointer">
                            <img src="/instagram.svg" alt="" />
                        </li>
                        <li className="cursor-pointer">
                            <img src="/whatsapp.svg" alt="" />
                        </li>
                    </ul>
                </div>

                <div className="border-right">
                    <div className="mb-12">
                        <p className="text-custom-white text-lg mb-3">mandrillinvest@gmail.com</p>
                        <p className="text-custom-white text-lg mb-3">+55 XX XXXX-XXXX</p>
                    </div>

                    <div>
                        <p className="text-custom-white text-lg mb-3">SHIS QL 10 conjunto 07 – casa 04</p>
                        <p className="text-custom-white text-lg mb-3">CEP 71630-075 - Brasília / DF</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
