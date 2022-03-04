import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import {Col, Row} from "react-bootstrap"
import "../../assets/css/tableUser.css"

const TableUser = () => {
    //local state
    const { userState: { users, loading } } = useContext(UserContext)
    let tagTable = (
       <Row className="p-2 border-bottom border-dark">
           <Col >STT</Col>
           <Col>UserID</Col>
           <Col>Fullname</Col>
           <Col>Email</Col>
           <Col>BirdthDate</Col>
           <Col md={2}>
                <Row>
                    <Col>Activity Date</Col>
                </Row>
                <Row>
                    <Col>FLDate</Col>
                    <Col>LLDate</Col>
                </Row>
           </Col>
           <Col>Admin</Col>
           <Col>Status</Col>
           <Col>ADD</Col>
       </Row>
    )
    let table
    let idx = 0
    console.log(users)
    if (loading) {
        table = (
            users.map(user => (
                <Row key={idx++} className="p-2 border-bottom border-dark" id={`id-${idx%2}`}>
                    <Col > {idx}</Col>
                    <Col> {user.UserID}</Col>
                    <Col > {user.Fullname}</Col>
                    <Col> {user.Email} </Col>
                    <Col> {user.Birthdate} </Col>
                    <Col> {user.FLdate} </Col>
                    <Col> {user.LLDate} </Col>
                    <Col > {user.Admin} </Col>
                    <Col> {user.StatusUser} </Col>
                    <Col > .....</Col>
                </Row>
                )
            )
        )
    }
    return (
        <div className='container table-user'>
            <div className=''>
            {tagTable}
            {table}
            </div>
        </div>
    )
}

export default TableUser