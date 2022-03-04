import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import {Col, Row} from "react-bootstrap"


const TableUser = () => {
    //local state
    const { userState: { users, loading } } = useContext(UserContext)
    let tagTable = (
       <Row className="p-2 m-2 border-bottom border-dark">
           <Col >STT</Col>
           <Col>UserID</Col>
           <Col>Fullname</Col>
           <Col>Email</Col>
           <Col>BirdthDate</Col>
           <Col>Activity Date</Col>
           <Col>Admin</Col>
           <Col>Status</Col>
           <Col>ADD</Col>
       </Row>
    )
    let table
    let idx = 0
    if (loading) {
        table = (
            users.map(user => (
                <Row key={idx++} className="p-2 m-2 border-bottom border-dark">
                    <Col > {idx}</Col>
                    <Col> {user.UserID}</Col>
                    <Col md={1}> {user.Fullname}</Col>
                    <Col md={2}> {user.Email} </Col>
                    <Col md={1}> {user.Birthdate} </Col>
                    <Col md={1}> {user.FLdate} </Col>
                    <Col md={1}> {user.lLdate} </Col>
                    <Col md={1}> {user.Admin} </Col>
                    <Col md={1}> {user.StatusUser} </Col>
                    <Col > .....</Col>
                </Row>
                )
            )
        )
    }
    return (
        <div className='col-md-8'>
            {tagTable}
            {table}
        </div>
    )
}

export default TableUser