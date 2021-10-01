import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import UserList from './components/UsersList/UserList';
import jsonData from './mocData.json';


const App = () => {
  const [users, setusers] = useState(jsonData.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 5;
  const usersVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(users.length / userPerPage);

  const displayUsersData = users.slice(usersVisited, usersVisited + userPerPage)

  // handling page number
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected)
  };

  return (
    <div className="container mt-5">
      <UserList data={displayUsersData} />
      <ReactPaginate
        nextLabel="&raquo;"
        previousLabel="&laquo;"
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="mt-3 pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="page-item active"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
      />
    </div>
  )
}

export default App;
