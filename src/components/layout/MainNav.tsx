import { useState } from 'react';
import { Select, Icon, Button } from '@/components/ui';
import { ThemeType, fonts, FontType } from '@/components/theme';

interface MainNavProps {
  themes: readonly ThemeType[];
  onMenuClick: (theme: ThemeType) => void;
  selectedFont: FontType;
  onFontChange: (font: FontType) => void;
  isDark: boolean;
  setIsDark: (v: boolean | ((v: boolean) => boolean)) => void;
}

const MainNav: React.FC<MainNavProps> = ({
  themes,
  onMenuClick,
  selectedFont,
  onFontChange,
  isDark,
  setIsDark,
}) => {
  const [navOpen, setNavOpen] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  return (
    <nav className={`nav${navOpen ? ' open' : ''}`}>
      <div className="sticky">
        <h4 className="nav-tit">
          Theme
          <Button
            className="btn-mode icon xsmall"
            onClick={() => setIsDark((v) => !v)}
            aria-pressed={isDark}
          >
            <Icon name={isDark ? 'light_mode' : 'dark_mode'} />
          </Button>
        </h4>
        <div className="nav-list">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => {
                onMenuClick(theme);
                if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                  setNavOpen(false);
                }
              }}
              className={`nav-item ${theme.toLowerCase()}`}
            >
              {theme}
            </button>
          ))}
        </div>
        <h4 className="nav-tit">Font</h4>
        <Select
          className="small"
          width="100%"
          type="dropdown"
          value={selectedFont}
          options={fonts.map((f) => ({ label: f, value: f }))}
          onChange={(value: string) => onFontChange(value as FontType)}
        />
      </div>
      <Button
        className="btn-setting black icon xsmall"
        onClick={() => setNavOpen((v) => !v)}
        aria-pressed={navOpen}
      >
        <Icon name={navOpen ? 'keyboard_double_arrow_left' : 'settings'} fill />
      </Button>
    </nav>
  );
};

export default MainNav;
