"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-white skills-list">
        <li>Diving (Static, WorldBoss, Avalon, Dungeons)</li>
        <li>Open World (Small & Mid Scale)</li>
        <li>Hellgate (5vs5 & 10vs10)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false); // Controla se a seção está visível na tela
  const [isItemVisible, setIsItemVisible] = useState(false); // Controla a animação dos itens

  // Ao carregar o componente, faz a animação de visibilidade
  useEffect(() => {
    // Ativa a visibilidade da seção assim que o componente for montado
    setIsVisible(true);

    // Ativar a animação dos itens após a seção ficar visível
    setTimeout(() => {
      setIsItemVisible(true); // Ativar a visibilidade dos itens
    }, 500); // Delay para a animação dos itens
  }, []);

  return (
    <section
      id="about"
      className={`text-white transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">What about us?</h2>
          <p className="text-base lg:text-lg text-white">
          Welcome to Helldivers, a fearless guild forged in fire and blood. We thrive in the depths of Static Dungeons, diving into the unknown, eliminating threats, and claiming what’s rightfully ours.
          </p>
          <br />
          <p className="text-base lg:text-lg text-white">
          We are not here to hesitate—we are here to strike fast and strike hard. Coordination, precision, and raw power define our raids. If you seek a guild where strategy and aggression go hand in hand, you have found your place.
          </p>
          <div className="mt-8">
            {/* Aqui os itens da lista só ficam visíveis se isItemVisible for verdadeiro */}
            <ul className="list-disc pl-2 text-white">
              {TAB_DATA.find((t) => t.id === tab).content.props.children.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    isItemVisible
                      ? "opacity-100 translate-x-0" // Quando visível, anima de volta à posição normal
                      : "opacity-0 translate-x-10" // Quando não visível, fica fora da tela
                  } transition-all duration-500 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }} // Delay para animar um item por vez
                >
                  {item.props.children}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
