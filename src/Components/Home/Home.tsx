import React from 'react';
import { useEffect } from 'react';
import { FileUploader } from './../../Components';
import { connect } from 'react-redux';
import { setLoading } from './../../Utilitis/action';
import axios from 'axios';

const Home = ({ setLoading }: any) => {
    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3000/posts').then(response => {
            setTimeout(() => {
                console.log(response);
                setLoading(false);
            }, 1500)
        })
    }, [])

    const fileUpload = (data: any) => {
        console.log(data)
    }
    return <div >
        <FileUploader callback={fileUpload} />
    </div >
}


const mapStateToProps = (state: any) => ({
    Loading: state.Loading
})

const mapDispatchToProps = (dispatch: any) => ({
    setLoading: (loading: boolean) => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
