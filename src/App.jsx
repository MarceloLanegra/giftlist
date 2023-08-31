import { Route, Routes } from "react-router-dom";
import WishList from "./components/WishList";
import WishlistForm from "./components/WishlistForm";
import { useState } from "react";

function App() {
  const [giftToEdit, setGiftToEdit] = useState(null);

  const handleEditIcon = (gift) => {
    setGiftToEdit(gift);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <WishList handleEditIcon={handleEditIcon} giftToEdit={giftToEdit} />
        }
      />
      <Route path="form" element={<WishlistForm />} />
    </Routes>
  );
}

export default App;
