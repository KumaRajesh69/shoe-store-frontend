// import { API_URL, STRAPI_API_TOKEN } from "./urls";

// export const fetchDataFromApi = async (endpoint) => {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer " + STRAPI_API_TOKEN,
//     },
//   };

//   const res = await fetch(`${API_URL}${endpoint}`, options);
//   const data = await res.json();

//   return data;
// };

// export const makePaymentRequest = async (endpoint, payload) => {
//   const res = await fetch(`${API_URL}${endpoint}`, {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer " + STRAPI_API_TOKEN,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });
//   const data = await res.json();
//   return data;
// };

import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer efef55e26d2250225455631f271f4ab76df98d53ba1ced9bffbcf42fe59a0d03db13bca071f25f311cd8f82006ddeb6f8c9f4e4196106af13388d8ed0687cf6d3aeca63b8612543fbbea706fc788b408f16a0e9ef9813530c531f93c5181c0da0e1addb2d9d9362c22b8b9ab3ceaf1843648e29a6d9509f9e5566681c8d41bef",
    },
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
};

export const makePaymentRequest = async (endpoint, payload) => {
  const options = {
    method: "POST",
    headers: {
      Authorization:
        "Bearer efef55e26d2250225455631f271f4ab76df98d53ba1ced9bffbcf42fe59a0d03db13bca071f25f311cd8f82006ddeb6f8c9f4e4196106af13388d8ed0687cf6d3aeca63b8612543fbbea706fc788b408f16a0e9ef9813530c531f93c5181c0da0e1addb2d9d9362c22b8b9ab3ceaf1843648e29a6d9509f9e5566681c8d41bef",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    if (!res.ok) {
      throw new Error(`Error making payment request to ${API_URL}${endpoint}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error making payment request:", error);
    return null;
  }
};
