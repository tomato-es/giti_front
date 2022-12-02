const BASE_URL = "https://c831-121-151-37-157.jp.ngrok.io";

export const getGITI = (username) => {
  return fetch(`${BASE_URL}/giti?github=${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
