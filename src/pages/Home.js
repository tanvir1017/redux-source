import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tag/Tags";
import Pagination from "../components/ui/Pagination";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
