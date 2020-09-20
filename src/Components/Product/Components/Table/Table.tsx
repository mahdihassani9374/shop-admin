import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Img from './../../../../Assets/Img/product.jpg';
import Avatar from '@material-ui/core/Avatar';
import TableFooter from '@material-ui/core/TableFooter';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface IProduct {
  name: string,
  category: string,
  price: number
}

const rows: IProduct[] = [
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 },
  { name: 'محصول اول ', category: 'کالای دیجیتال', price: 16000 }
];


export default function SimpleTable() {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>عکس محصول</TableCell>
            <TableCell>عنوان محصول</TableCell>
            <TableCell align="right">دسته بندی</TableCell>
            <TableCell align="right">قیمت</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <Avatar src={Img} style={{ width: 60, height: 60 }} />
              </TableCell>
              <TableCell component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">
                <Tooltip title={'ویرایش'}>
                  <EditIcon color="secondary" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title={'حذف'}>
                  <DeleteIcon color="action" style={{ marginRight: 10, cursor: 'pointer' }} />
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow style={{display:'flex',alignItems:'center'}}>
            <IconButton component="span">
              <ChevronRightIcon />
            </IconButton>
            <IconButton disabled component="span">
              <ChevronLeftIcon />
            </IconButton>
            <span>
              نمایش  1 تا 12  از 130
            </span>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">تعداد نمایشی</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
