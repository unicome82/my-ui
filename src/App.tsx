import { useState, useEffect, useRef } from 'react';
import { Layout, MainHeader, MainNav, MainTabs, MainView, MainContent } from '@/components/layout';
import { themes, ThemeType, fonts, FontType } from '@/components/theme';

const App = () => {
  const [tabs, setTabs] = useState<ThemeType[]>([]);
  const [activeTab, setActiveTab] = useState<ThemeType | null>(null);
  const [selectedFont, setSelectedFont] = useState<FontType>(fonts[0]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const mainViewRef = useRef<HTMLDivElement | null>(null);
  const [mainViewHeight, setMainViewHeight] = useState(0);

  const [isHidden, setIsHidden] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Header 높이 측정
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // MainView 높이 측정
  useEffect(() => {
    const updateMainViewHeight = () => {
      if (mainViewRef.current) setMainViewHeight(mainViewRef.current.offsetHeight);
    };
    updateMainViewHeight();
    window.addEventListener('resize', updateMainViewHeight);
    return () => window.removeEventListener('resize', updateMainViewHeight);
  }, []);

  // 스크롤 감지
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // fixed
      setIsFixed(currentY > 0);

      // hidden: MainView 높이 이상 + 스크롤 다운
      if (currentY > mainViewHeight && currentY > lastScrollY) {
        setIsHidden(true);
      } else if (currentY <= mainViewHeight) {
        setIsHidden(false);
      }

      // 스크롤 업
      // else if (currentY < lastScrollY) {
      //   setIsHidden(false);
      // }

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mainViewHeight]);

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
      else setActiveTab(newTabs[index > 0 ? index - 1 : 0] as ThemeType);
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
      <MainView ref={mainViewRef} headerHeight={headerHeight} />

      <Layout isDark={isDark}>
        <MainNav
          themes={themes}
          onMenuClick={handleMenuClick}
          selectedFont={selectedFont}
          onFontChange={setSelectedFont}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <main className="main">
          <MainTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closeTab={closeTab}
          />
          <MainContent activeTab={activeTab} font={selectedFont} />
        </main>
      </Layout>
      <footer className="footer">
        <p className="copyright">© 2025 UI Themes by uni. All rights reserved.</p>
        <a href="#top" className="btn-top">
          TOP
        </a>
      </footer>
    </div>
  );
};

export default App;
