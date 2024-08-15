// import { useRef, useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// const TestComponents = (props) => {
//   const [query, setQuery] = useState('');
//   const [selected, setSelected] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const inputRef = useRef(null);

//   const tags = ['Aasdw', 'basdw', 'cdwad', 'dxy','xyz'];

//   const filteredTags = tags.filter(
//     (item) =>
//       item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
//       !selected.includes(item)
//   );

//   // const isDisable =
//   //   !query?.trim() ||
//   //   selected.filter(
//   //     (item) =>
//   //       item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
//   //   )?.length;

//   // console.log(filteredTags)
//   console.log(selected);

//   return (
//     <div className="sm:col-span-6 d-flex">
//       <div className="bg-slate-950 p-4 rounded-md ">
//         <div className="relative  text-sm">

//           {/* tags display and clear all within div */}
//           {selected?.length ? (
//             <div className="bg-slate-800 w-auto relative text-xs flex flex-wrap gap-1 p-2 mb-2">
//               {selected.map((tag) => {
//                 return (
//                   <div
//                     key={tag}
//                     className="rounded-full w-fit py-1.5 px-3 border border-gray-400 bg-gray-50 text-gray-500
//                   flex items-center gap-2"
//                   >
//                     {tag}
//                     <div
//                       // onChange={() => changeavanue(selected)}
//                       onMouseDown={(e) => e.preventDefault()}
//                       onClick={() =>
//                         setSelected(selected.filter((i) => i !== tag))
//                       }
//                     >
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     </div>
//                   </div>
//                 );
//               })}
//               <div className="w-full text-right">
//                 <span
//                   className="text-gray-400 cursor-pointer"
//                   onClick={() => {
//                     setSelected([]);
//                     inputRef.current?.focus();
//                   }}
//                 >
//                   Clear all
//                 </span>
//               </div>
//             </div>
//           ) : null}

//           {/* input field */}
//           <div className="card flex items-center justify-between p-3 gap-2.5">
           
//             <input
//               ref={inputRef}
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value.trimStart())}
//               placeholder="Search or Create tags"
//               //   className=" text-sm flex-1 caret-rose-600"
//               className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-m sm:text-sm sm:leading-6"'
//               onFocus={() => setMenuOpen(true)}
//               onBlur={() => setMenuOpen(false)}
//               //below onKeydown is used to enter a custom value into the tag
//               // onKeyDown={(e) => {
//               //   if (e.key === 'Enter' && !isDisable) {
//               //     setSelected((prev) => [...prev, query]);
//               //     setQuery('');
//               //     setMenuOpen(true);
//               //   }
//               // }}
//             />
//           </div>

//           {/* Menu's */}
//           {menuOpen ? (
//             <div className="bg-red-500 card absolute w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200">
//               <ul className="w-full">
//                 {filteredTags?.length ? (
//                   filteredTags.map((tag, i) => (
//                     <li
//                       key={tag}
//                       className="p-2 cursor-pointer hover:bg-rose-50 hover:text-rose-500 rounded-md w-full"
//                       onMouseDown={(e) => e.preventDefault()}
//                       onClick={() => {
//                         setMenuOpen(true);
//                         setSelected((prev) => [...prev, tag]);
//                         setQuery('');
                        
//                       }}
//                     >
//                       {tag}
//                     </li>
//                   ))
//                 ) : (
//                   <li className="p-2 text-gray-500">No options available</li>
//                 )}
//               </ul>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestComponents;
