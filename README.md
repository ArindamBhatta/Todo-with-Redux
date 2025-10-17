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
