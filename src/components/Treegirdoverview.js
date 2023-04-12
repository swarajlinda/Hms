import React from "react";
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter,
  Sort,
  Reorder,
  Inject,
} from "@syncfusion/ej2-react-treegrid";
import { countries } from "../data";
import { getObject } from "@syncfusion/ej2-grids";
import { addClass, isNullOrUndefined } from "@syncfusion/ej2-base";
import "../Treegridoverview.css";
function Treegirdoverview() {
  function gridTemplate(props) {
    var flagIconLocation = props.parentItem
      ? props.parentItem.name
      : props.name;
    return (
      <div style={{ display: "inline" }}>
        <div style={{ display: "inline-block" }}>
          <img
            className="e-image"
            src={"src/treegrid/images/" + flagIconLocation + ".png"}
          ></img>
        </div>
        <div style={{ display: "inline-block", paddingLeft: "6px" }}>
          {props.name}
        </div>
      </div>
    );
  }
  function treegridTemplate(props) {
    return (
      <div className="statustemp">
        <span className="statustxt">{props.gdp} %</span>
      </div>
    );
  }
  function treeratingTemplate(props) {
    if (props.rating) {
      return (
        <div className="rating">
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
          <span className="star"></span>
        </div>
      );
    } else {
      return <span></span>;
    }
  }
  function treeunemployTemplate(props) {
    return (
      <div id="myProgress" className="pbar">
        <div id="myBar" className="bar">
          <div id="treegridlabel" className="barlabel"></div>
        </div>
      </div>
    );
  }
  function treelocationTemplate(props) {
    var locationsrc = "src/treegrid/images/Map.png";
    return (
      <div id="coordinates">
        <img src={locationsrc} className="e-image" alt={props.coordinates} />
        <a target="_blank" href="https://www.google.com/maps/place/">
          {props.coordinates}
        </a>
      </div>
    );
  }
  function treeareaTemplate(props) {
    return (
      <span>
        {props.area} km<sup>2</sup>
      </span>
    );
  }
  function treezoneTemplate(props) {
    let classValue = "";
    if (props.timezone.indexOf("-") !== -1) {
      classValue = "negativeTimeZone";
    }
    return (
      <div>
        <img
          src="src/treegrid/images/__Normal.png"
          style={{ filter: "brightness(150%)" }}
          className={classValue}
        ></img>
        <span style={{ paddingLeft: "7px" }}>{props.timezone}</span>)
      </div>
    );
  }
  function populationValue(field, data) {
    return data[field] / 1000000;
  }
  function queryCellinfo(args) {
    if (args.column.field === "gdp") {
      if (args.data[args.column.field] < 2) {
        args.cell.querySelector(".statustxt").classList.add("e-lowgdp");
        args.cell.querySelector(".statustemp").classList.add("e-lowgdp");
      }
    }
    if (args.column.field === "rating") {
      if (args.column.field === "rating") {
        for (let i = 0; i < args.data[args.column.field]; i++) {
          args.cell.querySelectorAll("span")[i].classList.add("checked");
        }
      }
    }
    if (args.column.field === "unemployment") {
      if (args.data[args.column.field] <= 4) {
        addClass([args.cell.querySelector(".bar")], ["progressdisable"]);
      }
      args.cell.querySelector(".bar").style.width =
        args.data[args.column.field] * 10 + "%";
      args.cell.querySelector(".barlabel").textContent =
        args.data[args.column.field] + "%";
    }
    if (args.column.field === "name") {
      let parentItem = getObject("parentItem", args.data);
      let imageElement = args.cell.querySelector(".e-image");
      if (isNullOrUndefined(parentItem)) {
        let name = getObject("name", args.data);
        imageElement.src = "src/treegrid/images/" + name + ".png";
      } else {
        let name = getObject("name", parentItem);
        imageElement.src = "src/treegrid/images/" + name + ".png";
      }
    }
  }
  let flagtemplate = gridTemplate;
  let gdptemplate = treegridTemplate;
  let ratingtemplate = treeratingTemplate;
  let unemploymentTemplate = treeunemployTemplate;
  let locationtemplate = treelocationTemplate;
  let areatemplate = treeareaTemplate;
  let timezonetemplate = treezoneTemplate;
  const provinceFilter = {
    type: "Excel",
    itemTemplate: flagtemplate,
  };
  return (
    <div className="control-pane">
      <div className="control-section">
        <TreeGridComponent
          dataSource={countries}
          childMapping="states"
          height="400"
          allowReordering={true}
          allowFiltering={true}
          allowSorting={true}
          filterSettings={{ type: "Menu", hierarchyMode: "Parent" }}
          queryCellInfo={queryCellinfo.bind(this)}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="name"
              headerText="Province"
              width="195"
              template={flagtemplate}
              filter={provinceFilter}
            ></ColumnDirective>
            <ColumnDirective
              field="population"
              headerText="Population (Million)"
              allowFiltering={false}
              valueAccessor={populationValue}
              textAlign="Right"
              width="200"
            ></ColumnDirective>
            <ColumnDirective
              field="gdp"
              headerText="GDP Rate %"
              width="155"
              template={gdptemplate}
            />
            <ColumnDirective
              field="rating"
              headerText="Credit Rating"
              width="190"
              template={ratingtemplate}
            />
            <ColumnDirective
              field="unemployment"
              headerText="Unemployment Rate"
              width="200"
              allowFiltering={false}
              template={unemploymentTemplate}
            />
            <ColumnDirective
              field="coordinates"
              headerText="Coordinates"
              allowSorting={false}
              width="220"
              template={locationtemplate}
            />
            <ColumnDirective
              field="area"
              headerText="Area"
              width="140"
              template={areatemplate}
            />
            <ColumnDirective
              field="timezone"
              headerText="Time Zone"
              width="150"
              template={timezonetemplate}
            />
          </ColumnsDirective>
          <Inject services={[Filter, Sort, Reorder]} />
        </TreeGridComponent>
      </div>
    </div>
  );
}

export default Treegirdoverview;
