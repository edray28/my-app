import React from "react";
import Card from "./Card";

const CardList = ({Prod}) => {
 /* if(true) {
    throw new Error("ERROR LIST");
  } */
    return(
        <div>
          {
              Prod.map((user, i) => {
                return (
                <Card 
                key={i} 
                id={Prod[i].id} 
                name={Prod[i].name} 
                email={Prod[i].email} />
                );
            })
          }
        </div>
    );
}
export default CardList;