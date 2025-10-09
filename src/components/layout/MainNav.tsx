import type { ThemeType } from '../theme';

interface MainNavProps {
  themes: readonly ThemeType[];
  onMenuClick: (theme: ThemeType) => void;
}

const MainNav: React.FC<MainNavProps> = ({ themes, onMenuClick }) => {
  return (
    <nav className="nav">
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
    </nav>
  );
};

export default MainNav;
