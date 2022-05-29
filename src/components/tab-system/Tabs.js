import React, { useState } from "react";
import Calculator from "../Calculator";
import RuleOfThree from "../RuleOfThree";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="tabs">
      <ul className="nav">
        <TabNavItem
          title="Gram Calc"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Rule of Three"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="content">
        <TabContent id="tab1" activeTab={activeTab}>
          <Calculator></Calculator>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <RuleOfThree></RuleOfThree>
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
