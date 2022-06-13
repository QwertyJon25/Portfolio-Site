import React from 'react'
import WorkFlip from './WorkFlip';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";

export default function WorkHistory() {

        const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Strand Bookstore",
    back: "Bookseller | 03/2016-12/2021"
  },
  {
    id: "2",
    variant: "hover",
    front: "S©ott Treimel NY",
    back: "Junior Literary Agent | 01/2015-03/2016"
  },
  {
    id: "3",
    variant: "hover",
    front: "Alexandre Gertsman Contemporary Art Gallery",
    back: "Assistant Director | 10/2013-09/2014"
  },

  {
    id: "4",
    variant: "hover",
    front: "Zara",
    back: "Stock Associate | 10/2014-04/2015"
  },

  {
    id: "5",
    variant: "hover",
    front: "Shoprite of Wallkill",
    back: "Customer Service Representative | 09/2008-07/2014"
  }
];





  return (
    <div className="container">
      <h2>Hover To See Work History</h2>
      <hr className="dot-line"/>
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
