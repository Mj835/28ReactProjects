import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, dob, image } = person;
        return (
          <article ket={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>On {dob} Feb</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
