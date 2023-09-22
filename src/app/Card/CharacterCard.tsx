"use client";
import React from "react";
import Link from "next/link";

export interface cardProps {
  cardData: {
    bgImageSrc: string;
    characterImageSrc: string;
    titleSrc: string;
    title: string;
    cardHref: string;
    height: 210 | 300 | 360 | 450 | 540 | 600;
  };
}

export default function CharacterCard(cardProps: cardProps) {
  const cardClassName = `relative flex center flex-end px-8 mx-12 h-[${cardProps.cardData.height}px] w-[calc(${cardProps.cardData.height}px / 1.5)]`; // perspective: 2500px
  const wrapperClassName = `absolute w-full -z-10 card-transition`;
  const coverImageClassName = `w-full h-full object-cover`;
  const characterClassName = "w-full -z-10 absolute card-transition opacity-0";
  const titleClassName = "w-full";

  const heightVariants: Record<number, string> = {
    210: "h-[210px] w-[140px]",
    300: "h-[300px] w-[200px]",
    360: "h-[360px] w-[240px]",
    450: "h-[450px] w-[300px]",
    540: "h-[540px] w-[360px]",
    600: "h-[600px] w-[400px]",
  };

  return (
    <Link href={cardProps.cardData.cardHref} title={cardProps.cardData.title}>
      <div
        className={`character-card perspective group relative mx-12 flex ${
          heightVariants[cardProps.cardData.height]
        } items-end justify-center px-8`}
      >
        <div className="wrapper card-transition group-hover:wrapper-transform absolute -z-10 w-full">
          <img
            src={cardProps.cardData.bgImageSrc}
            className="cover-image h-full w-full object-cover"
          />
        </div>
        <img src={cardProps.cardData.titleSrc} className="title" />
        <img
          src={cardProps.cardData.characterImageSrc}
          className="character card-transition group-hover:character-transform absolute -z-10 w-full opacity-0"
        />
      </div>
    </Link>
  );
}
