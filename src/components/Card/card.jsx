import React from "react";

import "./card.scss";

import eyeIcon from "./../../images/icon-view.svg"

const Card = ({
    image,
    name,
    description,
    cryptoIcon,
    cryptoWorth,
    daysLeft,
    profileImage,
    profileName,
}) => {
    return (
        <div className="Card m-3 p-6 rounded-xl">
            <div className="Card-imageContainer">
                <img
                    src={image}
                    alt=""
                    className="Card-image w-80 rounded-xl mb-8"
                />
                <div class="overlay rounded-xl">
                    <img src={eyeIcon} className="eyeIcon"/>
                </div>
            </div>
            <div className="text-left">
                <h3 className="Card-cryptoName inline-block text-white text-2xl font-bold mb-1">
                    {name}
                </h3>
                <p className="text-gray-400 text-md mb-4">{description}</p>

                <div className="flex justify-between mb-4">
                    <div className="flex">
                        <img src={cryptoIcon} alt="" className="pr-3" />
                        <p className="Card-cryptoWorth">{cryptoWorth}</p>
                    </div>
                    <p className="text-gray-400">{daysLeft}</p>
                </div>
                <hr className="mb-4 bg-gray-700 border-none" />
                <div className="flex items-center">
                    <img
                        src={profileImage}
                        alt=""
                        className="w-10 mr-4 border-gray-50 border-2 rounded-full"
                    />
                    <p className="Card-profileName text-white">
                        <span className="text-gray-400">Creation of</span>{" "}
                        {profileName}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
