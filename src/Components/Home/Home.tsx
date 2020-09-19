import React from 'react';
import { FileUploader } from './../../Components';


const Home = () => {
    const fileUpload = (data: any) => {
        console.log(data)
    }
    return <div >
        <FileUploader callback={fileUpload} />
    </div >
}

export default Home;