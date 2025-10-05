import { Button, Icon, Checkbox, Radio, Select, Input, Textarea } from '../ui';
import type { ThemeType } from '../theme';
import { themeMap } from '../theme';

type MainContentProps = {
  activeTab: ThemeType | null;
};

const MainContent = ({ activeTab }: MainContentProps) => {
  // activeTab이 없으면 기본 className을 적용
  const className = activeTab ? themeMap[activeTab] : '';
  return (
    <div className={'theme-wrap ' + className}>
      <h1>{className || 'default'}</h1>
      <Button className="primary" disabled>
        저장하기
      </Button>

      <Button>
        <Icon name="home" fill size={32} />홈
      </Button>
      <Button>
        <Icon name="search" fill size={20} />
      </Button>

      <Checkbox label="CHECKBOX" checked />

      <Radio
        name="Radio1"
        options={[{ label: 'RADIO 1' }, { label: 'RADIO 2' }, { label: 'RADIO 3' }]}
        defaultSelected="RADIO 1"
      />

      <Select
        options={[
          { label: '사과', value: 'apple' },
          { label: '바나나', value: 'banana' },
          { label: '체리', value: 'cherry' },
        ]}
        defaultValue="banana"
      />

      <Select
        type="dropdown"
        options={[
          { label: '사과', value: 'apple' },
          { label: '바나나', value: 'banana' },
          { label: '체리', value: 'cherry' },
        ]}
        defaultValue="banana"
      />

      <div>
        <Input placeholder="텍스트 입력" />

        <Input type="password" placeholder="비밀번호" />

        <Input type="email" placeholder="이메일" />

        <Input type="number" placeholder="숫자 입력" />

        <Input placeholder="비활성화" disabled />

        <Input placeholder="읽기전용" readOnly />

        <Input placeholder="커스텀 클래스" className="my-input" />
        <Textarea placeholder="텍스트를 입력해주세요." rows={6} />
      </div>
    </div>
  );
};

export default MainContent;
