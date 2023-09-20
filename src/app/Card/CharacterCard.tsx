import React from "react";
import Link from "next/link";

export interface cardProps {
  cardData: {
    bgImageSrc: string;
    characterImageSrc: string;
    titleSrc: string;
    title: string;
    cardHref: string;
  };
}

export default function CharacterCard(cardProps: cardProps) {
  return (
    <Link href={cardProps.cardData.cardHref} title={cardProps.cardData.title}>
      <div className="card">
        <div className="wrapper">
          <img src={cardProps.cardData.bgImageSrc} className="cover-image" />
        </div>
        <img src={cardProps.cardData.titleSrc} className="title" />
        <img src={cardProps.cardData.characterImageSrc} className="character" />
      </div>
    </Link>
  );
}
