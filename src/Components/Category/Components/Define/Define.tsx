import React, { useEffect } from 'react';
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
    openCaterory: boolean,
    setOpenCategory: (value: boolean) => void
}

const Define = ({ openCaterory, setOpenCategory }: Props) => {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        console.log('hello');
        console.log(register);
    }, []);

    const handleClose = () => {
        setOpenCategory(false);
    };

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog open={openCaterory} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper }}>
                <DialogTitle id="form-dialog-title">دسته بندی جدید / ویرایش</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="categoryName"
                        label="عنوان دسته بندی"
                        type="text"
                        fullWidth
                        ref={register}
                        autoComplete={''}
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
