import * as React from 'react';
import configSystem from '../config';


const BANNER_START = '/imgs/banners/bannerStart.jpg'
const DESFOQUE = '5px';
const VIEW_HEIGHT = '70vh'
const COLOR_TEXT = 'white'
const FAIXA_BG_COLOR = 'rgba(0,0,0,0.7)'



export interface BannerStartProps {
    
}
 
const BannerStart: React.SFC<BannerStartProps> = () => {
    return <div className='container'>
            <style jsx>
                {`
                    .container{
                        display:grid;
                        grid-template-columns:1fr;
                        grid-template-rows:1fr;
                    }
                    .fundo{
                        grid-column:1/2;
                        grid-row:1/2;
                        background-image:url(${BANNER_START});
                        background-size:cover;
                        height:${VIEW_HEIGHT};
                        -webkit-filter: blur(${DESFOQUE});
                        -moz-filter: blur(${DESFOQUE});
                        -o-filter: blur(${DESFOQUE});
                        -ms-filter: blur(${DESFOQUE});
                        filter: blur(${DESFOQUE});
                    }
                    .frente{
                        grid-column:1/2;
                        grid-row:1/2;
                        z-index:2;
                        background-position:center;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    .texts{
                        font-size:1rem;
                        text-align:center;
                        color:${COLOR_TEXT};
                        text-shadow: 3px 3px rgba(0,0,0,0.4);
                        display:flex;
                        flex-direction:column;
                        gap:15px;
                        background-color: ${FAIXA_BG_COLOR};
                        padding:2rem;
                        border-radius:6px;
                    }
                    .text1{
                        font-size:3rem;
                        font-weight:bold;
                    }
                    .text2{
                        font-size:2rem;
                    }
                    .text3{
                        font-size:1.5rem;
                    }
                `}
            </style>
            <div className='fundo' />
            <div className='frente'>
                <div className='texts'>
                    <div className='text1'>Sorteio de vários Amigurumi</div>
                    <div className='text2'>São 32 peças de uma vez</div>
                    <div className='text3'>Valor de R$ 20,00</div>
                </div>
            </div>
        </div>
}
 
export default BannerStart;