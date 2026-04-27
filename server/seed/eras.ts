import type { SeedEra } from './types.js';

export const ERAS: SeedEra[] = [
  {
    ordinal: 1,
    name_ko: '제1기: 건국과 기틀 마련',
    kings_range: '태조 ~ 세조',
    period: '1392 - 1468',
    keyword: '개국과 기틀, 무인적 기상',
    description: '고려의 멸망과 조선의 건국이라는 거대한 전환기. 강력한 왕권을 바탕으로 국가의 기틀을 다지는 과정.',
    color: { primary: '#A5CCBF', secondary: '#90A4AE' },
  },
  {
    ordinal: 2,
    name_ko: '제2기: 문화의 황금기와 사림의 등장',
    kings_range: '예종 ~ 명종',
    period: '1468 - 1567',
    keyword: '문화의 황금기, 유교 법치',
    description: '경국대전 완성을 통해 조선의 통치 이념인 유교 문화가 만개하고 사림이 정치 무대에 등장한 시기.',
    color: { primary: '#E2E7E4', secondary: '#D8D8D8' },
  },
  {
    ordinal: 3,
    name_ko: '제3기: 전란의 상흔과 재건의 시대',
    kings_range: '선조 ~ 정조',
    period: '1567 - 1800',
    keyword: '전란과 재건, 실학의 태동',
    description: '임진왜란과 병자호란이라는 두 차례의 국난을 겪은 후 탕평책과 실학을 통해 사회 전반의 재건에 힘쓴 시기.',
    color: { primary: '#E0E4E8', secondary: '#1F3A69' },
  },
  {
    ordinal: 4,
    name_ko: '제4기: 변혁의 물결과 근대의 태동',
    kings_range: '순조 ~ 순종',
    period: '1800 - 1910',
    keyword: '변혁과 갈등, 근대화의 시도',
    description: '세도 정치의 부작용과 외세의 압력 속에서도 민중 문화가 꽃피우고 근대 국가로의 전환을 시도한 시기.',
    color: { primary: '#F5EFE6', secondary: '#F7B500' },
  },
];
