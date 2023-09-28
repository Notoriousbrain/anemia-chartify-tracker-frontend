import axios from "axios"

const route = "https://anemia-chartify-server.onrender.com/"

// handle getting data from database
export const getDataService = async () => {
  try {
    const response = await axios.get(`${route}`)
    return response
  } catch (error) {
    console.log(error, "getDataService")
  }
}

// handle sending data to database
export const sendDataService = async (formData: any) => {
  try {
    const response = await axios.post(`${route}upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response
  } catch (error) {
    console.log(error, "sendDataService")
  }
}
