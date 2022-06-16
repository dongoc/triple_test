import { createGlobalStyle } from 'styled-components'
import styledReset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
	${styledReset}

	:root {
    --color-white: rgba(255,255,255,1);
    --color-gray: rgba(58,58,58,1);
    --color-gray20: rgba(58,58,58,0.02);
    --color-gray50: rgba(58,58,58,0.05);
    --color-gray100: rgba(58,58,58,0.1);
    --color-gray200: rgba(58,58,58,0.2);
    --color-gray300: rgba(58,58,58,0.3);
    --color-gray400: rgba(58,58,58,0.4);
    --color-gray500: rgba(58,58,58,0.5);
    --color-gray600: rgba(58,58,58,0.6);
    --color-gray700: rgba(58,58,58,0.7);
    --color-gray800: rgba(58,58,58,0.8);
    --color-gray900: rgba(58,58,58,0.9);

    --desktop-min-width: 1200px;
    --layout-max-width: 1040px;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
