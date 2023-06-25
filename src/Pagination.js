// import styles from "@/styles/Pagination.module.css";

// export default function Pagination({ data, perpage }) {
//   const { products } = data;

//   const lastPage = Math.ceil(data.limit / perpage);
//   console.log(lastPage);
//   return (
//     <div className={styles.Pagination__container}>
//       {products &&
//         products.map((item) => (
//           <div key={item.id} className={styles.Pagination__item}>
//             <div>
//               <h2>{item.title}</h2>
//               <p>{item.category}</p>
//             </div>
//             <button>${item.price}</button>
//           </div>
//         ))}
//     </div>
//   );
// }

// import { useState } from "react";
// import styles from "@/styles/Pagination.module.css";

// export default function Pagination({ data, perpage }) {
//   const { products } = data;

//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the index of the first and last item to display on the current page
//   const indexOfLastItem = currentPage * perpage;
//   const indexOfFirstItem = indexOfLastItem - perpage;
//   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const lastPage = Math.ceil(products.length / perpage);

//   return (
//     <div className={styles.Pagination__container}>
//       {currentItems.map((item) => (
//         <div key={item.id} className={styles.Pagination__item}>
//           <div>
//             <h2>{item.title}</h2>
//             <p>{item.category}</p>
//           </div>
//           <button>${item.price}</button>
//         </div>
//       ))}

//       <div className={styles.Pagination__controls}>
//         {currentPage > 1 && (
//           <button onClick={() => handlePageChange(currentPage - 1)}>
//             Previous
//           </button>
//         )}

//         {currentPage < lastPage && (
//           <button onClick={() => handlePageChange(currentPage + 1)}>
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

//TODO----
import { useRouter } from "next/router";
import styles from "@/styles/Pagination.module.css";

export default function Pagination({ data, currentPage }) {
  const router = useRouter();
  const { products, lastPage } = data;

  // Handle page change
  const handlePageChange = (pageNumber) => {
    router.push(`/?page=${pageNumber}`);
  };

  return (
    <div className={styles.Pagination__container}>
      {products.map((item) => (
        <div key={item.id} className={styles.Pagination__item}>
          <div>
            <h2>{item.title}</h2>
            <p>{item.category}</p>
          </div>
          <button>${item.price}</button>
        </div>
      ))}

      <div className={styles.Pagination__controls}>
        {currentPage > 1 && (
          <button
            className={styles.Pagination__buttons}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            ⬅ Previous
          </button>
        )}

        {currentPage < lastPage && (
          <button
            className={styles.Pagination__buttons}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next ➡
          </button>
        )}
      </div>
    </div>
  );
}
