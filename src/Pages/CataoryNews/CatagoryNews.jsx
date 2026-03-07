import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CatagoryNews = () => {

    const [categoryNews, setcategoryNews] = useState([]);

    const { id } = useParams([]);
    const data = useLoaderData();
    // console.log(id, data);

    useEffect(() => {
        if (id == 0) {
            // eslint-disable-next-line
            setcategoryNews(data);
            return;
        } else if (id == "1") {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setcategoryNews(filterNews);
        } else {
            const filterNews = data.filter(news => news.category_id == id);
            // console.log(filterNews);
            setcategoryNews(filterNews);
        }

    }, [data, id]);

    return (
        <div>
            <h2>Total {categoryNews.length} News Found</h2>
        </div>
    );
};

export default CatagoryNews;