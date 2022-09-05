import React from "react";
import loading from "../../assets/loading.gif";

export default function Loading() {
  return (
    <div className="col-span-12">
      <img src={loading} className="mx-auto h-7 w-7" alt="Loader" />
    </div>
  );
}
