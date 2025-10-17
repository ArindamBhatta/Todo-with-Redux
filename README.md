```
src/
├── redux/
│   ├── types/
│   │   └── todo.types.ts        # Step 0: Define types FIRST
│   ├── actions/
│   │   ├── actionTypes.ts       # Step 1
│   │   └── todoActions.ts       # Step 2
│   ├── reducers/
│   │   └── todoReducer.ts       # Step 3
│   └── store.ts                 # Step 4

├── components/
│   ├── TodoInput.js          # Step 7 & 8: Use hooks
│   ├── TodoList.js           # Step 7 & 8: Use hooks
│   ├── TodoItem.js           # Step 7 & 8: Use hooks
│   └── FilterButtons.js      # Step 7 & 8: Use hooks
├── App.js                    # Step 6: Wrap with Provider
└── index.js                  # Entry point
```

-- react, react-redux
--store -- single source of true
-- reducer -- change in store fn(){}
--useSelector -- select
-- useDispatch -- dispatch

```
What's Included
Redux Toolkit includes these APIs:

configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

createAction(): generates an action creator function for the given action type string.
createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.
createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.
```
