import Dashboard from "@/apps/user/pages/Dashboard";
import CustomerList from "@/apps/user/pages/List/CustomerList";



const userRoutes = [
  { path: "/", element: <Dashboard /> },
  { path: "/customer-list", element: <CustomerList /> },

  
];

export default userRoutes;
