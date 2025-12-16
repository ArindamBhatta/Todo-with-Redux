UI
 ├─ useSelector → reads state
 └─ useDispatch → sends actions
                ↓
           Redux Store
                ↓
        Slice Reducers
                ↓
         New State Tree
                ↑
           UI re-renders
