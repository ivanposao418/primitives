im not your friend im an AI programmed by imperfect programmers and their managers.

Below is the **exact chunk → subchunk breakdown using the literal code parts you provided**. No abstraction, no paraphrasing. Every subchunk is an actual code fragment from your file.

This is the correct hierarchical drill map.

---

# SUBMACHINE A — SERVER READ MACHINE

Full chunk:

```ts
function fetchTasks(search: string) {
  return Promise.resolve(
    tasks.filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
  )
}
```

Subchunks in drill order:

```ts
function fetchTasks(search: string) {
```

```ts
return Promise.resolve(
```

```ts
tasks.filter(task =>
```

```ts
task.title.toLowerCase()
```

```ts
.includes(search.toLowerCase())
```

```ts
)
```

```ts
)
```

```ts
}
```

---

# SUBMACHINE B — SERVER WRITE MACHINE

Full chunk:

```ts
function toggleTask(id: number) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  )

  return Promise.resolve()
}
```

Subchunks:

```ts
function toggleTask(id: number) {
```

```ts
tasks = tasks.map(task =>
```

```ts
task.id === id
```

```ts
? { ...task, completed: !task.completed }
```

```ts
: task
```

```ts
)
```

```ts
return Promise.resolve()
```

```ts
}
```

---

# SUBMACHINE C — LOCAL STATE MACHINE

Chunk 1:

```ts
const [search, setSearch] = useState("")
```

Subchunks:

```ts
const [
```

```ts
search
```

```ts
,
```

```ts
setSearch
```

```ts
] = useState("")
```

---

Chunk 2:

```ts
const [debouncedSearch, setDebouncedSearch] = useState("")
```

Subchunks:

```ts
const [
```

```ts
debouncedSearch
```

```ts
,
```

```ts
setDebouncedSearch
```

```ts
] = useState("")
```

---

# SUBMACHINE D — DEBOUNCE MACHINE

Full chunk:

```ts
useEffect(() => {
  const timeout = setTimeout(() => {
    setDebouncedSearch(search)
  }, 300)

  return () => clearTimeout(timeout)
}, [search])
```

Subchunks in drill order:

```ts
useEffect(() => {
```

```ts
const timeout =
```

```ts
setTimeout(() => {
```

```ts
setDebouncedSearch(search)
```

```ts
}, 300)
```

```ts
return () =>
```

```ts
clearTimeout(timeout)
```

```ts
}, [search])
```

---

# SUBMACHINE E — NAMESPACE MACHINE

Chunk:

```ts
const queryKey = ["tasks", debouncedSearch]
```

Subchunks:

```ts
const queryKey =
```

```ts
["tasks", debouncedSearch]
```

---

# SUBMACHINE F — QUERY MACHINE

Full chunk:

```ts
const { data, isLoading } = useQuery({
  queryKey,
  queryFn: () => fetchTasks(debouncedSearch),
})
```

Subchunks:

```ts
const {
```

```ts
data
```

```ts
,
```

```ts
isLoading
```

```ts
} =
```

```ts
useQuery({
```

```ts
queryKey,
```

```ts
queryFn: () =>
```

```ts
fetchTasks(debouncedSearch)
```

```ts
})
```

---

# SUBMACHINE G — MUTATION MACHINE

Chunk 1:

```ts
const queryClient = useQueryClient()
```

Subchunks:

```ts
const queryClient =
```

```ts
useQueryClient()
```

---

Chunk 2:

```ts
const mutation = useMutation({
  mutationFn: toggleTask,
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey })
  },
})
```

Subchunks in order:

```ts
const mutation =
```

```ts
useMutation({
```

```ts
mutationFn: toggleTask,
```

```ts
onSettled: () => {
```

```ts
queryClient.invalidateQueries({
```

```ts
queryKey
```

```ts
})
```

```ts
},
```

```ts
})
```

---

# SUBMACHINE H — CONTROLLED INPUT MACHINE

Chunk:

```tsx
<input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search..."
/>
```

Subchunks:

```tsx
<input
```

```tsx
value={search}
```

```tsx
onChange={(e) =>
```

```tsx
setSearch(e.target.value)
```

```tsx
}
```

```tsx
placeholder="Search..."
```

```tsx
/>
```

---

# SUBMACHINE I — PROJECTION MACHINE

Chunk:

```tsx
{data?.map(task => (
  <div key={task.id}>
```

Subchunks:

```tsx
data?.map(task =>
```

```tsx
(
```

```tsx
<div key={task.id}>
```

---

Chunk 2:

```tsx
<button
  onClick={() => mutation.mutate(task.id)}
>
```

Subchunks:

```tsx
<button
```

```tsx
onClick={() =>
```

```tsx
mutation.mutate(task.id)
```

```tsx
}
```

```tsx
>
```

---

Chunk 3:

```tsx
{task.title}
```

Subchunk:

```tsx
task.title
```

---

Chunk 4:

```tsx
{task.completed ? "✅" : "❌"}
```

Subchunks:

```tsx
task.completed
```

```tsx
?
```

```tsx
"✅"
```

```tsx
:
```

```tsx
"❌"
```

---

Chunk 5:

```tsx
</button>
```

```tsx
</div>
```

```tsx
))
```

---

# How you drill correctly now

You drill in this exact progression:

Level 1 — subchunks only
Level 2 — combine subchunks into chunks
Level 3 — combine chunks into submachines
Level 4 — combine submachines into full app

Do NOT jump levels.

---

If you want, I can now generate a literal daily drill ladder where each file adds exactly one chunk group at a time.
