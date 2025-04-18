export default function Selector({
  temperament,
  handleChangeInput,
  preferences,
}) {
  return (
    <div className="flex shadow-md items-center w-full ps-4 border border-gray-200 rounded dark:border-gray-700">
      <input
        id={temperament}
        type="checkbox"
        value={temperament}
        name={temperament}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleChangeInput}
        checked={!!preferences.find((pref) => pref == temperament)}
      />
      <label
        htmlFor={temperament}
        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {temperament}
      </label>
    </div>
  );
}
