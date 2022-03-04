import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'

import { Col, Row } from "react-bootstrap"
import "./TableUser.css"

const TableUser = () => {
    //local state
    const { userState: { users, loading } } = useContext(UserContext)
    let tagTable = (

        <thead>
            <tr>
                <th rowspan="2">STT</th>
                <th rowspan="2">UserID</th>
                <th rowspan="2">FullName</th>
                <th rowspan="2">Email</th>
                <th rowspan="2">Birthday</th>
                <th colspan="2">Activity Date</th>
                <th rowspan="2">Admin</th>
                <th rowspan="2">Status</th>
                <th colspan="3" rowspan="2"><a href="../userInterFace/userInfo.html">ADD</a></th>
            </tr>
            <tr>
                <th rowspan="1">Fisrt login date</th>
                <th rowspan="1">last login date</th>
            </tr>
        </thead>

    )
    let table
    let idx = 0
    console.log(users)
    if (loading) {
        table = (
            users.map(user => (
                <tr>
                     <td > {idx}</td>
                    <td> {user.UserID}</td>
                    <td md={1}> {user.Fullname}</td>
                    <td md={2}> {user.Email} </td>
                    <td md={1}> {user.Birthdate} </td>
                    <td md={1}> {user.FLdate} </td>
                    <td md={1}> {user.lLdate} </td>
                    <td md={1}> {user.Admin} </td>
                    <td md={1}> {user.StatusUser} </td>
                    <td > .....</td>
               

                </tr>
                   
            )

            )
        )
    }
    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <span data-feather="home"></span>
                                        Dashboard <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file"></span>
                                        Orders
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart"></span>
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users"></span>
                                        Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="bar-chart-2"></span>
                                        Reports
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="layers"></span>
                                        Integrations
                                    </a>
                                </li>
                            </ul>

                            <h6
                                className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a className="d-flex align-items-center text-muted" href="#">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <input type="date" id="dateDashboad" value="11/11/2022"></input>
                            </div>
                        </div>

                        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target=".bd-example-modal-lg"
                            id="addusermodal">Add User</button>
                        <table id="myTable">
                            {tagTable}
                            <tbody id="databody">
                                {table}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="8">Tổng số đang active</td>
                                    <td colspan="4">6</td>
                                </tr>
                            </tfoot>
                        </table>
                    </main>
                </div>
            </div >

            <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="user-content">
                            <form action="#" method="post" id="form">
                                <div className="title-user"> REGISTRAION FORM </div>

                                <div className="content-item">
                                    <label for="firstname">User Name</label>
                                    <input type="text" name="userName" id="username"></input>
                                    <label for="firstname">Password</label>
                                    <input type="password" id="password" name="passWord"></input>
                                </div>


                                <div className="content-item">
                                    <label for="firstname">First Name</label>
                                    <input type="text" name="firstName" id="firstName"></input>

                                    <label for="lastname">Last Name</label>
                                    <input type="text" name="lastName" id="lastName"></input>
                                </div>


                                <div className="content-item">
                                    <div className="status">
                                        <label for="status">Role</label>
                                        <select name="role" id="role">
                                        </select>
                                    </div>

                                    <div className="status">
                                        <label for="status">Status</label>
                                        <select name="status" id="status">
                                        </select>
                                    </div>

                                </div>

                                <div className="inputBox">
                                    <input type="text" name="" id="email" placeholder="Enter Email" onkeydown="validation()"></input>
                                    <span id="text"></span>
                                </div>

                                <div className="content-item">
                                    <label for="phone">Phone</label>
                                    <select name="phone" id="phone">

                                    </select>
                                    <input type="text" name="phoneNumber" placeholder="Enter my phone" id="phoneNumber"></input>
                                </div>

                                <div className="content-item">
                                    <label for="address">Address</label>
                                    <div className="address-content">
                                        <select name="address1" className="address" id="address1">
                                            <option value="1">VN</option>
                                            <option value="2">EN</option>
                                        </select>
                                        <select name="address2" className="address" id="address2" disabled="disabled">
                                            <option value="1">Can Tho</option>
                                            <option value="2">An Giang</option>
                                        </select>
                                        <select name="address3" className="address" id="address3" disabled="disabled">
                                            <option value="1">Ninh Kieu</option>
                                            <option value="2">Chau Thanh</option>
                                        </select>
                                        <select name="address4" className="address" id="address4" disabled="disabled">

                                            <option value="1">An Binh</option>
                                            <option value="2">Vinh Nhuan</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="content-item">
                                    <input type="text" placeholder="Enter address" name="address"></input></div>

                                <div className="content-item">
                                    <label for="note">Note</label>
                                    <textarea name="note" id="note"></textarea>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary cancel" data-dismiss="modal">CANCEL</button>
                                    <button type="button" className="btn btn-secondary submit">SUBMIT</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>


        </>


      
    )
}

export default TableUser