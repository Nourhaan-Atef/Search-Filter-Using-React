import React, { useState } from "react";
function Filter() {
  const Data = [
    { id: 1, name: "Cairo" },
    { id: 2, name: "Giza" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Luxor" },
    { id: 5, name: "Aswan" },
    { id: 6, name: "Hurgada" },
    { id: 7, name: "Port-Said" },
    { id: 8, name: "Tanta" },
    { id: 9, name: "Sada-City" },
    { id: 10, name: "Faiyum" },
    { id: 11, name: "Asyut" },
    { id: 12, name: "Edfu" },
    { id: 13, name: "Suze" },
    { id: 14, name: "Mansoura" },
    { id: 15, name: "Minya" },
  ];
  const [names, setName] = useState(Data);
  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    const DataNames = Data.filter((names) =>
      names.name.toLowerCase().includes(search)
    );
    setName(DataNames);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search......."
        onChange={(e) => filterNames(e)}
      />
      <ul>
        {names.map((name) => {
          return <li key={name.id}>{name.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Filter;
