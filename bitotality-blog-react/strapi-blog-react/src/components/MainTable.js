import React from "react";
import MainTableRow from "./MainTableRow";

const MainTable = (props) => {

  return (
    <div className="col-lg-12">
      <div className="page-header"></div>
      <div className="bs-component">
        <table className="table table-hover">
          <thead></thead>
          <tbody>
          {props.tableRows?.map(([...tableRow] ) => (

            <MainTableRow
              tableRow={tableRow}
            //   otherRows={otherRows}
            />
          ))}

{/* array to be sent first param is style, second param is element one td and so on */}
          {/* 1. Get number of rows,
               2. Get row content as an array? Perhaps just create number of rows based
               On array of content
               3. Get table style word for class
               4. For each array of content, create a tr then loop the contents as td */}
            <tr className="table-active">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-primary">
              <th scope="row"></th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-secondary">
              <th scope="row"></th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr className="table-success">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>{" "}
            </tr>
            <tr className="table-danger">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
