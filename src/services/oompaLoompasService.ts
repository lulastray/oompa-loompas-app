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
  try {
    const response = await axios.get(`${API_URL}/oompa-loompas?page=${page}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching Oompa Loompas:", error);
    throw error;
  }
};

export const getOompaLoompaById = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/oompa-loompas/${id}`
    );
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error fetching Oompa Loompa details:", error);
  }
};
