import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import "../App.css";
function Datagridpattern() {
  let data = [
    { OrderID: 10248, CustomerID: "VINET", ShipCountry: "France" },
    { OrderID: 10249, CustomerID: "TOMSP", ShipCountry: "Germany" },
    { OrderID: 10250, CustomerID: "HANAR", ShipCountry: "Brazil" },
    { OrderID: 10251, CustomerID: "VICTE", ShipCountry: "France" },
    { OrderID: 10248, CustomerID: "VINET", ShipCountry: "France" },
    { OrderID: 10249, CustomerID: "TOMSP", ShipCountry: "Germany" },
    { OrderID: 10250, CustomerID: "HANAR", ShipCountry: "Brazil" },
    { OrderID: 10251, CustomerID: "VICTE", ShipCountry: "France" },
    { OrderID: 10251, CustomerID: "VICTE", ShipCountry: "France" },
    { OrderID: 10248, CustomerID: "VINET", ShipCountry: "France" },
    { OrderID: 10249, CustomerID: "TOMSP", ShipCountry: "Germany" },
    { OrderID: 10250, CustomerID: "HANAR", ShipCountry: "Brazil" },
    { OrderID: 10251, CustomerID: "VICTE", ShipCountry: "France" },
  ];
  return (
    <div>
      <GridComponent dataSource={data}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" />
          <ColumnDirective field="CustomerID" headerText="Customer ID" />
          <ColumnDirective field="ShipCountry" headerText="Ship Country" />
        </ColumnsDirective>
      </GridComponent>
    </div>
  );
}

export default Datagridpattern;
