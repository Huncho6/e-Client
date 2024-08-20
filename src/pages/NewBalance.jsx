import React, { useState, useEffect } from "react";
import { SiNewbalance } from "react-icons/si";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const NewBalance = ( { addToCart } ) => {
  const [counts, setCounts] = useState([]);
  const [nb, setNb] = useState([]);
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

  const fetchNb = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:1669/api/v1/nb");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log("Fetched data:", data); // Log the entire response
      setNb(data.data || []); // Access the 'data' field directly
      setCounts(new Array(data.data.length).fill(0)); // Initialize counts array
    } catch (error) {
      console.log("Error fetching data:", error); // Log any errors
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNb();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="flex flex-row justify-center text-2xl mb-10">
        New Balance
        <span>
          <SiNewbalance />
        </span>
      </div>
      <div className="ml-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(nb) &&
          nb.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[250px] md:w-[300px] h-[470px] bg-red-500 shadow-lg rounded-lg overflow-hidden mb-4"
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
              </div>
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
                <button className="border-b-2 border-black"  onClick={() => addToCart(item)}>Cop It</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewBalance;
