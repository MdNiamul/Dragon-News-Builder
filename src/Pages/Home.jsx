import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    const articles = data.articles;

    return (
        <div className="max-w-7xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-6 border-b pb-2">
                Latest News
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {
                    articles.map((news, index) => (

                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">

                            <img
                                src={news.urlToImage}
                                alt=""
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">

                                <p className="text-xs text-gray-500 mb-1">
                                    {news.source.name}
                                </p>

                                <h2 className="font-bold text-lg mb-2">
                                    {news.title}
                                </h2>

                                <p className="text-sm text-gray-600">
                                    {news.description}
                                </p>

                                <a
                                    href={news.url}
                                    target="_blank"
                                    className="text-red-500 mt-3 inline-block font-semibold"
                                >
                                    Read More →
                                </a>

                            </div>

                        </div>

                    ))
                }
            </div>

        </div>
    );
};

export default Home;