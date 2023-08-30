import React from "react";

const CommonCard = ({ imgLink }) => {
  const title = "img Title";
  /**
   * @returns the common card element
   */
  return (
    <div className="common-card">
      <div className="card-content">
        {imgLink && <img src={imgLink} className="RawImg" alt={title} />}
      </div>
    </div>
  );
};

export default CommonCard;
