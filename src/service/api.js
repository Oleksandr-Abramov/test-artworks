import axios from "axios";
import isSortByNumber from "./isSortByNumber";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getArtworks = async (
  { searchQuery = "", filter, sort },
  { page = 1 }
) => {
  const filterList = [];
  for (const [field, query] of Object.entries(filter)) {
    if (query.length > 0) {
      filterList.push({ field, query });
    }
  }

  const sortList = [];
  for (const [field, query] of Object.entries(sort)) {
    if (query) {
      sortList.push({ field, query });
    }
  }

  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: {
        q: searchQuery,
        fields:
          "id,title,image_id,timestamp,thumbnail,place_of_origin,artist_display,date_start,date_end,artist_id,style_id,style_title,artist_title",
        limit: "20",
        page,
        sort: sortList.map(({ field, query }) =>
          isSortByNumber(field)
            ? { [field]: query }
            : { [`${field}.keyword`]: { order: query } }
        ),
        query: {
          bool: {
            should: filterList.map(({ field, query }) => ({
              terms: {
                [field]: query.map(({ value }) => value),
              },
            })),
          },
        },
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error querying to API Art Institute of Chicago:", error);
    throw error;
  }
};

export const getArtworkById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      params: {
        fields: "description",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error querying to API Art Institute of Chicago:", error);
    throw error;
  }
};
