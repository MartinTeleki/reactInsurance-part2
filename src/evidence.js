import React, { useEffect, useState } from "react";
import "./newEvidence.css";

export default function NewEvidence({ evidenceList, setEvidenceList, children }) {
  useEffect(() => {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];
    setEvidenceList(storedEvidence);
  }, []);

  function handleDeleteEvidenceList(index) {
    const updatedEvidenceList = [...evidenceList];
    updatedEvidenceList.splice(index, 1);

    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));

    setEvidenceList(updatedEvidenceList);
  }

  return (
    <div>
      {evidenceList.map((evidence, index) => (
        <div key={index} className="evidence-container">
          {children(evidence, index, handleDeleteEvidenceList)}
        </div>
      ))}
    </div>
  );
}
