import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { TrainRounded } from '@material-ui/icons';
import { Input } from '@material-ui/core';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(name, inOut, date, duration, answered, edit, remove) {
    return {
        name,
        inOut,
        date,
        duration,
        answered,
        edit,
        remove,
        detail: [{ company: 'David eng.', workPhoneNum: '034568725', celPhoneNum: '0527764582' }],
    };
}

function Row(props) {
    const { row: row } = props;
    const [open, setOpen] = React.useState(false);
    const [editedContact, setEditedContact] = React.useState(null);
    const classes = useRowStyles();
    const onEditContact = (contact) => {
        console.log('editing', contact);
        setEditedContact(contact);
    };

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.inOut}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.answered ? 'Yes' : 'No'}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => onEditContact(row)}>
                        Edit
                    </Button>
                </TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="secondary" onClick={() => console.log('remove')}>
                        X
                    </Button>
                </TableCell>
            </TableRow>

            {!editedContact && (
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Details
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Company</TableCell>
                                            <TableCell align="center">Work phone number</TableCell>
                                            <TableCell align="center">Cel phone number</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.detail.map((detailRow) => (
                                            <TableRow key={detailRow.workPhoneNum}>
                                                <TableCell component="th" scope="row">
                                                    {detailRow.company}
                                                </TableCell>
                                                <TableCell align="center">{detailRow.workPhoneNum}</TableCell>
                                                <TableCell align="center">{detailRow.celPhoneNum}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
            {editedContact && (
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Details
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Company</TableCell>
                                            <TableCell align="center">Work phone number</TableCell>
                                            <TableCell align="center">Cel phone number</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.detail.map((detailRow) => (
                                            <TableRow key={detailRow.workPhoneNum}>
                                                <TableCell component="th" scope="row">
                                                    <Input value={detailRow.company} onChange=""></Input>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Input value={detailRow.workPhoneNum} onChange=""></Input>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <Input value={detailRow.celPhoneNum} onChange=""></Input>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        inOut: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        detail: PropTypes.arrayOf(
            PropTypes.shape({
                company: PropTypes.string.isRequired,
                workPhoneNum: PropTypes.string.isRequired,
                celPhoneNum: PropTypes.string.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

const rows = [
    createData('Frozen yoghurt', 'Incoming', '26/05', '03:23', true),
    createData('Ice cream sandwich', 'Incoming', '26/05', '35:54', true),
    createData('Eclair', 'Outgoing', '26/05', '00:28', true),
    createData('Cupcake', 'Outgoing', '26/05', '0', false),
    createData('Gingerbread', 'Incoming', '26/05', '04:14', true)
];

// const [rows, setRows] = useState([])
// useEffect(()=>{
//   setRows(contactService.query())
// },[])

// getCalls();
// contactService.query().then(returnedCalls => rows = returnedCalls)

export function CallHistory() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Name</TableCell>
                        <TableCell align="right">In/Out</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Duration(min)</TableCell>
                        <TableCell align="right">Answered</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
