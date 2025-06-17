import { useState } from 'react';
import Headerclient from '../../components/client/Header';
import Bannerclient from '../../components/client/Banner';
import Footerclient from '../../components/client/Footer';
import { Outlet } from 'react-router-dom';
import Loaderclient from '../../components/client/Loader';

interface ClientLayoutProps {
    children: React.ReactNode;
    showBanner?: boolean;
}

const ClientLayout = ({ children, showBanner = false }: ClientLayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>  
            <Loaderclient isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
            <Headerclient onMenuToggle={handleMenuToggle} />
            {showBanner && <Bannerclient />}
            <Outlet/>
            <main>
                {children}
            </main>
            <Footerclient />
        </>
    );
}

export default ClientLayout;