import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/Button';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Feature } from '../Feature';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: theme.spacing(3)
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const List = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card>
                        <CardHeader
                            action={
                                <div>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            ویرایش
                                            </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            حذف
                                            </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            اضافه نمودن زیر دسته
                                            </MenuItem>
                                    </Menu>
                                </div>
                            }
                            title="کالای دیجیتال - وسایل برقی"
                            subheader="تعداد زیر دسته : 12"
                        />
                        <Divider />
                        <CardActions disableSpacing>
                            <Feature />
                            <Button variant="outlined" disabled style={{ marginRight: 5 }}>
                                مدیریت برند ها
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>)}
            </Grid>
        </div>
    );
}

export default List;
