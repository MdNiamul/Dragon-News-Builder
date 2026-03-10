
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCart = ({ news }) => {

    const {id, title, image_url, author, rating, total_view, details } = news;

    const formattedDate = new Date(author?.published_date).toDateString();

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden border">

            {/* Author Section */}
            <div className="flex items-center justify-between bg-gray-100 p-4">
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={author?.img}
                        alt={author?.name}
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800">{author?.name}</h2>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="px-4 py-3 font-bold text-lg text-gray-800 leading-snug">
                {title}
            </h2>

            {/* Image */}
            <div className="px-4">
                <img
                    className="rounded-lg w-full object-cover"
                    src={image_url}
                    alt={title}
                />
            </div>

            {/* Details contidion here  */}
            <div className="px-4 text-accent">
                {
                    details.length > 200 ? (
                        <>{details.slice(0, 200)}...
                            <Link to={`/news-details/${id}`} className="text-primary font-semibold cursor-pointer hover:underline"> 
                            read More
                            </Link>
                        </>
                    ):(
                        details
                    )
                }


            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-4 text-sm text-gray-700">

                {/* Rating */}
                <div className="flex items-center gap-2 text-orange-500">

                    {/* Stars */}
                    <div className="flex">
                        {
                            [...Array(rating?.number)].map((_, i) => (
                                <FaStar key={i} />
                            ))
                        }
                    </div>

                    {/* Rating Number */}
                    <span className="text-gray-700">{rating?.number}</span>

                </div>

                {/* Views */}
                <div className="flex items-center gap-2">
                    <FaEye />
                    <span>{total_view}</span>
                </div>

            </div>
        </div>
    );
};

export default NewsCart;