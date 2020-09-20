import React from 'react';
import { useEffect } from 'react';
import { FileUploader } from './../../Components';
import { connect } from 'react-redux';
import { setLoading } from './../../Utilitis/action';
import transportLayer from '../../Utilitis/transportLayer';

const Home = ({ setLoading }: any) => {
    useEffect(() => {
        transportLayer().getData().then(response => console.log(response))
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
