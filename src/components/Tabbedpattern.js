import React, { useState } from "react";
import image from "../assets/img/tree.png";
import "../App.css";

const TabbedPattern = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            <h2>Tab 1 Content</h2>

            <div className="border border-black bg-deep-orange-900 h-96 ">
              <p className="font-bold text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                eligendi quo pariatur recusandae! Ea ratione eaque ducimus sint
                dolorem nesciunt quis deserunt, sequi saepe dolore et, unde
                vitae veniam? Rerum vitae atque, nihil nostrum magnam maiores
                et. Similique sequi aut quam beatae aliquid. Quod repellat
                debitis sit. Facere harum possimus inventore sint fuga minus
                similique quaerat natus nobis, distinctio amet doloribus
                exercitationem rem ipsa cum?
              </p>
              <div className="z-10">This element has a z-index of 10.</div>
              <img src={image} alt="" className="w-100%" />
              <p>This is the heading </p>
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h2>Tab 2 Content</h2>
            <p>
              Integer vestibulum sem eget nisi vestibulum, in efficitur odio
              pulvinar. Maecenas in fermentum dolor. Ut pulvinar erat odio,
              vitae rutrum velit bibendum vitae. Etiam molestie tellus eu eros
              faucibus, sed interdum lacus fermentum. Aliquam quis ipsum eget
              urna dictum efficitur.{" "}
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2>Tab 3 Content</h2>
            <p>
              Proin dignissim eget arcu non lobortis. Ut lobortis, velit non
              pharetra malesuada, felis lorem tristique justo, ac pharetra
              sapien nibh at arcu. Duis sed blandit odio. Donec fringilla
              aliquet lectus ac venenatis. Integer suscipit fermentum neque a
              vestibulum.{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedPattern;
