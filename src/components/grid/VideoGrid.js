import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/video/Videos";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
  const dispatch = useDispatch();

  const { isLoading, videos, isError, error } = useSelector(
    (state) => state.videos
  );
  const { pageNumber } = useSelector((state) => state.pagination);
  const { tags, searchText } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchVideos({ tags, searchText, pageNumber }));
  }, [dispatch, pageNumber, searchText, tags]);

  let content;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && videos?.length === 0) {
    <div className="col-span-12">No video found!</div>;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}
