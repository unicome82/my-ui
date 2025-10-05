import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // 검사 대상 파일 확장자
    files: ['**/*.{js,jsx,mjs,cjs}'],

    // 사용할 플러그인 정의
    plugins: { js, react: pluginReact },

    // 기본 규칙 확장
    // JS 기본 추천 규칙 + React 플러그인 추천 규칙
    extends: ['js/recommended', pluginReact.configs.flat.recommended],

    // 언어 옵션: 브라우저 전역 객체 사용 허용
    languageOptions: { globals: globals.browser },

    // 커스텀 규칙
    rules: {
      // React 17+에서는 import React 없이 JSX 가능하므로 꺼줌
      'react/react-in-jsx-scope': 'off',

      // 사용하지 않는 변수는 경고만, 함수 인자는 _로 시작하면 무시
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // 사용하지 않는 변수 경고 끄기
      // "no-unused-vars": "off"
    },

    // React 플러그인 설정: 설치된 React 버전 자동 감지
    settings: { react: { version: 'detect' } },

    // 검사 제외 파일/폴더 지정
    ignores: ['node_modules/', 'dist/'],
    //ignores: ['node_modules/', 'dist/', '*.css', '*.scss'],
  },
]);
