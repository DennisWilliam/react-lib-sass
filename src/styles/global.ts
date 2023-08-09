import { createGlobalStyle } from 'styled-components'
import GlobalProps from './types'

export default createGlobalStyle<GlobalProps>`
   @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,500,600,700&display=swap');

   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-size:12px;
       -webkit-font-smoothing: antialiased !important;
			 text-rendering: optimizeLegibility;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-text-size-adjust: 100%;
       
       ::-webkit-scrollbar {
            width: 0.75vw;
        }

        ::-webkit-scrollbar-track-piece {
            background-color: var(--background);
        }

        ::-webkit-scrollbar-thumb:vertical {
            background-color: lightgrey;
        }
   }

	 :root {
		
		width: 100%;
		height: 100%;
		//Global
		--primary:${({ theme }) => theme.primary};
		--secondary:${({ theme }) => theme.secondary};
		--background:${({ theme }) => theme.background};
		--primary-text:${({ theme }) => theme.primary_text};
		--secondary-text:${({ theme }) => theme.secondary};
		--tertiary-text:${({ theme }) => theme.tertiary_text};
		--quaternary-text:${({ theme }) => theme.quaternary_text};
		--disable:${({ theme }) => theme.disable};
		--disable-text:${({ theme }) => theme.disable_text};
		--transparent:${({ theme }) => theme.transparent};
		--primary-background-text:${({ theme }) => theme.primary_background_text};
		--input-color:${({ theme }) => theme.input_color};

		//Messages
		--success:(${({ theme }) => theme.primary});
		--error:(${({ theme }) => theme.primary});
		--warning:(${({ theme }) => theme.primary});
		--info:(${({ theme }) => theme.primary});
	 }

	 #root , body {
		width: 100%;
		height: 100%;
	 }

	 
`
