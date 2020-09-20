import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
      </Table>
    </TableContainer>
  );
}
