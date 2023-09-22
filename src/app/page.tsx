import CharacterCard, { cardProps } from "./Card/CharacterCard";

export default function Home() {
  const card1: cardProps["cardData"] = {
    bgImageSrc:
      "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
    characterImageSrc:
      "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    titleSrc:
      "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
    title: "Dark Rider",
    cardHref: "",
    height: 360,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharacterCard cardData={card1} />
    </main>
  );
}
