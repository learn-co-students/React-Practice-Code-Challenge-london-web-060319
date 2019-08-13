import React, { Fragment } from "react";

const Table = props => {
  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />;
    });
  };
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
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
