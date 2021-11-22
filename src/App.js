import "./App.css";
import Card from "./components/Card/card";

import nftImage from './images/image-equilibrium.jpg';
import profileImage from "./images/image-avatar.png"
import cryptoIcon from "./images/icon-ethereum.svg"

function App() {
    const cardInfo = [
        {
            image: nftImage,
            name: "Pikachu",
            description: "An eletric-type Pokemon",
            cryptoIcon: cryptoIcon,
            cryptoWorth: "0.041ETH",
            daysLeft: "3 days left",
            profileImage: profileImage,
            profileName: "Jules Wyvern",
        },
        {
            image: nftImage,
            name: "Pikachu",
            description: "An eletric-type Pokemon",
            cryptoIcon: cryptoIcon,
            cryptoWorth: "0.041ETH",
            daysLeft: "3 days left",
            profileImage: profileImage,
            profileName: "Jules Wyvern",
        },
        {
            image: nftImage,
            name: "Pikachu",
            description: "An eletric-type Pokemon",
            cryptoIcon: cryptoIcon,
            cryptoWorth: "0.041ETH",
            daysLeft: "3 days left",
            profileImage: profileImage,
            profileName: "Jules Wyvern",
        },
    ];
    return (
        <div className="App grid grid-cols-1 gap-4 lg:grid-cols-3">
            {cardInfo.map((nft) => {
                const {
                  image,
                    name,
                    description,
                    cryptoIcon,
                    cryptoWorth,
                    daysLeft,
                    profileImage,
                    profileName,
                } = nft;
                return <Card {...nft} />;
            })}
        </div>
    );
}

export default App;
