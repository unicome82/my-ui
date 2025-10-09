import { Button, Icon, Checkbox, Radio, Select, Input, Textarea } from '../ui';
import { Anchor } from '../util';
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
      <Anchor top="50px" />
      <h1 className="theme-tit">{activeTab || 'Default'}</h1>
      {/* Text */}
      <section id="text" data-anchor-name="Text">
        <h4 className="sub-tit">Text</h4>
        <h1 className="tit fw100">h1.tit AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</h1>
        <h1 className="tit">h1.tit AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</h1>
        <h2 className="tit">h2.tit AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</h2>
        <h3 className="tit">h3.tit AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</h3>
        <h4 className="tit">h4.tit AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</h4>
        <h5 className="tit">h5.tit AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</h5>
        <p className="txt">txt AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*</p>
        <a href="#" className="txt link">
          txt.link AaBbCcDdEe 가나다라마바사 1234567890 !@#$%^*
        </a>
      </section>
      {/* Button */}
      <section id="button" data-anchor-name="Button" className="flex-wrap">
        <div className="col">
          <h4 className="sub-tit">Button</h4>
          {/* Default */}
          <div className="row">
            <Button className="icon">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button>
              <Icon name="search" fill size={`1.25em`} />
              Default
            </Button>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
          </div>
          {/* Gray */}
          <div className="row">
            <Button className="gray icon">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="gray">
              <Icon name="search" fill size={`1.25em`} />
              Gray
            </Button>
            <Button className="gray">Gray</Button>
            <Button className="gray" disabled>
              Disabled
            </Button>
          </div>
          {/* Black */}
          <div className="row">
            <Button className="black icon">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="black">
              <Icon name="search" fill size={`1.25em`} />
              Black
            </Button>
            <Button className="black">Black</Button>
            <Button className="black" disabled>
              Disabled
            </Button>
          </div>
          {/* Primary */}
          <div className="row">
            <Button className="primary icon">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="primary">
              <Icon name="search" fill size={`1.25em`} />
              Primary
            </Button>
            <Button className="primary">Primary</Button>
            <Button className="primary" disabled>
              Disabled
            </Button>
          </div>
          {/* Secondary */}
          <div className="row">
            <Button className="secondary icon">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="secondary">
              <Icon name="search" fill size={`1.25em`} />
              Secondary
            </Button>
            <Button className="secondary">Secondary</Button>
            <Button className="secondary" disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className="col">
          <h4 className="sub-tit">Button S</h4>
          {/* Default */}
          <div className="row">
            <Button className="icon small">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="small">
              <Icon name="search" fill size={`1.25em`} />
              Default
            </Button>
            <Button className="small">Default</Button>
            <Button className="small" disabled>
              Disabled
            </Button>
          </div>
          {/* Gray */}
          <div className="row">
            <Button className="gray icon small">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="gray small">
              <Icon name="search" fill size={`1.25em`} />
              Gray
            </Button>
            <Button className="gray small">Gray</Button>
            <Button className="gray small" disabled>
              Disabled
            </Button>
          </div>
          {/* Black */}
          <div className="row">
            <Button className="black icon small">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="black small">
              <Icon name="search" fill size={`1.25em`} />
              Black
            </Button>
            <Button className="black small">Black</Button>
            <Button className="black small" disabled>
              Disabled
            </Button>
          </div>
          {/* Primary */}
          <div className="row">
            <Button className="primary icon small">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="primary small">
              <Icon name="search" fill size={`1.25em`} />
              Primary
            </Button>
            <Button className="primary small">Primary</Button>
            <Button className="primary small" disabled>
              Disabled
            </Button>
          </div>
          {/* Secondary */}
          <div className="row">
            <Button className="secondary icon small">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="secondary small">
              <Icon name="search" fill size={`1.25em`} />
              Secondary
            </Button>
            <Button className="secondary small">Secondary</Button>
            <Button className="secondary small" disabled>
              Disabled
            </Button>
          </div>
        </div>
        <div className="col">
          <h4 className="sub-tit">Button XS</h4>
          {/* Default */}
          <div className="row">
            <Button className="icon xsmall">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="xsmall">
              <Icon name="search" fill size={`1.25em`} />
              Default
            </Button>
            <Button className="xsmall">Default</Button>
            <Button className="xsmall" disabled>
              Disabled
            </Button>
          </div>
          {/* Gray */}
          <div className="row">
            <Button className="gray icon xsmall">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="gray xsmall">
              <Icon name="search" fill size={`1.25em`} />
              Gray
            </Button>
            <Button className="gray xsmall">Gray</Button>
            <Button className="gray xsmall" disabled>
              Disabled
            </Button>
          </div>
          {/* Black */}
          <div className="row">
            <Button className="black icon xsmall">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="black xsmall">
              <Icon name="search" fill size={`1.25em`} />
              Black
            </Button>
            <Button className="black xsmall">Black</Button>
            <Button className="black xsmall" disabled>
              Disabled
            </Button>
          </div>
          {/* Primary */}
          <div className="row">
            <Button className="primary icon xsmall">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="primary xsmall">
              <Icon name="search" fill size={`1.25em`} />
              Primary
            </Button>
            <Button className="primary xsmall">Primary</Button>
            <Button className="primary xsmall" disabled>
              Disabled
            </Button>
          </div>
          {/* Secondary */}
          <div className="row">
            <Button className="secondary icon xsmall">
              <Icon name="search" fill size={`1.25em`} />
            </Button>
            <Button className="secondary xsmall">
              <Icon name="search" fill size={`1.25em`} />
              Secondary
            </Button>
            <Button className="secondary xsmall">Secondary</Button>
            <Button className="secondary xsmall" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </section>
      {/* Checkbox, Radio */}
      <section id="checkbox" data-anchor-name="Checkbox, Radio" className="flex-wrap">
        <div className="col">
          <h4 className="sub-tit">Checkbox</h4>
          <div className="row">
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox" checked />
            <Checkbox label="Checkbox" disabled checked />
            <Checkbox label="Checkbox" disabled />
          </div>
          <h4 className="sub-tit">Checkbox S</h4>
          <div className="row">
            <Checkbox label="Checkbox" className="small" />
            <Checkbox label="Checkbox" className="small" checked />
            <Checkbox label="Checkbox" className="small" disabled checked />
            <Checkbox label="Checkbox" className="small" disabled />
          </div>
          <h4 className="sub-tit">Checkbox XS</h4>
          <div className="row">
            <Checkbox label="Checkbox" className="xsmall" />
            <Checkbox label="Checkbox" className="xsmall" checked />
            <Checkbox label="Checkbox" className="xsmall" disabled checked />
            <Checkbox label="Checkbox" className="xsmall" disabled />
          </div>
        </div>
        <div className="col">
          <h4 className="sub-tit">Radio</h4>
          <Radio
            groupClassName="row"
            name="Radio1"
            options={[
              { label: 'Radio 1' },
              { label: 'Radio 2' },
              { label: 'Radio 3', disabled: true },
            ]}
            defaultSelected="Radio 1"
          />
          <h4 className="sub-tit">Radio S</h4>
          <Radio
            groupClassName="row"
            name="Radio2"
            className="small"
            options={[
              { label: 'Radio 1' },
              { label: 'Radio 2' },
              { label: 'Radio 3', disabled: true },
            ]}
            defaultSelected="Radio 1"
          />
          <h4 className="sub-tit">Radio XS</h4>
          <Radio
            groupClassName="row"
            name="Radio3"
            className="xsmall"
            options={[
              { label: 'Radio 1' },
              { label: 'Radio 2' },
              { label: 'Radio 3', disabled: true },
            ]}
            defaultSelected="Radio 1"
          />
        </div>
        <div className="col">
          <h4 className="sub-tit">Checkbox Button</h4>
          <div className="row">
            <Checkbox label="Checkbox" className="type-btn" />
            <Checkbox label="Checkbox" className="type-btn" checked />
            <Checkbox label="Checkbox" className="type-btn" disabled checked />
            <Checkbox label="Checkbox" className="type-btn" disabled />
          </div>
          <h4 className="sub-tit">Checkbox Button S</h4>
          <div className="row">
            <Checkbox label="Checkbox" className="type-btn small" />
            <Checkbox label="Checkbox" className="type-btn small" checked />
            <Checkbox label="Checkbox" className="type-btn small" disabled checked />
            <Checkbox label="Checkbox" className="type-btn small" disabled />
          </div>
          <h4 className="sub-tit">Checkbox Button XS</h4>
          <div className="row">
            <Checkbox label="Checkbox" className="type-btn xsmall" />
            <Checkbox label="Checkbox" className="type-btn xsmall" checked />
            <Checkbox label="Checkbox" className="type-btn xsmall" disabled checked />
            <Checkbox label="Checkbox" className="type-btn xsmall" disabled />
          </div>
        </div>
        <div className="col">
          <h4 className="sub-tit">Radio Button</h4>
          <Radio
            groupClassName="row"
            name="Radio4"
            className="type-btn"
            options={[
              { label: 'Radio 1' },
              { label: 'Radio 2' },
              { label: 'Radio 3', disabled: true },
            ]}
            defaultSelected="Radio 1"
          />
          <h4 className="sub-tit">Radio Button S</h4>
          <Radio
            groupClassName="row"
            name="Radio5"
            className="type-btn small"
            options={[
              { label: 'Radio 1' },
              { label: 'Radio 2' },
              { label: 'Radio 3', disabled: true },
            ]}
            defaultSelected="Radio 1"
          />
          <h4 className="sub-tit">Radio Button XS</h4>
          <Radio
            groupClassName="row"
            name="Radio6"
            className="type-btn xsmall"
            options={[
              { label: 'Radio 1' },
              { label: 'Radio 2' },
              { label: 'Radio 3', disabled: true },
            ]}
            defaultSelected="Radio 1"
          />
        </div>
        <div className="col">
          <h4 className="sub-tit">Checkbox Toggle</h4>
          <div className="row">
            <Checkbox label="Toggle" className="type-toggle" />
            <Checkbox label="Toggle" className="type-toggle" checked />
            <Checkbox label="Toggle" className="type-toggle" disabled checked />
            <Checkbox label="Toggle" className="type-toggle" disabled />
          </div>
          <h4 className="sub-tit">Checkbox Toggle S</h4>
          <div className="row">
            <Checkbox label="Toggle" className="type-toggle small" />
            <Checkbox label="Toggle" className="type-toggle small" checked />
            <Checkbox label="Toggle" className="type-toggle small" disabled checked />
            <Checkbox label="Toggle" className="type-toggle small" disabled />
          </div>
          <h4 className="sub-tit">Checkbox Toggle XS</h4>
          <div className="row">
            <Checkbox label="Toggle" className="type-toggle xsmall" />
            <Checkbox label="Toggle" className="type-toggle xsmall" checked />
            <Checkbox label="Toggle" className="type-toggle xsmall" disabled checked />
            <Checkbox label="Toggle" className="type-toggle xsmall" disabled />
          </div>
        </div>
      </section>

      {/* allLabelWidth :: Label 너비 일괄 적용 :: 값이 없으면 Auto */}
      <Input.Group allLabelWidth="4em">
        <section id="select" data-anchor-name="Select" className="flex-wrap">
          <div className="col">
            <h4 className="sub-tit">Select</h4>
            <div className="row">
              <Select
                label="Label"
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
            </div>
            <div className="row">
              <Select
                label="Label"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                disabled
              />
              <Select
                type="dropdown"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                disabled
              />
            </div>
          </div>
          <div className="col">
            <h4 className="sub-tit">Select S</h4>
            <div className="row">
              <Select
                label="Label"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="small"
              />
              <Select
                type="dropdown"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="small"
              />
            </div>
            <div className="row">
              <Select
                label="Label"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="small"
                disabled
              />
              <Select
                type="dropdown"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="small"
                disabled
              />
            </div>
          </div>
          <div className="col">
            <h4 className="sub-tit">Select XS</h4>
            <div className="row">
              <Select
                label="Label"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="xsmall"
              />
              <Select
                type="dropdown"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="xsmall"
              />
            </div>
            <div className="row">
              <Select
                label="Label"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="xsmall"
                disabled
              />
              <Select
                type="dropdown"
                options={[
                  { label: '사과', value: 'apple' },
                  { label: '바나나', value: 'banana' },
                  { label: '체리', value: 'cherry' },
                ]}
                defaultValue="banana"
                className="xsmall"
                disabled
              />
            </div>
          </div>
        </section>

        <section id="input-text" data-anchor-name="Input Text" className="flex-wrap">
          <div className="col">
            <h4 className="sub-tit">Input Text</h4>
            <div className="row">
              <Input label="Label" placeholder="텍스트 입력" />
              <Input type="password" placeholder="비밀번호" />
            </div>
            <div className="row">
              <Input label="Label" type="email" placeholder="이메일" />
              <Input type="number" placeholder="숫자 입력" />
            </div>
            <div className="row">
              <Input label="Label" placeholder="텍스트 입력" value="읽기전용" readOnly />
              <Input placeholder="비활성화" disabled />
            </div>
            <div className="row">
              <Textarea label="Label" placeholder="텍스트를 입력해주세요." rows={6} />
            </div>
          </div>
          <div className="col">
            <h4 className="sub-tit">Input Text S</h4>
            <div className="row">
              <Input className="small" label="Label" placeholder="텍스트 입력" />
              <Input className="small" type="password" placeholder="비밀번호" />
            </div>
            <div className="row">
              <Input className="small" label="Label" type="email" placeholder="이메일" />
              <Input className="small" type="number" placeholder="숫자 입력" />
            </div>
            <div className="row">
              <Input
                className="small"
                label="Label"
                placeholder="텍스트 입력"
                value="읽기전용"
                readOnly
              />
              <Input className="small" placeholder="비활성화" disabled />
            </div>
            <div className="row">
              <Textarea
                className="small"
                label="Label"
                placeholder="텍스트를 입력해주세요."
                rows={6}
              />
            </div>
          </div>
          <div className="col">
            <h4 className="sub-tit">Input Text XS</h4>
            <div className="row">
              <Input className="xsmall" label="Label" placeholder="텍스트 입력" />
              <Input className="xsmall" type="password" placeholder="비밀번호" />
            </div>
            <div className="row">
              <Input className="xsmall" label="Label" type="email" placeholder="이메일" />
              <Input className="xsmall" type="number" placeholder="숫자 입력" />
            </div>
            <div className="row">
              <Input
                className="xsmall"
                label="Label"
                placeholder="텍스트 입력"
                value="읽기전용"
                readOnly
              />
              <Input className="xsmall" placeholder="비활성화" disabled />
            </div>
            <div className="row">
              <Textarea
                className="xsmall"
                label="Label"
                placeholder="텍스트를 입력해주세요."
                rows={6}
              />
            </div>
          </div>
        </section>
      </Input.Group>
    </div>
  );
};

export default MainContent;
