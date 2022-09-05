import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

export default function RelatedVideoList({ id, tags }) {
  const dispatch = useDispatch();
  const { isLoading, relatedVideos, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);

  let relatedVideosItem = null;
  if (isLoading) relatedVideosItem = <Loading />;
  if (!isLoading && isError)
    relatedVideosItem = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedVideos?.length === 0)
    relatedVideosItem = (
      <div className="col-span-12">No related video found!</div>
    );
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    relatedVideosItem = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {relatedVideosItem}
    </div>
  );
}
