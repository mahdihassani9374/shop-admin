import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form'

const useStyles = makeStyles(() => ({
    paper: {
        minWidth: "500px",
        "@media (max-width: 500px)": {
            minWidth: "300px"
        }
    },
}));

interface Props {
    open: boolean,
    setOpen: (value: boolean) => void
}

const Define = ({ open, setOpen }: Props) => {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog open={open} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper }}>
                <DialogTitle id="form-dialog-title"> ویژگی جدید / ویرایش</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="categoryName"
                        label="عنوان ویژگی"
                        type="text"
                        fullWidth
                        ref={register}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        انصراف
                    </Button>
                    <Button type="submit" color="primary">
                        ثبت
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}

export default Define;
