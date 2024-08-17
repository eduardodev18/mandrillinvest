import "./index.css";
import React, { useEffect, useState } from "react";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`bg-[#101110] xl:fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
                isScrolled ? "shadow-2xl" : ""
            }`}
        >
            <div className="flex items-center justify-between flex-row py-6 px-6  xl:container">
                <div>
                    <img
                        onClick={() => scrollToSection("home")}
                        src="/logo.svg"
                        alt="Imagem da Logo da Mandrill"
                        className={`transition-all duration-300 ${
                            isScrolled ? "w-20 lg:w-36" : "w-32 lg:w-52"
                        }`}
                    />
                </div>

                <div className="hidden lg:flex items-center flex-row">
                    <ul className="flex">
                        <li
                            onClick={() => scrollToSection("sobre")}
                            className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow"
                        >
                            Sobre
                        </li>
                        <li
                            onClick={() => scrollToSection("como-funciona")}
                            className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow"
                        >
                            Como Funciona
                        </li>
                        <li
                            onClick={() => scrollToSection("depoimentos")}
                            className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow"
                        >
                            Depoimentos
                        </li>
                        <li
                            onClick={() => scrollToSection("beneficios")}
                            className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow"
                        >
                            Benefícios
                        </li>
                        <li
                            onClick={() => scrollToSection("contato")}
                            className="menu-item cursor-pointer mr-10 text-custom-white text-sm font-normal hover:text-custom-yellow"
                        >
                            Contato
                        </li>
                    </ul>

                    <button className="bg-custom-yellow text-[#101110] text-sm font-bold w-[221px] h-[42px] rounded-[26px] flex items-center justify-center hover:bg-custom-gradient loading-button"    onClick={() => scrollToSection("contato")}>
                        <img
                            src="/arrow-button-menu.svg"
                            className="mr-2"
                            alt="Imagem de um Icone preto em formato de seta"
                        />
                        Entrar na Fila de Espera
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
