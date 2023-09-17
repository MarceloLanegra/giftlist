import { useEffect, useState } from "react";
import { LuSave } from "react-icons/lu";
import { updateGift } from "../Redux/Store/GiftsSlice";
import { useDispatch } from "react-redux";

function WishListUpdate({ giftToEdit }) {
  const [buyer, setBuyer] = useState("");
  const [giftSelected, setGiftSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (giftToEdit != null) {
      setGiftSelected(giftToEdit.gift.name);
    }
  }, [giftToEdit]);

  const handleUpdateGift = (e) => {
    e.preventDefault();
    if (buyer != "") {
      let gift = {
        name: giftToEdit.gift.name,
        isMultiple: giftToEdit.gift.isMultiple,
        buyers: buyer,
      };
      dispatch(updateGift({ id: giftToEdit.id, gift }));
      setBuyer("");
      setGiftSelected("");
      setOpenModal(true);
      setTimeout(() => {
        setOpenModal(false);
      }, 3500);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setBuyer(value);
  };

  return (
    <div className="sticky bottom-0 bg-beige">
      <div className="w-full max-w-screen-md m-auto border-t border-black bg-beige font-magnolia">
        <form onSubmit={handleUpdateGift}>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-base">Regalo: {giftSelected}</p>
            <span className="text-sm text-slate-500">Ingrese su nombre:</span>
            <div className="flex gap-4 ">
              <div className="flex flex-1 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                <input
                  type="text"
                  name="buyer"
                  autoComplete="off"
                  onChange={handleInputChange}
                  className="block rounded-lg flex-1 border-0 bg-white py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 font-magnolia"
                  value={buyer}
                />
              </div>
              <button
                type="submit"
                className="items-center flex gap-2 text-white bg-milk-pink focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center active:scale-90 lg:hover:scale-110 lg:active:scale-100 lg:active:bg-milk-dark-pink lg:hover:bg-milk-dark-pink"
              >
                <LuSave fontSize={18} />
              </button>
            </div>
          </div>
        </form>
        {openModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="p-6 bg-white rounded-lg">
                <h1>Registrado, ¡muchas gracias!</h1>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default WishListUpdate;
