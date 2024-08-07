import "./index.css";
import React from "react";

function Header() {
    return (
        <div className="flex items-center justify-between flex-row pt-[52px] px-6 mb-12 lg:mb-32 xl:container">
            <div>
                <img
                    src="/logo.svg"
                    alt="Imagem da Logo da Mandrill"
                    className="w-32 lg:w-52"
                />
            </div>

            <div className="hidden lg:flex items-center flex-row">
                <ul className="flex">
                    <li className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow">
                        Sobre
                    </li>
                    <li className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow">
                        Como Funciona
                    </li>
                    <li className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow">
                        Depoimentos
                    </li>
                    <li className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow">
                        Benefícios
                    </li>
                    <li className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow">
                        Contato
                    </li>
                </ul>

                <button className="bg-custom-yellow text-[#101110] text-sm font-bold w-[221px] h-[42px] rounded-[26px] flex items-center justify-center hover:bg-custom-gradient">
                    <img src="/arrow-button-menu.svg" className="mr-2" alt="Imagem de um Icone preto em formato de seta" />
                    Entrar na Fila de Espera
                </button>
            </div>
        </div>
    );
}

export default Header;
