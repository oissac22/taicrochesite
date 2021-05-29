import * as React from 'react';
import { GetStaticProps } from 'next';


const PATH_PHOTOS_FRONT = '/imgs/fotos'
const HEIGHT = 'calc( 30vh - 20px )'
const BUTTON_SPACE = '3rem';



const PhotoSelect: React.FC<{
    photo:string,
    setPhotoSelect:(photo:string)=>void,
    backPhoto:()=>void,
    nextPhoto:()=>void
}> = ({ photo, setPhotoSelect, backPhoto, nextPhoto }) => {

    const handleClick = e => {
        setPhotoSelect('')
    }

    if(!photo) return null;

    return <div className='photoContainer'>
        <style jsx>
            {`
                .photoContainer{
                    position:fixed;
                    left:0px;
                    top:0px;
                    right:0px;
                    bottom:0px;
                    z-index:20;
                    background-color: rgba(0,0,0,0.7);
                    display: flex;
                    align-items:center;
                    justify-content:center;
                }
                .photoContainer img{
                    max-width:80vw;
                    max-height:80vh;
                    border-radius:8px;
                    box-shadow: 5px 5px 5px rgba(0,0,0,0.6)
                }
                .close{
                    right:${BUTTON_SPACE};
                    top:  ${BUTTON_SPACE};
                }
                .back, .next, .close{
                    cursor:pointer;
                    font-weight:bold;
                    font-size:${BUTTON_SPACE};
                    position:fixed;
                    color: #fff;
                    user-select:none;
                }
                .back{
                    left: ${BUTTON_SPACE};
                    top: 50vh;
                    transform: translateY(-50%);
                }
                .next{
                    right: ${BUTTON_SPACE};
                    top: 50vh;
                    transform: translateY(-50%);
                }
            `}
        </style>
        <img src={photo} />
        <div className='close' title='Fechar visualisação' onClick={handleClick}>X</div>
        <div className='back' title='foto anterior' onClick={backPhoto}>&lt;</div>
        <div className='next' title='próxima foto' onClick={nextPhoto}>&gt;</div>
    </div>

}



export interface PhotosProps {
    files?: string[]
}

const Photos: React.SFC<PhotosProps> = ({ files }) => {

    const [photos, setPhotos] = React.useState<string[]>([]);
    const [photoSelect, setPhotoSelect] = React.useState<string>('');
    const [photoSelectIndex, setPhotoSelectIndex] = React.useState<number>(0);

    React.useEffect(() => {

        fetch('/api/photos')
            .then(async (result) => {
                const json = await result.json()
                setPhotos(json)
            }).catch((err) => {
                console.log('err :>> ', err);
            });

    },[])

    const handleClickPhoto = (photo, index) => {
        setPhotoSelect(photo)
    }

    const handleNextPhoto = () => {
        const idx = photoSelectIndex + 1;
        const newIndex = ( idx >= photos.length ) ? 0 : idx
        setPhotoSelectIndex(newIndex)
        let src = `${PATH_PHOTOS_FRONT}/${photos[newIndex]}`;
        setPhotoSelect(src)
    }

    const handleBackPhoto = () => {
        const idx = photoSelectIndex - 1;
        const newIndex = ( idx < 0 ) ? ( photos.length - 1 ) : idx
        setPhotoSelectIndex(newIndex)
        let src = `${PATH_PHOTOS_FRONT}/${photos[newIndex]}`;
        setPhotoSelect(src)
    }

    return <div className='container'>
            <style jsx>
                {`
                    .container{
                        display:flex;
                        flex-wrap:wrap;
                        overflow: auto;
                        padding: 20px;
                        gap: 20px;
                    }
                    .image{
                        min-width:${HEIGHT};
                        height:${HEIGHT};
                        flex:1;
                        background-size: cover;
                        background-position: center;
                        cursor:pointer;
                        transition:0.4s;
                        border-radius: 4px;
                    }
                    .image:hover{
                        opacity: 0.8;
                    }
                `}
            </style>
            {
                photos.map( (photo, index) => {
                    let src = `${PATH_PHOTOS_FRONT}/${photo}`;
                    return <div
                            key={index}
                            style={{backgroundImage:`url(${src})`}}
                            className='image'
                            title='clique para ampliar'
                            onClick={e => handleClickPhoto(src, index)}
                        />
                } )
            }
            <PhotoSelect photo={photoSelect} setPhotoSelect={setPhotoSelect} backPhoto={handleBackPhoto} nextPhoto={handleNextPhoto} />
        </div>
}
 
export default Photos;