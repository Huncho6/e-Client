import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { SiNike } from "react-icons/si";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Nike = ({addToCart}) => {
  const [counts, setCounts] = useState([]);
  const [nike, setNike] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const increment = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const decrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const fetchNike = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://e-server-1.onrender.com/api/v1/nike");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched data:", data);
      setNike(data.data || []);
      setCounts(new Array(data.data.length).fill(0)); // Initialize counts array
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNike();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="flex flex-row justify-center text-2xl mb-10">
        Nike
        <span>
          <SiNike />
        </span>
      </div>
      <div className="ml-7 mr-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array.isArray(nike) &&
          nike.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[220px] md:w-[250px] h-[470px] bg-white shadow-lg rounded-lg overflow-hidden mb-4"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[300px] object-cover"
              />
              <div className="p-2">
                <p className="font-semibold">{item.name}</p>
                <p className="font-semibold">{item.color}</p>
                <p className="text-sm">{item.description}</p>
                <p className="text-lg font-bold">{item.price}</p>
                <div className="flex justify-center gap-4">
                  <CiCirclePlus
                    className="text-3xl"
                    onClick={() => increment(index)}
                  />
                  <span>{counts[index]}</span>
                  <CiCircleMinus
                    className="text-3xl"
                    onClick={() => decrement(index)}
                  />
                </div>
                <div className="flex justify-center">
                  <button className="border-b-2 border-black"  onClick={() => addToCart(item)}>Bag It</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Nike;
