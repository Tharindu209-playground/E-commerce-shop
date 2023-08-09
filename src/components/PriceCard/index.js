import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
            Categories
          </h1>
        </div>
        <div className="grid grid-cols-3 text-justify">
          {cards?.map((card) => {
            return (
              <Link
                to={`/categories/${card}`}
                className="p-3 cursor-pointer text-justify">
                <div className="flex rounded-lg bg-gray-100 p-2 shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-500">
                  <div className="flex items-center mb-3">
                    <h2 className="text-gray-800 text-l title-font capitalize text-center">
                      {card.replace(/[^a-zA-Z ]/g, " ") || "Example card"}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
