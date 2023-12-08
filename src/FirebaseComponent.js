import React from "react"
// import { useFirebase } from "gatsby-plugin-firebase"
import firebase from "gatsby-plugin-firebase"

function Component() {
  const [user, setUser] = React.useState()

  // instead of useFirebase, you can use React.useEffect
  // useFirebase(firebase => {
  React.useEffect(() => {
    firebase
      .database()
      .ref("/user")
      .once("value")
      .then(snapshot => {
        setUser(snapshot.val())
      })
  }, [])

  return <p>Hello {user ? user.name : "there"}</p>
}

export default Component