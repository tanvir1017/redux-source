import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Loading from "../components/ui/Loading";
import { fetchVideoDetails } from "../features/videoDetails/videoDetailsSlice";

export default function Videos() {
  const dispatch = useDispatch();
  const { isLoading, videoDetails, isError, error } = useSelector(
    (state) => state.videoDetails
  );
  const { videoId } = useParams();
  useEffect(() => {
    dispatch(fetchVideoDetails(videoId));
  }, [dispatch, videoId]);

  let content;
  let description;
  let relatedVideos;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && videoDetails?.length === 0) {
    <div className="col-span-12">
      Page not found!, That you are looking for 4️⃣0️⃣4️⃣
    </div>;
  }
  if (!isLoading && !isError && videoDetails?.length > 0) {
    content = videoDetails.map((video) => (
      <VideoPlayer key={video.id} src_link={video.link} title={video.title} />
    ));
  }
  if (!isLoading && !isError && videoDetails?.length > 0) {
    description = videoDetails.map((video) => (
      <VideoDescription key={video.id} video={video} />
    ));
  }
  if (!isLoading && !isError && videoDetails?.length > 0) {
    relatedVideos = videoDetails.map((video) => (
      <RelatedVideoList key={video.id} tags={video.tags} id={video.id} />
    ));
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}

            {description}
          </div>

          {relatedVideos}
        </div>
      </div>
    </section>
  );
}
