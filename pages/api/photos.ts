import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

const PATH_PHOTOS = path.join( process.cwd() , 'public', 'imgs', 'fotos')



export default function handler(req:NextApiRequest, res:NextApiResponse){
    fs.readdir(PATH_PHOTOS, (err, files) => {
        if(err){
            res.status(504).json({error:'Erro interno no servidor'})
            return console.error(err);
        }
        res.json(files)
    })
}