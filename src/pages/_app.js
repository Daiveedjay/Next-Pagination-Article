// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// import { AnimatePresence, motion } from "framer-motion";
// import "@/styles/globals.css";

// function MyApp({ Component, pageProps, router }) {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={router.route}
//         initial="pageInitial"
//         animate="pageAnimate"
//         exit="pageExit"
//         variants={{
//           pageInitial: {
//             opacity: 0,
//           },
//           pageAnimate: {
//             opacity: 1,
//             transition: {
//               duration: 0.3,
//             },
//           },
//           pageExit: {
//             opacity: 0,
//             transition: {
//               duration: 0.3,
//             },
//           },
//         }}
//       >
//         <Component {...pageProps} />
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default MyApp;

// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/router";
// import "@/styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={router.asPath}
//           initial="pageInitial"
//           animate="pageAnimate"
//           exit="pageExit"
//           variants={{
//             pageInitial: {
//               y: "100%",
//               opacity: 0,
//             },
//             pageAnimate: {
//               y: 0,
//               opacity: 1,
//               transition: {
//                 duration: 0.3,
//               },
//             },
//             pageExit: {
//               y: "100%",
//               opacity: 0,
//               transition: {
//                 duration: 0.3,
//               },
//             },
//           }}
//         >
//           <Component {...pageProps} key={router.asPath} />
//         </motion.div>
//       </AnimatePresence>
//     </>
//   );
// }

// export default MyApp;

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
