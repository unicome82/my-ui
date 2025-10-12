import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  isDark?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, isDark }) => {
  return <div className={`container${isDark ? ' dark' : ''}`}>{children}</div>;
};

export default Layout;
