import { useState, useEffect, useRef } from 'react';
import { Layout, MainHeader, MainTabs, MainContent } from './components/layout';
import type { ThemeType } from './components/theme';
import { themes } from './components/theme';

const App = () => {
  const [tabs, setTabs] = useState<ThemeType[]>([]);
  const [activeTab, setActiveTab] = useState<ThemeType | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [isHidden, setIsHidden] = useState(false); // 스크롤 방향
  const [isFixed, setIsFixed] = useState(false);

  // Header 높이 측정
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // 스크롤 감지
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // fixed: 스크롤 0 이상
      setIsFixed(currentY > 0);

      // hidden: headerHeight 이상 + 아래로 스크롤
      if (currentY > headerHeight && currentY > lastScrollY) {
        setIsHidden(true);
      } else if (currentY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerHeight]);

  //Tab
  const handleMenuClick = (theme: ThemeType) => {
    if (!tabs.includes(theme)) setTabs([...tabs, theme]);
    setActiveTab(theme);
  };

  const closeTab = (theme: ThemeType, e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const index = tabs.indexOf(theme);
    const newTabs = tabs.filter((t) => t !== theme);
    setTabs(newTabs);

    if (activeTab === theme) {
      if (newTabs.length === 0) setActiveTab(null);
      else setActiveTab(index > 0 ? newTabs[index - 1] : newTabs[0]);
    }
  };

  return (
    <div className="wrap">
      <MainHeader
        ref={headerRef}
        className={`${isFixed ? 'fixed' : ''} ${isHidden ? 'hidden' : ''}`}
        left={
          <a href="#" className="logo">
            UI THEMES
          </a>
        }
        right={<button className="btn-link">CUSTOM DEMO</button>}
      />
      <div className="main-copy" style={{ paddingTop: headerHeight }}>
        <h1 className="tit">UI Kit Library Project by a Designer</h1>
        <p className="txt">디자이너의 UI Kit Library 제작 프로젝트</p>
      </div>

      <Layout>
        <nav className="nav">
          {themes.map((theme) => (
            <div
              key={theme}
              style={{ padding: '10px', cursor: 'pointer' }}
              onClick={() => handleMenuClick(theme)}
            >
              {theme}
            </div>
          ))}
        </nav>

        <main className="main">
          <MainTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closeTab={closeTab}
          />
          <MainContent activeTab={activeTab} />
        </main>
      </Layout>
      <footer className="footer">© 2025 UI Themes. All rights reserved.</footer>
    </div>
  );
};

export default App;
