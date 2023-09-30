import axios from "axios"

const DEV_ROUTE = "http://127.0.0.1:5000/"
const PROD_ROUTE = "https://anemia-chartify-server.onrender.com/"

const ACTIVE_ROUTE = !true ? DEV_ROUTE : PROD_ROUTE

// handle getting data from database
export const getDataService = async () => {
  try {
    const response = await axios.get(`${ACTIVE_ROUTE}`)
    return response
  } catch (error) {
    console.log(error, "getDataService")
  }
}

// handle sending data to database
export const sendDataService = async (formData: any) => {
  try {
    const response = await axios.post(`${ACTIVE_ROUTE}upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response
  } catch (error) {
    console.log(error, "sendDataService")
  }
}