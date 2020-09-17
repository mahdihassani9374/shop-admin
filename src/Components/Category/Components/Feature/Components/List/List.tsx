import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
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

interface Props {
    setOpenModal: (value: boolean) => void
}
const ListComponent = ({ setOpenModal }: Props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button>
                <ListItemIcon onClick={handleClick}>
                    <ArrowDropDownIcon />
                </ListItemIcon>
                <ListItemText onClick={handleClick} primary="دسته بندی ویژگی" />
                <Tooltip title={'زیر دسته '}>
                    <AddIcon onClick={() => setOpenModal(true)} color="secondary" style={{ marginRight: 20, cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title={'ویرایش دسته بندی'}>
                    <EditIcon color="primary" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title={'حذف دسته بندی'}>
                    <DeleteIcon color="action" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
                {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <ArrowLeftIcon />
                        </ListItemIcon>
                        <ListItemText primary="وزن محصول" />
                        <Tooltip title={'ویرایش ویژگی'}>
                            <EditIcon color="primary" style={{ marginRight: 10, cursor: 'pointer' }} />
                        </Tooltip>
                        <Tooltip title={'حذف ویژگی'}>
                            <DeleteIcon color="action" style={{ marginRight: 10, cursor: 'pointer' }} />
                        </Tooltip>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}

export default ListComponent;
