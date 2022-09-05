import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { paginationNumber } from "../../features/pagination/paginationSlice";

export default function Pagination() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const handlePageValue = (numberOfPage) => {
    setPage(numberOfPage);
    dispatch(paginationNumber(numberOfPage));
  };
  useEffect(() => {
    fetch("http://localhost:9000/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  const dataLimit = 8;
  const pageNumber = Math.ceil(videos?.length / dataLimit);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {[...Array(pageNumber)?.keys()].map((number) => (
          <button
            key={number}
            onClick={() => handlePageValue(number)}
            className={`${
              page === number
                ? "bg-blue-600 text-blue-50"
                : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
