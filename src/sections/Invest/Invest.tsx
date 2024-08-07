import "./index.css";
import React from "react";

const Invest = () => {
    return (
        <div className="bg-[#0B0C0B] relative">
            <div className="px-6 xl:container">
                <div className="relative mb-12 flex items-center bg-[#0A0A0A] justify-center text-center text-base lg:text-[32px] lg:mb-[103px] lg:font-normal text-custom-white font-normal h-[55px] lg:h-[103px] w-full lg:w-[589px] border border-gradient lg:-mt-44 rounded-[100px]">
                    <div className="absolute bg-[#DBFF4B] text-[#000] text-sm font-bold uppercase rounded-[100px] h-[40px] w-[136px] left-0 lg:left-10 -top-8 flex justify-center items-center">
                        benefícios
                    </div>
                    Por que investir na Mandrill Invest?
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[26px]">
                    <div className="bg-[#0C0B0B] rounded-[20px] border border-[#262525] h-[256px] flex flex-col justify-center items-center">
                        <img src="/quadro.svg" alt="" className="mb-8" />
                        <p className="text-custom-white font-normal text-2xl text-center">
                            Retorno de até 2% <br className="hidden xl:flex" />{" "}
                            ao mês
                        </p>
                    </div>

                    <div className="bg-[#0C0B0B] rounded-[20px] border border-[#262525] h-[256px] flex flex-col justify-center items-center">
                        <img src="/carteira.svg" alt="" className="mb-8" />
                        <p className="text-custom-white font-normal text-2xl text-center">
                            Pagamento rápido <br className="hidden xl:flex" /> e
                            eficiente aos <br className="hidden xl:flex" />{" "}
                            fornecedores
                        </p>
                    </div>

                    <div className="bg-[#0C0B0B] rounded-[20px] border border-[#262525] h-[256px] flex flex-col justify-center items-center">
                        <img src="/ticket.svg" alt="" className="mb-8" />
                        <p className="text-custom-white font-normal text-2xl text-center">
                            Descontos de <br className="hidden xl:flex" /> até
                            30% com <br className="hidden xl:flex" />
                            fornecedores
                        </p>
                    </div>

                    <div className="bg-[#0C0B0B] rounded-[20px] border border-[#262525] h-[256px] flex flex-col justify-center items-center">
                        <img src="/filme.svg" alt="" className="mb-8" />
                        <p className="text-custom-white font-normal text-2xl text-center">
                            Contribuição para <br className="hidden xl:flex" />{" "}
                            a indústria audiovisual
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 pt-12 bg-form flex flex-col-reverse xl:grid xl:grid-cols-2 xl:pt-36">
                <div>
                    <img src="/homem-cortado.png" alt="" />
                </div>

                <div>
                    <h2 className="text-5xl mb-7 text-custom-white font-thin lg:text-7xl mb-9">
                        Pronto para
                        <br />{" "}
                        <span className="italic text-custom-yellow font-medium">
                            Investir?
                        </span>
                    </h2>

                    <div className="bg-[#fff] max-w-[600px] rounded-2xl p-8">
                        <form>
                            <div className="mb-12">
                                <label className="flex font-bold text-[#262A28] mb-3">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="w-full border p-3 rounded-3xl border-[#969090]"
                                />
                            </div>

                            <div className="mb-12">
                                <label className="flex font-bold text-[#262A28] mb-3">
                                    E-mail
                                </label>
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    className="w-full border p-3 rounded-3xl border-[#969090]"
                                />
                            </div>

                            <div className="mb-12">
                                <label className="flex font-bold text-[#262A28] mb-3">
                                    Investimento
                                </label>
                                <input
                                    type="text"
                                    placeholder="R$"
                                    className="w-full border p-3 rounded-3xl border-[#969090]"
                                />
                            </div>

                            <button className="bg-custom-yellow text-[#101110] text-sm font-bold w-full h-[42px] rounded-[26px] flex items-center justify-center hover:bg-custom-gradient">
                                <img
                                    src="/arrow-button-menu.svg"
                                    className="mr-2"
                                    alt="Imagem de um Icone preto em formato de seta"
                                />
                                Cadastre-se Agora
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invest;
