import axios from "axios";

const baseUrl = process.env.REACT_APP_TRENDZY_BASE_URL;

const checkToken = () => {
  const token = JSON.parse(localStorage.getItem("trendsyToken") || "{}")?.token;

  return {
    Authorization: token,
    "Content-Type": "application/json",
  };
};

export const getData = async (path, filter) => {
  const headers = checkToken();
  console.log(filter);
  const serverRequestData = { ...filter, headers };
  try {
    // if (path == "/data/search") {
    let res = await axios.get(`${baseUrl}${path}`, serverRequestData);
    let data = await res.data;
    //console.log(res)
    if (typeof data == "object") return data;
    else {
      return [];
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const postData = async (path, filter) => {
  const headers = checkToken();
  const serverRequestData = { ...filter, headers };
  console.log(serverRequestData, filter);
  try {
    let res = await axios.post(`${baseUrl}${path}`, serverRequestData);
    return await res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateData = async (path, filter) => {
  const headers = checkToken();
  const serverRequestData = { ...filter, headers };
  console.log(serverRequestData, filter);
  try {
    let res = await axios.patch(`${baseUrl}${path}`, serverRequestData);
    return await res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteData = async (path, filter) => {
  const headers = checkToken();
  console.log(path, filter);
  const serverRequestData = { ...filter, headers };
  try {
    let res = await axios.delete(`${baseUrl}${path}`, serverRequestData);
    return await res.data;
  } catch (err) {
    console.log(err.message);
  }
};
