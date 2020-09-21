import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit , errors } = useForm();

  const submit = (data: any) => { console.log(data) }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ورود به پنل مدیریتی
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(submit)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="نام کاربری"
            name="username"
            // autoComplete="username"
            autoFocus
            inputRef={register({required:true})}
          />
          {errors.username && <div style={{color:'red'}}>نام کاربری الزامی است </div>}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="رمز عبور"
            type="password"
            id="password"
            // autoComplete="current-password"
            inputRef={register({required:true})}
          />
          {errors.password && <div style={{color:'red'}}>رمز عبور الزامی است </div>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="مرا به خاطر بسپار"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ورود
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2">
                رمزم را فراموش کردم
              </Link>
            </Grid>
          </Grid>ّ
        </form>
      </div>
    </Container>
  );
}