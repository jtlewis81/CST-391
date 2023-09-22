import React from 'react';
import Card from './Card';

const App = () => {
    return  <div>
                <h1>Music I like!</h1>
                <Card
                    albumTitle="Songs of the Lost Woods [2021]"
                    albumDescription="Violin cover album of some of the best songs from The Legend of Zelda video game series."
                    imgURL="https://store.taylordavisviolin.com/cdn/shop/products/SongsoftheLostWoodsCover_TaylorDavis-min_900x.jpg?v=1669061786"
                    buttonText="OK"
                />
                <Card
                    albumTitle="Odyssey [2016]"
                    albumDescription="Taylor's second album of original music."
                    imgURL="https://store.taylordavisviolin.com/cdn/shop/products/OdysseyCover_Large_0ffe356c-8da7-4d5b-aedb-84f476cd97fb-min_900x.jpg?v=1669061731"
                    buttonText="OK"
                />
                <Card
                    albumTitle="An Enchanted Christmas [2012]"
                    albumDescription="Collection of Christmas songs played on the violin."
                    imgURL="https://store.taylordavisviolin.com/cdn/shop/products/EnchantedMini_d797e401-9bd7-4208-9390-7f4b115dbb26_900x.png?v=1669061417"
                    buttonText="OK"
                />
            </div>
}

export default App;