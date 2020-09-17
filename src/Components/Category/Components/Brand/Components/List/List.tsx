import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const classes = useStyles();

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button>               
                <ListItemText primary="برند اول" />
                <Tooltip title={'ویرایش برند'}>
                    <EditIcon color="primary" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title={'حذف برند'}>
                    <DeleteIcon color="action" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>                
            </ListItem>
            <ListItem button>               
                <ListItemText primary="برند دوم" />
                <Tooltip title={'ویرایش برند'}>
                    <EditIcon color="primary" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title={'حذف برند'}>
                    <DeleteIcon color="action" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>                
            </ListItem>
            <ListItem button>               
                <ListItemText primary="برند سوم" />
                <Tooltip title={'ویرایش برند'}>
                    <EditIcon color="primary" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title={'حذف برند'}>
                    <DeleteIcon color="action" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>                
            </ListItem>
        </List>
    );
}
