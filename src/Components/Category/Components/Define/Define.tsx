import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

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

    const handleClose = () => {
        setOpenCategory(false);
    };

    return (
        <div>
            <Dialog open={openCaterory} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper }}>
                <DialogTitle id="form-dialog-title">دسته بندی جدید / ویرایش</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="نام دسته بندی"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        انصراف
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        ثبت
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Define;
