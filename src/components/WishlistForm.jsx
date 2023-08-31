import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGiftToFirestore } from "../Redux/Store/GiftsSlice";

function WishlistForm() {
  const initialStateValues = {
    name: "",
    isMultiple: false,
    buyers: []
  };

  const [gift, setGift] = useState(initialStateValues);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGift({ ...gift, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGift({ ...initialStateValues });
    dispatch(addGiftToFirestore(gift));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Regalo
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  value={gift.name}
                />
              </div>
            </div>
          </div>
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Regalo múltiple?
            </legend>
            <div className="mt-4 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="multiple"
                  name="isMultiple"
                  type="radio"
                  value={true}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                />
                <label
                  htmlFor="multiple"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sí
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="only"
                  name="isMultiple"
                  value={false}
                  onChange={handleInputChange}
                  type="radio"
                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600"
                />
                <label
                  htmlFor="only"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default WishlistForm;
