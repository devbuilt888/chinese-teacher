import React, { Fragment } from "react";
import RowContent from "./RowContent";
const MainTableRow = (props) => {
  const [tableRowStyle, ...tableRows] = props.tableRow;
  // const styleRow = `table-${props.tableRow[0]}`;
  const styleRow = `table-${tableRowStyle}`;
  console.log(tableRows); 
  return (
    <Fragment>
      <tr className={styleRow}>
        <th scope="row">{tableRowStyle}</th>
        {/* {props.tableRows?.map(([...tableRow] ) => (
            <MainTableRow
              tableRow={tableRow}
            //   otherRows={otherRows}
            />
          ))} */}
          {/* TO BE CONTINUED HERE */}
        {tableRows?.map((rowContent) => {
          <RowContent rowContent={rowContent} />;
        })}
      </tr>
    </Fragment>
  );
};

export default MainTableRow;
