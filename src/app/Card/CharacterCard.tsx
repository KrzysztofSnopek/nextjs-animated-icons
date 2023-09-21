import React from "react";
import Link from "next/link";

export interface cardProps {
  cardData: {
    bgImageSrc: string;
    characterImageSrc: string;
    titleSrc: string;
    title: string;
    cardHref: string;
    height: number;
  };
}

export default function CharacterCard(cardProps: cardProps) {
  const cardClassName = `relative flex center flex-end px-8 mx-12 h-[${cardProps.cardData.height}px] w-[calc(${cardProps.cardData.height}px / 1.5)]`; // perspective: 2500px
  const wrapperClassName = `absolute w-full -z-10 card-transition`;
  const coverImageClassName = `w-full h-full object-cover`;
  const characterClassName = "w-full -z-10 absolute card-transition opacity-0";
  const titleClassName = "w-full ";

  return (
    <Link href={cardProps.cardData.cardHref} title={cardProps.cardData.title}>
      <div className="character-card perspective relative mx-12 flex h-[300px] w-[calc(300px/1.5)] items-end justify-center px-8">
        <div className="wrapper card-transition absolute z-10 w-full">
          <img
            src={cardProps.cardData.bgImageSrc}
            className="cover-image h-full w-full object-cover"
          />
        </div>
        <img src={cardProps.cardData.titleSrc} className="title" />
        <img
          src={cardProps.cardData.characterImageSrc}
          className="character card-transition hover:character-transform absolute z-10 w-full opacity-0"
        />
      </div>
    </Link>
  );
}
