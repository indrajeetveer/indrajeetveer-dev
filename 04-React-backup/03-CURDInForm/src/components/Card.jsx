import React from "react";

const Card = ({
  postdata,
  deleteHandler,
  setedit,
  setname,
  setdescription,
}) => {
  return (
    <div>
      {postdata.map((elem) => {
        return (
          <div
            key={elem.id}
            className="border-1 rounded mt-10 flex flex-col gap-3 h-[200px] w-[300px] px-3 py-5 mx-10"
          >
            <h1 className=" text-center text-3xl font-semibold">{elem.name}</h1>
            <h2 className=" text-center text-xl font-semibold">
              {elem.description}
            </h2>
            <button
              onClick={() => {
                deleteHandler(elem.id);
              }}
              className="px-3 py-1 rounded font-xl bg-red-600 text-white"
            >
              Delete
            </button>

            <button 
             onClick={()=>{
              setname(elem.name)
              setdescription(elem.description)
              setedit(elem.id)
             }}
            className="px-3 py-1 rounded font-xl bg-blue-500 text-white">
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
