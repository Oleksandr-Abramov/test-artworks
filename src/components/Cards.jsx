"use client";

import Image from "next/image";
import Modal from "components/Modal";
import { useState } from "react";
import { getArtworkById } from "service/api";
import { getImage } from "service/getImage";

const Cards = ({ list, showLoader, hideLoader, onFilter }) => {
  const [showModal, setShowModal] = useState(false);
  const [article, setArticle] = useState({});

  const handleOpenModal = async (article) => {
    showLoader();
    const description = await getArtworkById(article.id);
    setArticle({ ...article, ...description.data });
    setShowModal(true);
    hideLoader();
  };

  const handleFilter = (field, value, title) => {
    onFilter({ [field]: [{ value: value, label: title }] });
  };

  return (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 p-1 h-full">
      {list.map(
        ({
          id,
          title,
          thumbnail,
          image_id,
          date_end,
          date_start,
          place_of_origin,
          artist_title,
          style_title,
          artist_id,
          style_id,
        }) => (
          <article key={id} className="break-inside-avoid-column">
            <div className="p-3 bg-white shadow-md ">
              <p className="mt-2 text-gray-500 text-center">{title}</p>
              <div className="p-3">
                <div className=" w-full flex justify-center m-auto">
                  <Image
                    className=" object-contain cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                    src={
                      image_id
                        ? getImage(image_id, 200)
                        : "/img/default-image-300x300.jpg"
                    }
                    alt={thumbnail?.alt_text}
                    width={200}
                    height={300}
                    onClick={() =>
                      handleOpenModal({
                        id,
                        title,
                        thumbnail,
                        image_id,
                        date_end,
                        date_start,
                        place_of_origin,
                        artist_title,
                      })
                    }
                  />
                </div>
                <div
                  onClick={() =>
                    handleFilter("artist_id", artist_id, artist_title)
                  }
                  className="mt-2 uppercase tracking-wide text-sm  font-semibold cursor-pointer hover:text-blue-500 transition-colors duration-200"
                >
                  {artist_title}
                </div>

                <p className="mt-2 text-gray-500">
                  Place of origin
                  <span className="ml-1 text-lg leading-tight font-medium text-black">
                    {place_of_origin}
                  </span>
                </p>
                <p className="mt-2 text-gray-500">
                  Style
                  <span
                    onClick={() =>
                      handleFilter("style_id", style_id, style_title)
                    }
                    className="ml-1 text-lg leading-tight font-medium text-black cursor-pointer hover:text-blue-500 transition-colors duration-200"
                  >
                    {style_title}
                  </span>
                </p>
                <p className="mt-2 text-gray-500">
                  {date_start === date_end ? (
                    <>
                      Was created in
                      <span className="ml-1 text-lg leading-tight font-medium text-black">
                        {date_start}
                      </span>
                    </>
                  ) : (
                    <>
                      Was created from
                      <span className="mx-1 text-lg leading-tight font-medium text-black">
                        {date_start}
                      </span>
                      to
                      <span className="ml-1 text-lg leading-tight font-medium text-black">
                        {date_end}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </article>
        )
      )}
      <Modal
        isShowModal={showModal}
        closeModal={() => setShowModal(false)}
        article={article}
      />
    </div>
  );
};

export default Cards;
