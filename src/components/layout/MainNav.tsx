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
  return (
    <nav className="nav">
      <div className="sticky">
        <h4 className="nav-tit">
          Theme
          <Button
            className="btn-mode icon xsmall"
            onClick={() => setIsDark((v) => !v)}
            aria-pressed={isDark}
          >
            <Icon name={isDark ? 'light_mode' : 'dark_mode'} size="1.5em" />
          </Button>
        </h4>
        <div className="nav-list">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => onMenuClick(theme)}
              className={`nav-item ${theme.toLowerCase()}`}
            >
              {theme}
            </button>
          ))}
        </div>
        <h4 className="nav-tit">Font</h4>
        <div className="nav-item">
          <Select
            className="small"
            width="100%"
            type="dropdown"
            value={selectedFont}
            options={fonts.map((f) => ({ label: f, value: f }))}
            onChange={(value: string) => onFontChange(value as FontType)}
          />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
