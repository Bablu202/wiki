import React from "react";

export default function TestingBugs() {
  let localStorageData = [];
  if (localStorage.length > 0) {
    localStorageData = JSON.parse(localStorage.getItem("searchHistory"));
  }
  console.log(localStorageData);
  let str = "js";

  console.log(localStorageData.includes(str));
  return <div>TestingBugs</div>;
}
