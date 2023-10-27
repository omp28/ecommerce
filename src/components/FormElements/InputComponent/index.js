// // reusable form according to need
// export default function InputComponents({
//   label,
//   placeholder,
//   type,
//   onchange,
//   value,
// }) {
//   return (
//     <div className=" relative">
//       <p className=" pt-0 pr-2 ab pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600">
//         {label}
//       </p>
//       <input
//         placeholder={placeholder}
//         type={type || "text"}
//         value={value}
//         onChange={onchange}
//         className=" border placeholder:bg-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
//       />
//     </div>
//   );
// }

export default function InputComponent({
  label,
  placeholder,
  type,
  onChange,
  value,
}) {
  return (
    <div className="relative ">
      <p className="pt-0 pr-2 absolute pb-0 pl-2 -mt-3 mr-0 mb-0  ml-2 font-medium text-gray-600">
        {label}
      </p>
      <input
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
        className=" focus:outline-none border focus:border-black w-full pt-4 pr-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
      />
    </div>
  );
}
