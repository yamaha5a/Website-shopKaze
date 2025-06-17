import './App.css';
import { useRoutes } from 'react-router-dom';
import ClientLayout from './layout/client/Clientlayout';
import Homeclient from './pages/client/Homeclient';
import Shopclient from './pages/client/ShopClient';
import Shopdetail from './pages/client/Shopdetail';
import ShopCart from './pages/client/ShopCart';
import CheckoutClient from './pages/client/Checkout';
import ContactClient from './pages/client/Contact';
import BlogClient from './pages/client/Blog';

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <ClientLayout showBanner={true}>
        <Homeclient />
      </ClientLayout>
    },
    {
      path: "/shop",
      element: <ClientLayout showBanner={false}>
        <Shopclient />
      </ClientLayout>
    },
    {
      path: "/shop/detail",
      element: <ClientLayout showBanner={false}>
        <Shopdetail/>
      </ClientLayout>
    },
    
    {
      path: "/shop/cart",
      element: <ClientLayout showBanner={false}>
        <ShopCart/>
      </ClientLayout>
    },
    {
      path: "/shop/checkout",
      element: <ClientLayout showBanner={false}>
        <CheckoutClient/>
      </ClientLayout>
    },
    {
      path: "/shop/contact",
      element: <ClientLayout showBanner={false}>
        <ContactClient/>
      </ClientLayout>
    },
    
    {
      path: "/shop/blog",
      element: <ClientLayout showBanner={false}>
        <BlogClient/>
      </ClientLayout>
    }
    
  ]);

  return <>{element}</>;
}

export default App;
