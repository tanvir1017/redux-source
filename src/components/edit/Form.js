import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateSingleVideoMutation } from "../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({ video }) {
  const navigate = useNavigate();

  const [updateSingleVideo, { isLoading, isError, isSuccess }] =
    useUpdateSingleVideoMutation();

  const {
    id,
    title: initialTitle,
    description: initialDescription,
    avatar: initialAvatar,
    author: initialAuthor,
    date: initialData,
    duration: initialDuration,
    views: initialViews,
    link: initialLink,
    thumbnail: initialThumbnail,
  } = video;

  // get data from text input

  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [avatar, setAvatar] = useState(initialAvatar);
  const [link, setLink] = useState(initialLink);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [description, setDescription] = useState(initialDescription);
  const [date, setDate] = useState(initialData);
  const [duration, setDuration] = useState(initialDuration);
  const [views, setViews] = useState(initialViews);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    updateSingleVideo({
      id,
      data: {
        title,
        author,
        avatar,
        link,
        thumbnail,
        description,
        date,
        duration,
        views,
      },
    });
  };
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate(`/videos/${id}`);
      }, 2000);
    }
  }, [isSuccess, navigate, id]);
  return (
    <form onSubmit={handleOnSubmit} method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 lg:col-span-3">
              <TextInput
                title="Video Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-1">
              <TextInput
                title="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Author image"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video of views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message="Video updated" />}
        {isError && (
          <Error message="There was an error while updating video info to db!" />
        )}
      </div>
    </form>
  );
}
