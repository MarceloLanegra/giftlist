import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifts, updateGift } from "../Redux/Store/GiftsSlice";
import { LuSave } from "react-icons/lu";

function WishList({ handleEditIcon, giftToEdit }) {
  const data = useSelector((state) => state.gifts.giftsArray);
  const [buyer, setBuyer] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGifts());
    console.log(data);
  }, []);

  const handleUpdateGift = (e) => {
    e.preventDefault();
    let gift = {
      buyers: buyer,
    };
    dispatch(updateGift({ id: giftToEdit.id, gift }));
    setBuyer('')
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBuyer(value);
  };

  return (
    <div className="relative bg-blue-300">
      <div className="flex flex-col h-screen gap-5 p-4">
        <h1 className="text-3xl text-center">Lista de Regalos</h1>
        <div className="flex flex-col gap-4">
          {data.length > 0 &&
            data.map((gift) => (
              <div className="flex flex-col gap-2" key={gift.id}>
                <div className="flex justify-between">
                  <h6 className="text-lg capitalize">{gift.gift.name}</h6>
                  <button
                    type="button"
                    className="px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:outline-none"
                    onClick={() => handleEditIcon(gift)}
                  >
                    Seleccionar
                  </button>
                </div>
                {/* {gift.gift.isMultiple === "true" && (
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        // onChange={handleInputChange}
                        className="block rounded flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        // value={gift.name}
                      />
                    </div>
                  </div>
                )} */}
              </div>
            ))}
        </div>
      </div>
      <div className="sticky bottom-0 w-full border-t border-black">
        <form onSubmit={handleUpdateGift}>
          <div className="flex gap-4 p-4">
            <div className="flex flex-1 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
              <input
                type="text"
                name="buyer"
                autoComplete="off"
                onChange={handleInputChange}
                className="block rounded-lg flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={buyer}
              />
            </div>
            <button
              type="submit"
              className="items-center flex gap-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              {/* <span>Guardar</span> */}
              <LuSave fontSize={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WishList;
