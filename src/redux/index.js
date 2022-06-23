import { configureStore } from "@reduxjs/toolkit"
import cardsReducer from "./cardReducer"

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  }
})