import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifts } from "../Redux/Store/GiftsSlice";

import WishListUpdate from "./WishListUpdate";

function WishList({ handleEditIcon, giftToEdit }) {
  const data = useSelector((state) => state.gifts.giftsArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGifts());
  }, []);

  return (
    <div className="relative h-screen bg-beige">
      <div className="min-h-full gap-6 p-4 text-gray bg-beige font-magnolia">
        <div className="flex flex-col max-w-screen-md gap-6 m-auto">
          <h1 className="text-3xl font-semibold text-center">
            Lista de Regalos
          </h1>
          <div className="flex flex-col gap-6">
            {data.length > 0 &&
              data.map((gift) => (
                <div className="flex flex-col gap-2" key={gift.id}>
                  <div className="flex items-center justify-between gap-4">
                    <h6 className="text-base">{gift.gift.name}</h6>
                    {!gift.gift.isMultiple && gift.gift.buyers.length > 0 ? (
                      <button
                        disabled
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-milk-dark-pink focus:outline-none"
                        onClick={() => handleEditIcon(gift)}
                      >
                        Ya registrado
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center text-white rounded-lg active:scale-90 bg-milk-pink focus:outline-none lg:hover:scale-110 lg:active:scale-100 lg:active:bg-milk-dark-pink lg:hover:bg-milk-dark-pink"
                        onClick={() => handleEditIcon(gift)}
                      >
                        Seleccionar
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <WishListUpdate giftToEdit={giftToEdit} />
    </div>
  );
}

export default WishList;
