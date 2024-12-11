import axios from "axios";
import { OompaLoompa } from "../types/types";

interface ResponseOompaLoompas {
  results: OompaLoompa[];
  total: number;
  current: number;
}

const API_URL =
  "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus";

export const getOompaLoompas = async (page: number): Promise<ResponseOompaLoompas> => {
  console.log(page);
  try {
    const {data} = await axios.get(`${API_URL}/oompa-loompas?page=${page}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching Oompa Loompas:", error);
    throw error;
  }
};

export const searchOompaLoompas = async (
  query: string
): Promise<OompaLoompa[]> => {
  const response = await axios.get(
    `${API_URL}/oompa-loompas/search?query=${query}`
  );
  return response.data.results;
};

export const getOompaLoompaById = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/oompa-loompas/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Oompa Loompa details:", error);
  }
};
