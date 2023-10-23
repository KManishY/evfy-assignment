import React from 'react';
import { Route, Routes } from "react-router-dom";

// import BookList from './';

import Login from '../Pages/Login_Signup/Login';
import SignUp from '../Pages/Login_Signup/SignUp';
import BookForm from '../Pages/BookForm';
import BookList from '../Pages/BookList';


// import styled from './AllRoutes.module.css'

const Allroutes = () => {
    return <div>
        <div >
				<Routes>
				
					<Route  path='/' element={<SignUp />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/bookfrom' element={<BookForm />} />
					<Route exact path='/booklist' element={< BookList/>} />
					
				</Routes>
			</div>
    </div>;
}



export default Allroutes;