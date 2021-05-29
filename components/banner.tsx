import * as React from 'react';


const BANNER_START = '/imgs/banners/bannerStart.jpg'



export interface BannerStartProps {
    
}
 
const BannerStart: React.SFC<BannerStartProps> = () => {
    return <div className='container'>
            <style jsx>
                {`
                    .container{
                        background-image:url(${BANNER_START});
                        background-size:cover;
                        height:100vh;
                        background-position:center;
                        -webkit-filter: blur(15px);
                        -moz-filter: blur(15px);
                        -o-filter: blur(15px);
                        -ms-filter: blur(15px);
                        filter: blur(15px);
                    }
                `}
            </style>
            <div>

            </div>
        </div>
}
 
export default BannerStart;