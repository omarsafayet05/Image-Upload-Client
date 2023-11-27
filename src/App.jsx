// import { useState } from "react";
// import Avatar from "./assets/avatar.png";

import { useState } from "react";
import ImageUpload from "./ImageUpload";
import "./App.css";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-start min-h-scren mt-6">
      <h1 className="text-4xl font-bold underline text-gray-800 text-center pb-6">
        Upload Image by Cloudinary
      </h1>
      <ImageUpload setImgUrl={setImgUrl} imgUrl={imgUrl} />
      {imgUrl && (
        <div className="mt-16 w-[30rem]">
          <label className="text-lg text-center text-gray-400">
            Image link
          </label>
          <textarea
            type="search"
            id="default-search"
            className="mb-2 block w-full h-20 outline-none p-4 text-sm text-black border border-gray-300 rounded-lg bg-[#fafafa]"
            placeholder=""
            value={imgUrl}
            required
          />
          <figure className="mx-auto">
            <img
              className="h-auto w-full rounded-lg"
              src={imgUrl}
              alt="image-description"
            />
            <figcaption className="mt-2 text-xl text-center text-gray-500 dark:text-gray-400">
              Preview
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

export default App;
