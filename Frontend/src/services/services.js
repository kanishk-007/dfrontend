import axios from "axios"

export const apiCall = async () => {
  const url = "https://kkbackend.onrender.com/users/userdata"
  const token = localStorage.getItem('token')
  const { data } = await axios.get(url, { headers: { Authorization: "Bearer " + token } })
  return data
}

export const tokenApi = async (credentials) => {
  const data = await axios.post("https://kkbackend.onrender.com/users/userlogin", { ...credentials })
  return data
}

export const signUpApi = async (credentials) => {
  const data = await axios.post("https://kkbackend.onrender.com/users/usersignup", { ...credentials })
  return data
}