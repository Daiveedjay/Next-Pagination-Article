// import Head from "next/head";
// import Pagination from "@/Pagination";
// const PER_PAGE = 5;
// export default function Home({ data }) {
//   console.log(data);
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1>Pagination Header</h1>
//       <Pagination data={data} perpage={PER_PAGE} />
//     </>
//   );
// }

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const res = await fetch(`https://dummyjson.com/products?page=${page}`);

//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

import Head from "next/head";
import Pagination from "@/Pagination";
const PER_PAGE = 5;
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home({ data, currentPage }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Pagination Component, Page: {data.page}</h1>

      <motion.div
        key={router.asPath}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            y: "100%",
            opacity: 0,
          },
          pageAnimate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
          pageExit: {
            y: "100%",
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        <Pagination data={data} currentPage={currentPage} />
      </motion.div>
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();

  const totalItems = data.products.length;
  const lastPage = Math.ceil(totalItems / PER_PAGE);

  const currentPage = +page;
  const validPage =
    currentPage > 0 && currentPage <= lastPage ? currentPage : 1;

  const start = (validPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const paginatedData = data.products.slice(start, end);

  return {
    props: {
      data: {
        products: paginatedData,
        totalItems,
        lastPage,
        page,
      },
      currentPage: validPage,
    },
  };
}

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const res = await fetch(`https://dummyjson.com/products`);
//   const data = await res.json();
//   const totalItems = data.products.length;
//   const lastPage = Math.ceil(totalItems / PER_PAGE);
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// }
