import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import { data } from "../assets/data/mockData";
import React, { useState } from "react";
import "../style/style.css"
import { MdOutlineUpdate } from 'react-icons/md'
import DataTable from "react-data-table-component";

//style
const customStyles = {
    rows: {
        style: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            textTransform: "capitalize"
        },
    },
    headCells: {
        style: {
            backgroundColor: "#FFF",
            color: "black"
        },
    },
    checkboxs: {
        style: {
            backgroundColor: "none"
        }
    }

};

// paginasi
const paginationComponentOptions = {
    rowsPerPageText: 'Rows for Page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'ALL',

};

//Crud, select, search
export const Mstaff = () => {
    //menampilkan kolom dan isi tabel.
    const columns = [
        {
            name: "Name",
            sortable: true,
            selector: row => row.name,
            center: true,
        },
        {
            name: "phone number",
            selector: row => row.phone,
            sortable: true,
            center: true,
        },
        {
            name: "email",
            selector: row => row.email,
            sortable: true,
            center: true,
        },
        {
            name: "skill",
            selector: row => row.skill,
            sortable: true,
            center: true,

            style: {
                borderRadius: '25px',
                margin: '7px 5px 7px 5px',
                backgroundColor: '#DC3545',
                color: 'white',
            },
        },
        {
            name: "edit",
            center: true,
            cell: row => (
                <div>
                    <Row>
                        <Col>

                            <MdOutlineUpdate onClick={() => handleShow(row.id)} />
                        </Col>
                    </Row>
                </div>
            )
        }
    ];

    //modal edit
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //modal add
    const [buka, setBuka] = useState(false);
    const handleTutup = () => setBuka(false);
    const handleBuka = () => setBuka(true);

    //select row
    const [selectedRows, setSelectedRows] = React.useState([]);
    const handleRowSelected = React.useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);


    //filtering
    const [filterText, setFilterText] = React.useState('');
    const filteredItems = data.filter(
        item => item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    //jadwal
    const [senin, setSenin] = React.useState('');
    const [aSenin, setaSenin] = React.useState('');
    const [selasa, setSelasa] = React.useState('');
    const [rabu, setRabu] = React.useState('');
    const [kamis, setKamis] = React.useState('');
    const [jumat, setJumat] = React.useState('');
    const [sabtu, setSabtu] = React.useState('');
    const [istirahat, setIstirahat] = React.useState('');

    return (
        <div className="back mt-3">
            <div className="content d-flex justify-content-between">
                <div className="d-flex ">
                    <h5 className="TextU pt-1">User List</h5>
                    <input className="content1"
                        id="search"
                        type="text"
                        placeholder="Search ..."
                        aria-label="Search Input"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
                <div>
                    <span className="end"><Button onClick={handleBuka}> ADD NEW   +</Button></span>
                    <Modal
                        show={buka}
                        onHide={handleTutup}
                        backdrop="static"
                        size="lg"
                        keyboard={false}
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>New User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Full Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Skill</Form.Label>
                                            <Form.Control type="text" placeholder="Skill" />
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Email Id</Form.Label>
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Conf Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="col-md-8 mx-auto">
                                    <Button bsPrefix="addButton" variant="primary" type="submit" >
                                        Save
                                    </Button>
                                </Row>

                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <div className="border">
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Row>
                            <Col>
                                <img src="..." className="img" alt="image" />
                            </Col>
                            <Col className="nama">
                                <div>YUNI</div>
                                <div>Team IT</div>
                            </Col>
                            <Col className="nama">
                                <div> Backend Developer</div>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body className="Mbody">
                        <div >
                            <Form>
                                <Row>
                                    <Col>
                                        <div className="hari"> Senin</div>
                                    </Col>
                                    <Col className="">
                                        <input type="time"
                                            className="inputJam"
                                            step="3600000"
                                            id="time"
                                            value={senin}
                                            placeholder="Time"
                                            onChange={(e) => setSenin(e.target.value)}
                                        />
                                    </Col>
                                    sampai
                                    <Col>
                                        <input type="time"
                                            className="inputJam"
                                            step="3600000"
                                            id="time"
                                            value={aSenin}
                                            placeholder="Time"
                                            onChange={(e) => setaSenin(e.target.value)}
                                        />
                                    </Col>
                                    istirahat
                                    <Col>
                                        <input type="time"
                                            className="inputJam"
                                            step="3600000"
                                            id="time"
                                            value={istirahat}
                                            placeholder="Time"
                                            onChange={(e) => setIstirahat(e.target.value)} />
                                    </Col>
                                    sampai
                                    <Col>
                                        menampilkan time + 1
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="hari"> Sabtu</div>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="hari"> Minggu</div>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <div className="mt-2 end">
                            <span>
                                <Button variant="secondary" onClick={handleClose}>
                                    Back
                                </Button>
                            </span>
                            <span>
                                <Button variant="primary">Save</Button>
                            </span>
                        </div>
                    </Modal.Body>
                </Modal>

                <DataTable
                    className="table-staff"
                    title="User"
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    fixedHeader
                    highlightOnHover
                    pointerOnHover
                    selectableRows
                    responsive
                    onSelectedRowsChange={handleRowSelected}
                    noHeader
                    fixedHeaderScrollHeight="760px"
                    customStyles={customStyles}
                />
            </div>
        </div >
    );
};

export default Mstaff;


