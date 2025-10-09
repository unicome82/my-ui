import { Tooltip } from '../util';

interface MainViewProps {
  headerHeight: number | string;
}
const tags = ['React', 'Github', 'ChatGPT', 'Google Fonts', 'Google Symbol', 'SCSS'];

const MainView: React.FC<MainViewProps> = ({ headerHeight }) => {
  return (
    <div className="main-copy" style={{ paddingTop: headerHeight }}>
      <Tooltip button="" right-center click>
        <h1 className="fw100">About</h1>
        <p>
          <br />
          UI Themes는 ChatGPT의 도움을 받아 작업한 저의 첫 React 작업물입니다.
          <br />
          기존 UI Library를 사용하지 않고 직접 제작하게 된 계기는 소스의 구조와 속성을 완벽하게
          이해한 상태에서 커스터마이징 하기 위함입니다.
          <br />
          템플릿화 된 UI Kit는 작업에 효율을 높여줄 것입니다.
        </p>
      </Tooltip>
      <h1 className="tit">UI Kit Library Portfolio by Uni</h1>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainView;
