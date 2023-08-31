import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "../../Firebase/Config";

export const addGiftToFirestore = createAsyncThunk(
  "gifts/addGiftToFirestore",
  async (gift) => {
    const addGiftRef = await addDoc(collection(db, "Gifts"), gift);
    const newGift = { id: addGiftRef.id, gift };
    return newGift;
  }
);

export const fetchGifts = createAsyncThunk("gifts/fetchGifts", async () => {
  const querySnapshot = await getDocs(collection(db, "Gifts"));
  const gifts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    gift: doc.data(),
  }));
  return gifts;
});

export const updateGift = createAsyncThunk(
  "gift/updateGift",
  async (editedGift) => {
    const gifts = await getDocs(collection(db, "Gifts"));
    for (var snap of gifts.docs) {
      if (snap.id === editedGift.id) {
        const giftRef = doc(db, "Gifts", snap.id);
        await updateDoc(giftRef, {
          buyers: arrayUnion(editedGift.gift.buyers),
        });
      }
    }
    return editedGift;
  }
);

const giftsSlice = createSlice({
  name: "Gifts",
  initialState: {
    giftsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addGiftToFirestore.fulfilled, (state, action) => {
        state.giftsArray.push(action.payload);
      })
      .addCase(fetchGifts.fulfilled, (state, action) => {
        state.giftsArray = action.payload;
      })
      .addCase(updateGift.fulfilled, (state, action) => {
        const { id, gift } = action.payload;
        const giftIndex = state.giftsArray.findIndex((gift) => gift.id === id);
        if (giftIndex !== -1) {
          state.giftsArray[giftIndex] = { id: id, gift };
        }
      });
  },
});

export default giftsSlice.reducer;
