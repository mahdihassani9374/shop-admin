import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link, Tooltip } from '@material-ui/core';
import { List, Define } from './Components';
import { useState } from 'react';
import { Layout } from './../Layout'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            marginTop: theme.spacing(2)
        },
    }),
);

const Category = () => {

    const classes = useStyles();
    const [openCaterory, setOpenCategory] = useState<boolean>(false);

    const handleClick = () => {

    }

    return <Layout>
        <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary">دسته بندی : </Typography>
            <Link color="inherit" onClick={handleClick}>
                کالای دیجیتال
            </Link>
            <Link color="inherit" onClick={handleClick}>
                وسایل برقی
            </Link>
            <Typography color="textPrimary">لب تاب</Typography>
        </Breadcrumbs>
        <Divider style={{ marginTop: 15 }} />
        <Tooltip title="اضافه نمودن دسته بندی جدید" aria-label="add">
            <Fab color="secondary" className={classes.fab} onClick={() => setOpenCategory(true)}>
                <AddIcon />
            </Fab>
        </Tooltip>
        {openCaterory && <Define openCaterory={openCaterory} setOpenCategory={setOpenCategory} />}
        <List />
    </Layout>
}

export default Category;