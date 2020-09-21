import { Fab } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import React from 'react';
import { Table } from './Components';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Layout } from './../Layout'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    }),
);

const Product = () => {
    const classes = useStyles();
    return <Layout>
        <Tooltip title="اضافه نمودن محصول جدید" aria-label="add">
            <Fab color="secondary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Table />
    </Layout>
}

export default Product;