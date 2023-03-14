import React from "react";

export default function Tip({ getTip, bill, percent }) {
  return (
    <>
      <p>{"$" + getTip(bill, percent)}</p>
    </>
  );
}
