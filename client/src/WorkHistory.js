import React from 'react'
import WorkFlip from './WorkFlip';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

export default function WorkHistory() {

        const cards = [
  {
    id: "1",
    variant: "click",
    front: "Strand Bookstore",
    back: "Bookseller | 03/2016-12/2021"
  },
  {
    id: "2",
    variant: "click",
    front: "S©ott Treimel NY",
    back: "Junior Literary Agent | 01/2015-03/2016"
  },
  {
    id: "3",
    variant: "click",
    front: "Alexandre Gertsman Contemporary Art Gallery",
    back: "Assistant Director | 10/2013-09/2014"
  },

  {
    id: "2",
    variant: "click",
    front: "Zara",
    back: "Stock Assosiate | 10/2014-04/2015"
  },

  {
    id: "2",
    variant: "click",
    front: "Shoprite of Wallkill",
    back: "Customer Service Representative | 09/2008-07/2014"
  }
];





  return (
    <div className="container">
      <div className="row h-100">
        <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <WorkFlip key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}
