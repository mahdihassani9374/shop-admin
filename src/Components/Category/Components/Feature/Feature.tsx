import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import TextField from '@material-ui/core/TextField';
import { List as ListComponent, Define } from './Components';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    }),
);

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                مدیریت ویژگی ها
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            مدیریت ویژگی ها
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            ثبت اطلاعات
                        </Button> */}
                    </Toolbar>
                </AppBar>
                <form autoComplete="off" style={{ padding: 10 }}>
                    <TextField id="standard-basic" label="عنوان دسته بندی" />
                    <Button variant="outlined" style={{ marginTop: 12, marginRight: 10 }} color="primary">ثبت</Button>
                </form>
                <Divider style={{ marginTop: 20 }} />
                <ListComponent setOpenModal={setOpenModal} />
                <Define open={openModal} setOpen={setOpenModal} />
            </Dialog>
        </div>
    );
}
