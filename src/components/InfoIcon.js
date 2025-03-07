import React, { useState } from "react";
import employees from "../assets/employees.csv"
import download from "../assets/download.csv"
const InfoButton = () => {
   const [showCard, setShowCard] = useState(false);

   return (
      <div className="text-start infoIcon">
         {showCard ? (
            <div className={`card p-3 shadow info-card ${showCard ? "" : "hidden"}`}>
               <h5 className="card-title">Secret Santa</h5>
               <div className="card-text">
                  <p>
                     <b>🎁 Secret Santa Assignment Feature</b>
                  </p>

                  <p>
                     Make your <b>Secret Santa gift exchange seamless</b> with our <b>automated Secret Santa assignment system</b>! 🎄
                  </p>

                  <p>
                     <b>✨ Key Features:</b>
                     <li>
                        ✅ <b>Fair & Random Matching</b> – Ensures each employee gets a unique Secret Child.
                     </li>
                     <li>
                        ✅ <b>No Repeats from Last Year</b> – Avoids assigning the same person as last time.
                     </li>
                     <li>
                        ✅ <b>No Self-Assignment</b> – Prevents employees from being assigned to themselves.
                     </li>
                     <li>
                        ✅ <b>CSV-Based Automation</b> – Simply upload an employee list, and get a <b>ready-to-use</b> match list in seconds!
                     </li>
                  </p>

                  🔹 <b>Effortless holiday fun</b> 🎉 – No manual pairing, no conflicts, just smooth & fair assignments! 🚀
               </div>
               <div>

                  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
                     <p>
                        <a
                           href={employees}
                           download="employees.csv"
                           className="px-4 py-2 rounded shadow m-2 hover:bg-blue-600"
                        >
                           📥 Download Employee List
                        </a>
                     </p>
                     <p>

                        <a
                           href={download}
                           download="secret_santa.csv"
                           className="px-4 py-2 rounded shadow m-2 hover:bg-green-600"
                        >
                           🎁 Download Secret Santa Assignments
                        </a>
                     </p>
                  </div>
               </div>
               <button className="btn btn-danger" onClick={() => setShowCard(false)}>
                  Close
               </button>
            </div>
         ) : (
            <button className="btn btn-primary" onClick={() => setShowCard(true)}>
               Info
            </button>
         )}
      </div>
   );
};

export default InfoButton;
