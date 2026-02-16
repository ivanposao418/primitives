import { useState, useEffect } from "react"
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"

/*
FAKE SERVER STATE
(server state primitive)
*/
let tasks = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn Query", completed: false },
]

function fetchTasks(search: string) {
  return Promise.resolve(
    tasks.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
  )
}

function toggleTask(id: number) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  )

  return Promise.resolve()
}

/*
COMPONENT = COMPOSITION OF PRIMITIVES
*/
export default function App() {

  /*
  PRIMITIVE 1 — STATE CELL
  local UI state primitive
  */
  const [search, setSearch] = useState("")

  /*
  PRIMITIVE 2 — STABILIZATION (DEBOUNCE)
  controls timing of state changes
  */
  const [debouncedSearch, setDebouncedSearch] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)

    return () => clearTimeout(timeout)
  }, [search])

  /*
  PRIMITIVE 3 — NAMESPACE
  identifies specific cache state
  */
  const queryKey = ["tasks", debouncedSearch]

  /*
  PRIMITIVE 4 — QUERY
  fetch server state
  */
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchTasks(debouncedSearch),
  })

  /*
  PRIMITIVE 5 — MUTATION
  modify server state
  */
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: toggleTask,

    onSettled: () => {
      /*
      PRIMITIVE 6 — INVALIDATION
      refresh server state
      */
      queryClient.invalidateQueries({ queryKey })
    },
  })

  /*
  PRIMITIVE 7 — PROJECTION
  convert state → UI
  */
  return (
    <div style={{ padding: 20 }}>

      {/* PRIMITIVE 8 — CONTROLLED INPUT */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />

      {isLoading && <div>Loading...</div>}

      <div>
        {data?.map(task => (
          <div key={task.id}>

            {/* mutation primitive triggered by user */}
            <button
              onClick={() => mutation.mutate(task.id)}
            >
              {task.title}
              {" "}
              {task.completed ? "✅" : "❌"}
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}
