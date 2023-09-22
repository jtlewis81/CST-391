import React, { useState } from "react";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [albumList, setAlbumList] = useState([
    {
      artistId: 0,
      artist: "Taylor Davis",
      title: "Songs of the Lost Woods",
      description:
        "Violin cover album of some of the best songs from The Legend of Zelda video game series.",
      year: 2021,
      image:
        "https://store.taylordavisviolin.com/cdn/shop/products/SongsoftheLostWoodsCover_TaylorDavis-min_900x.jpg?v=1669061786",
    },
    {
      artistId: 1,
      artist: "Taylor Davis",
      title: "Odyssey",
      description: "Taylor's second album of original music.",
      year: 2016,
      image:
        "https://store.taylordavisviolin.com/cdn/shop/products/OdysseyCover_Large_0ffe356c-8da7-4d5b-aedb-84f476cd97fb-min_900x.jpg?v=1669061731",
    },
    {
      artistId: 2,
      artist: "Taylor Davis",
      title: "An Enchanted Christmas",
      description: "Collection of Christmas songs played on the violin.",
      year: 2012,
      image:
        "https://store.taylordavisviolin.com/cdn/shop/products/EnchantedMini_d797e401-9bd7-4208-9390-7f4b115dbb26_900x.png?v=1669061417",
    },
  ]);

  const renderedList = () => {
    return albumList.map((album) => {
      return (
        <Card
          albumTitle={album.title}
          albumDescription={album.description}
          buttonText="OK"
          imgURL={album.image}
          year={album.year}
        />
      );
    });
  };

  return <div className="container">{renderedList()}</div>;
};

export default App;
