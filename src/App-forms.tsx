import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function createUser(user: { name: string }) {
  console.log("Saving to server:", user)
  return Promise.resolve()
}

export default function App() {

  // primitive 1 — state cell
  const [name, setName] = useState("")

  const queryClient = useQueryClient()

  // primitive 2 — mutation machine
  const mutation = useMutation({
    mutationFn: createUser,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    }
  })

  // primitive 3 — submit event
  const handleSubmit = () => {
    mutation.mutate({ name })
  }

  return (
    <div>

      {/* primitive 4 — controlled input */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* primitive 5 — submit trigger */}
      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  )
}
