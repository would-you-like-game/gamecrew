import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --black: #000;
    --black50: rgba(0, 0, 0, 0.04);
    --black100: rgba(0, 0, 0, 0.06);
    --black200: rgba(0, 0, 0, 0.08);
    --black300: rgba(0, 0, 0, 0.16);
    --black400: rgba(0, 0, 0, 0.24);
    --black500: rgba(0, 0, 0, 0.36);
    --black600: rgba(0, 0, 0, 0.48);
    --black700: rgba(0, 0, 0, 0.64);
    --black800: rgba(0, 0, 0, 0.8);
    --black900: rgba(0, 0, 0, 0.92);
    --white: #fff;
    --white50: rgba(255, 255, 255, 0.04);
    --white100: rgba(255, 255, 255, 0.06);
    --white200: rgba(255, 255, 255, 0.08);
    --white300: rgba(255, 255, 255, 0.16);
    --white400: rgba(255, 255, 255, 0.24);
    --white500: rgba(255, 255, 255, 0.36);
    --white600: rgba(255, 255, 255, 0.48);
    --white700: rgba(255, 255, 255, 0.64);
    --white800: rgba(255, 255, 255, 0.8);
    --white900: rgba(255, 255, 255, 0.92);
    --gray50: #f7fafc;
    --gray100: #edf2f7;
    --gray200: #e2e8f0;
    --gray300: #cbd5e0;
    --gray400: #a0aec0;
    --gray500: #718096;
    --gray600: #4a5568;
    --gray700: #2d3748;
    --gray800: #1a202c;
    --gray900: #171923;
    --red50: #fff5f5;
    --red100: #fed7d7;
    --red200: #feb2b2;
    --red300: #fc8181;
    --red400: #f56565;
    --red500: #e53e3e;
    --red600: #c53030;
    --red700: #9b2c2c;
    --red800: #822727;
    --red900: #63171b;
    --green50: #f0fff4;
    --green100: #c6f6d5;
    --green200: #9ae6b4;
    --green300: #68d391;
    --green400: #48bb78;
    --green500: #38a169;
    --green600: #2f855a;
    --green700: #276749;
    --green800: #22543d;
    --green900: #1c4532;
    --blue50: #ebf8ff;
    --blue100: #bee3f8;
    --blue200: #90cdf4;
    --blue300: #63b3ed;
    --blue400: #4299e1;
    --blue500: #3182ce;
    --blue600: #2b6cb0;
    --blue700: #2c5282;
    --blue800: #2a4365;
    --blue900: #1a365d;
  }
`
export const colors = {
  black: 'var(--black)',
  black50: 'var(--black50)',
  black100: 'var(--black100)',
  black200: 'var(--black200)',
  black300: 'var(--black300)',
  black400: 'var(--black400)',
  black500: 'var(--black500)',
  black600: 'var(--black600)',
  black700: 'var(--black700)',
  black800: 'var(--black800)',
  black900: 'var(--black900)',
  white: 'var(--white)',
  white50: 'var(--white50)',
  white100: 'var(--white100)',
  white200: 'var(--white200)',
  white300: 'var(--white300)',
  white400: 'var(--white400)',
  white500: 'var(--white500)',
  white600: 'var(--white600)',
  white700: 'var(--white700)',
  white800: 'var(--white800)',
  white900: 'var(--white900)',
  gray50: 'var(--gray50)',
  gray100: 'var(--gray100)',
  gray200: 'var(--gray200)',
  gray300: 'var(--gray300)',
  gray400: 'var(--gray400)',
  gray500: 'var(--gray500)',
  gray600: 'var(--gray600)',
  gray700: 'var(--gray700)',
  gray800: 'var(--gray800)',
  gray900: 'var(--gray900)',
  red50: 'var(--red50)',
  red100: 'var(--red100)',
  red200: 'var(--red200)',
  red300: 'var(--red300)',
  red400: 'var(--red400)',
  red500: 'var(--red500)',
  red600: 'var(--red600)',
  red700: 'var(--red700)',
  red800: 'var(--red800)',
  red900: 'var(--red900)',
  green50: 'var(--green50)',
  green100: 'var(--green100)',
  green200: 'var(--green200)',
  green300: 'var(--green300)',
  green400: 'var(--green400)',
  green500: 'var(--green500)',
  green600: 'var(--green600)',
  green700: 'var(--green700)',
  green800: 'var(--green800)',
  green900: 'var(--green900)',
  blue50: 'var(--blue50)',
  blue100: 'var(--blue100)',
  blue200: 'var(--blue200)',
  blue300: 'var(--blue300)',
  blue400: 'var(--blue400)',
  blue500: 'var(--blue500)',
  blue600: 'var(--blue600)',
  blue700: 'var(--blue700)',
  blue800: 'var(--blue800)',
  blue900: 'var(--blue900)',
}

export type Colors = keyof typeof colors
