import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Note from "@/pages/note";
import Accounting from "@/pages/accounting";
import AccountingItem from "@/pages/accounting/record";
import AccountingRecord from "@/pages/accounting/item";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/note",
        element: <Note />,
      },
      {
        path: "/accounting",
        element: <Accounting />,
      },
      {
        path: "/accounting/item",
        element: <AccountingItem />,
      },
      {
        path: "/accounting/record",
        element: <AccountingRecord />,
      },
    ],
  },
]);

export default router;
