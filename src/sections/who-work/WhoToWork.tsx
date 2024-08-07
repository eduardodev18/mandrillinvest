import React from "react";

const WhoToWork = () => {
    return (
        <div className="bg-[#171918] relative py-10 lg:py-36">
            <div className="flex px-6 h-full w-full xl:container">
                <div className="lg:absolute mx-auto mb-12 lg:mb-0 lg:-top-5 px-5 lg:left-[120px]w-[181px] h-[40px] bg-[#9B8CFF] text-[#000] text-base font-bold uppercase flex items-center justify-center rounded-[100px]">Como Funciona</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 xl:container">
                <div>
                    <img src="/emoction.svg" className="mx-auto mb-[86px] w-[218px] h-[160px]" alt="Imagem de um emoction" />
                    <h3 className="text-center lg:text-left text-custom-white text-[32px] font-semibold mb-5">Cadastro</h3>
                    <p className="text-center lg:text-left text-custom-white text-xl font-light tracking-wide">Inscreva-se e entre na fila de espera.</p>
                </div>

                <div>
                    <img src="/investiment.svg" className="mx-auto mb-[86px] w-[218px] h-[160px]" alt="Imagem de um emoction" />
                    <h3 className="text-center lg:text-left text-custom-white text-[32px] font-semibold mb-5">Investimento</h3>
                    <p className="text-center lg:text-left text-custom-white text-xl font-light tracking-wide">Escolha o valor a ser investido.</p>
                </div>

                <div>
                    <img src="/diamant.svg" className="mx-auto mb-[86px] w-[218px] h-[160px]" alt="Imagem de um emoction" />
                    <h3 className="text-center lg:text-left text-custom-white text-[32px] font-semibold mb-5">Retorno</h3>
                    <p className="text-center lg:text-left text-custom-white text-xl font-light tracking-wide">Receba retornos mensais de até 2%.</p>
                </div>
            </div>
        </div>
    );
};

export default WhoToWork;
