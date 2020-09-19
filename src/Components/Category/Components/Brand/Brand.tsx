import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import TextField from '@material-ui/core/TextField/TextField';
import { List as ListComponent } from './Components';
import { useForm } from 'react-hook-form';

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

const Brand = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, errors } = useForm();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submit = (data: any) => { console.log(data) };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ marginRight: 5 }}>
                مدیریت برند ها
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            مدیریت برند ها
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            ثبت اطلاعات
                        </Button> */}
                    </Toolbar>
                </AppBar>
                <form onSubmit={handleSubmit(submit)} autoComplete="off" style={{ padding: 10 }}>
                    <TextField inputRef={register({ required: true })} name="title" label="عنوان برند" />
                    <Button type="submit" variant="outlined" style={{ marginTop: 12, marginRight: 10 }} color="primary">ثبت</Button>
                    {errors.title && <div style={{ color: 'red' }}>عنوان برند الزامی می باشد</div>}
                </form>
                <Divider style={{ marginTop: 20 }} />
                <ListComponent />
            </Dialog>
        </div>
    );
}

export default Brand;
