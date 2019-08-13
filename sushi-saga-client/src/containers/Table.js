import React, { Fragment } from "react";

import AddMoney from "../components/AddMoney";

const Table = props => {
  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };
  return (
    <Fragment>
      <div className="remaining">
        <h1>You have: ${props.wallet} remaining! </h1>
        <h3>
          {props.wallet < 10 ? (
            <AddMoney addMoneyForm={props.addMoneyForm} />
          ) : null}{" "}
        </h3>
      </div>

      <div className="table">
        <div className="stack">
          {props.emptyPlates !== 0
            ? renderPlates([...Array(props.emptyPlates)])
            : renderPlates([])}
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
