import { useState } from "react";

export function Task() {
  const [dealers, setDealers] = useState([
    { id: 1, name: "om Mobile", active: true },
    { id: 2, name: "akshat Mobile", active: false },
    { id: 3, name: "ad Mobile", active: true },
  ]);

  const status = (id: number) => {
    setDealers((prev) =>
      prev.map((dealer) =>
        dealer.id === id ? { ...dealer, active: !dealer.active } : dealer,
      ),
    );
  };

  return (
    <div>
      {dealers.map((dealer) => (
        <div key={dealer.id}>
          <h2>{dealer.name}</h2>
          <button
            className=" flex border-amber-950 rounded-md p-1.5 bg-blue-700"
            onClick={() => status(dealer.id)}
          >
            {dealer.active ? " ACTIVE " : " INACTIVE "}
          </button>
        </div>
      ))}
    </div>
  );
}..
