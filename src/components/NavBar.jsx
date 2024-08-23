import React, { useState, useEffect } from "react";
import { SiNike } from "react-icons/si";
import { SiNewbalance } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ cartItems, removeFromCart }) => {
  const { pathname } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFirstText, setShowFirstText] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "https://res.cloudinary.com/dh60kpxg5/image/upload/v1724015931/nike_ictgfl.jpg",
      alt: "nikes",
    },
    {
      src: "https://res.cloudinary.com/dh60kpxg5/image/upload/v1724015932/nb_lcr5es.jpg",
      alt: "New Balance shoes",
    },
    {
      src: "https://res.cloudinary.com/dh60kpxg5/image/upload/v1724015935/peakpx_wmp5e3.jpg",
      alt: "Yeezy shoes",
    },
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 5000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <div>
      <div className="sticky top-0 left-0 w-full z-50 bg-white">
        <div className="flex justify-between border-b border-black">
          <h1 className="ml-2 text-2xl font-bold">
            Huncho_<span className="text-green-500">kicks</span>
          </h1>
          <div className="mr-8">
            <ul className="flex gap-[20px]">
              <li>
                <Link to="nike">
                  Nike
                  <span>
                    <SiNike />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="newbalance">
                  New Balance{" "}
                  <span>
                    <SiNewbalance className="text-red-700" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="yeezy">
                  Yeezy{" "}
                  <span>
                    <CgAdidas />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="text-white p-2 rounded-md bg-green-950 hover:bg-green-700"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              ☰
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu absolute right-0 mt-2 w-[350px] rounded-md shadow-lg bg-green-950 grid grid-rows-3">
                {cartItems.length > 0 ? (
                  <ul className="py-1">
                    {cartItems.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-sm text-gray-700 flex justify-between items-center hover:bg-gray-100"
                      >
                        <span>
                          {item.name} - {item.price}
                        </span>
                        <button
                          className="text-red-500 hover:text-red-700 focus:outline-none"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-2 text-sm text-gray-700">
                    Your cart is empty
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Animated Text Section */}
        <div className="bg-secondary flex justify-center border-b border-black pb-2 text-green-950">
          <h1 className={showFirstText ? "block" : "hidden"}>
            Best Kicks In The City
          </h1>
          <h1 className={!showFirstText ? "block" : "hidden"}>
            for the best prices
          </h1>
        </div>
      </div>

      {/* Image Section with Rotation */}
      {pathname === "/" && (
        <div className="p-4 bg-primary shadow-lg rounded-lg flex justify-center">
          <img src={images[currentImage].src} alt={images[currentImage].alt} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
