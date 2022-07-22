import React from "react";

export default function Contact() {
  const nameSurname = "Temo Asanishvili";
  const email = "asanishvilitemo@gmail.com";
  const num = "+995597459696";
  const GitHub = "https://github.com/Temo-asanishvili";
  const linkedin = "https://www.linkedin.com/in/temo-asanishvili-125561207/";
  return (
    <div>
      <ul>
        <li>{nameSurname}</li>
        <li>{email}</li>
        <li> {num}</li>
        <li>{GitHub}</li>
        <li>{linkedin}</li>
      </ul>
    </div>
  );
}
