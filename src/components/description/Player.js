export default function Player({ src_link, title }) {
  return (
    <iframe
      width="100%"
      className="aspect-video"
      src={src_link}
      title={title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
