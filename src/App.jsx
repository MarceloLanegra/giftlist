import { Route, Routes } from "react-router-dom";
import WishList from "./components/WishList";
import WishlistForm from "./components/WishlistForm";
import { useState } from "react";
import WishListBuyers from "./components/WishListBuyers";

function App() {
  const [giftToEdit, setGiftToEdit] = useState(null);
  const [ giftName, setGiftName ] = useState('')

  const handleEditIcon = (gift) => {
    setGiftToEdit(gift);
    setGiftName(gift.gift.name)
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <WishList handleEditIcon={handleEditIcon} giftToEdit={giftToEdit} giftName={giftName}/>
        }
      />
      <Route path="form" element={<WishlistForm />} />
      <Route path="buyers" element={<WishListBuyers/>}/>
    </Routes>
  );
}

export default App;
