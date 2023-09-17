import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifts } from "../Redux/Store/GiftsSlice";

function WishListBuyers() {

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
                  <div className="flex flex-col justify-between gap-4">
                    <h6 className="text-base">{gift.gift.name}</h6>
                    {gift.gift.buyers.map((buyer, index)=>(
                      <p key={index} className="pl-4 text-sm text-blue-400">- {buyer}</p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishListBuyers