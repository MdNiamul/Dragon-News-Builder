import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {

  const today = new Date();

  const engDate = format(today, "EEEE, MMMM dd, yyyy");

  const banglaDate = new Intl.DateTimeFormat("bn-BD-u-ca-beng", {
    dateStyle: "full",
  }).format(today);

  const hijriDate = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);

  const text = `📅 ${engDate}   |   🇧🇩 ${banglaDate}   |   🌙 Hijri: ${hijriDate}   |   `;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">

      <img className="w-[420px]" src={logo} alt="logo" />

      <p className="text-lg font-semibold text-gray-500 italic tracking-wide">
        Journalism Without Fear or Favour
      </p>

      <div className="ticker-wrapper">
        <div className="ticker">
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>

    </div>
  );
};

export default Header;