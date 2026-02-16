                    ┌─────────────────────┐
                    │     USER INPUT      │
                    │ types in search box│
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ STATE PRIMITIVE     │
                    │ useState(search)   │
                    │ stores input state │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ STABILIZATION      │
                    │ debounce primitive │
                    │ setTimeout delay  │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ NAMESPACE PRIMITIVE │
                    │ queryKey=["tasks",search]
                    │ selects cache cell │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ QUERY PRIMITIVE     │
                    │ useQuery(fetchTasks)
                    │ pulls server state │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ CACHE STATE CELL    │
                    │ TanStack Query cache
                    │ stores fetched data│
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ PROJECTION PRIMITIVE│
                    │ data.map(...)       │
                    │ converts state → UI│
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │   UI DISPLAYED      │
                    │ user sees tasks     │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ USER ACTION        │
                    │ clicks toggle      │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ MUTATION PRIMITIVE  │
                    │ useMutation(toggle) │
                    │ modifies server     │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ SERVER STATE CELL   │
                    │ database updates    │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ INVALIDATION        │
                    │ invalidateQueries   │
                    │ marks cache stale   │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ QUERY RUNS AGAIN    │
                    │ fresh server state  │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ CACHE UPDATED       │
                    │ new state stored    │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ PROJECTION RUNS     │
                    │ UI refreshes        │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌─────────────────────┐
                    │ USER SEES UPDATED   │
                    │ STATE               │
                    └─────────────────────┘
