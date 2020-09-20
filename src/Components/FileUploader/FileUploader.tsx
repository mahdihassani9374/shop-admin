import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box, Checkbox } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Img from './../../Assets/Img/product.jpg';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        minWidth: "600px",
        "@media (max-width: 500px)": {
            minWidth: "300px"
        }
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    img: {
        width: 100
    }
}));

interface Props {
    callback: (data: any) => void;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const FileUploader = ({ callback }: Props) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [checked, setChecked] = React.useState(false);

    const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const fileUploader = (files: any) => {
        callback(files);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            آپلود فایل
        </Button>
        <Dialog open={open} aria-labelledby="form-dialog-title" classes={{ paper: classes.paper }}>
            <DialogTitle id="form-dialog-title">فایل آپلودر</DialogTitle>
            <DialogContent style={{ minHeight: 330, padding: 0 }}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="آپلود فایل جدید" {...a11yProps(0)} />
                        <Tab label="انتخاب فایل" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div>
                        <DropzoneArea
                            acceptedFiles={['image/*']}
                            dropzoneText={"فایل را بکشید اینجا یا آن را انتخاب کنید "}
                            onChange={(files) => fileUploader(files)}
                            filesLimit={1}
                            showAlerts={false}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <List style={{ height: 250, overflowY: 'scroll', overflowX: 'hidden' }}>
                        <Grid container spacing={3}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item =>
                                <Grid item>
                                    <ListItem>
                                        <img src={Img} alt="product" style={{ width: 80 }} />
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChangeCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </ListItem>
                                </Grid>)}
                        </Grid>
                    </List>
                </TabPanel>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    انصراف
                </Button>
                <Button variant="contained" color="primary">
                    ثبت
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}

export default FileUploader;