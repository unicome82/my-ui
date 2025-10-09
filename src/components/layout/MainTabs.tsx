import type { ThemeType } from '../theme';
import { Icon } from '../ui';
import { DragScroll } from '../util';

type MainTabsProps = {
  tabs: ThemeType[];
  activeTab: ThemeType | null;
  setActiveTab: React.Dispatch<React.SetStateAction<ThemeType | null>>;
  closeTab: (tab: ThemeType, e: React.MouseEvent<HTMLElement>) => void;
};

const MainTabs = ({ tabs, activeTab, setActiveTab, closeTab }: MainTabsProps) => {
  return (
    <DragScroll>
      <ul className="page-tab">
        {/* 항상 보이는 Default 탭 */}
        <li
          onClick={() => setActiveTab(null)}
          className={`tab ${activeTab === null ? 'current' : ''}`}
        >
          Default
        </li>

        {/* 선택된 테마 탭들 */}
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${activeTab === tab ? 'current' : ''}`}
          >
            {tab}
            <button onClick={(e) => closeTab(tab, e)} className="btn-close">
              <Icon name="close" fill size={14} />
            </button>
          </li>
        ))}
      </ul>
    </DragScroll>
  );
};

export default MainTabs;
