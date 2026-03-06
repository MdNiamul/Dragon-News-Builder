
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {

    const fetchNews = async () => {

      const res = await fetch('/breaking.json');

      const data = await res.json();

      const titles = data.articles.map(item => item.title);

      setNews(titles);
    };

    fetchNews();

  }, []);

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">

      <p className="text-base-100 bg-secondary px-3 py-2 font-semibold">
       Breaking
      </p>

      <Marquee speed={40} pauseOnHover gradient={false}>
        {
          news.map((item, index) => (
            <p key={index} className="font-bold text-3xl mr-10">
              {item}
            </p>
          ))
        }
      </Marquee>

    </div>
  );
};

export default Latest;