"use client";
import React, { useEffect, useState } from "react";

const ContatoSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 250); // Atraso de 250ms para a animação
    }, []);

    return (
        <section
            className={`flex flex-col justify-center items-center min-h-screen transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            style={{ paddingBottom: "20vh" }}
        >
            <h1 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                Contact and Apply for Us!
            </h1>
            <div className="flex flex-col sm:flex-row gap-10 text-center items-center">
                <a
                    href="https://discord.gg/EEdJPfTuma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-semibold text-gray-800 dark:text-white transition-transform duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} hover:text-gray-600 dark:hover:text-gray-300`}
                >
                    Discord
                </a>

                <a
                    href="twitch.tv/lospadrinhos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-semibold text-gray-800 dark:text-white transition-transform duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} hover:text-gray-600 dark:hover:text-gray-300`}
                    style={{ transitionDelay: "200ms" }} // Adiciona um atraso para o segundo item
                >
                    Twitch
                </a>
            </div>
        </section>
    );
};

export default ContatoSection;
