import React from "react"
import { Auth, Amplify } from "aws-amplify"
import Heading from "./components/Heading"
import awsExports from "./aws-exports"

Amplify.configure(awsExports)

const App: React.FC = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [user, setUser] = React.useState<any>()

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      const user = await Auth.signIn(email, password)
      console.info(user)
      setUser(user)
    } catch (error) {
      console.log("error signing in", error)
    }
  }

  return (
    <div>
      <Heading content={`Hello ${user?.attributes?.email}`} />

      <form onSubmit={signIn}>
        <label>
          email
          <input value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>

        <label>
          password
          <input value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>

        <button>sign in</button>
      </form>

      <button onClick={() => Auth.signOut()}>sign out</button>
    </div>
  )
}

export default App
