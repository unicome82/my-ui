import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
