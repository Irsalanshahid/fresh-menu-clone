import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return <div className="bg-white w-full h-[70px] shadow-lg flex  justify-between ">
        <div className="flex justify-end grow basis-1/4 items-center"><img src="https://www.freshmenu.com/images/fm-header-logo.svg"></img></div>
        <nav className="flex grow basis-3/4 justify-end items-center mr-8">

            <a href="#" className="custom-li">
                <FontAwesomeIcon icon={faSearch} className="mr-2 text-xl" />
                Search
            </a>

            <a href="#" className="custom-li">
                
                Offers
            </a>

            <a className="custom-li" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                    <path fill="#4a4a4a" fillRule="evenodd" d="M16.7 15.696A9.437 9.437 0 0 0 19 9.5c0-2.272-.791-4.42-2.245-6.134l1.411-1.412c.31-.31-.81-1.43-1.12-1.12l-1.412 1.411A9.434 9.434 0 0 0 9.497 0c-2.273 0-4.42.791-6.134 2.245L1.95.834c-.31-.31-1.43.81-1.12 1.12l1.411 1.412c-2.99 3.528-2.99 8.74 0 12.268L.831 17.046c-.31.31.81 1.43 1.12 1.12l1.412-1.411A9.424 9.424 0 0 0 9.497 19a9.43 9.43 0 0 0 6.072-2.195l1.415 1.416c.31.31 1.43-.81 1.12-1.121l-1.403-1.404zm.714-6.196a7.847 7.847 0 0 1-1.838 5.072L13.7 12.695A5.24 5.24 0 0 0 14.777 9.5c0-1.144-.36-2.23-1.027-3.13l1.88-1.88a7.853 7.853 0 0 1 1.784 5.01zM6.887 12.114A3.669 3.669 0 0 1 5.805 9.5c0-.989.384-1.916 1.082-2.614a3.668 3.668 0 0 1 2.614-1.081c.988 0 1.915.384 2.613 1.081A3.67 3.67 0 0 1 13.196 9.5c0 .985-.384 1.916-1.082 2.614A3.669 3.669 0 0 1 9.5 13.195a3.668 3.668 0 0 1-2.614-1.081zm2.61-10.532c1.85 0 3.598.628 5.01 1.788l-1.881 1.88a5.234 5.234 0 0 0-3.13-1.027c-1.143 0-2.229.36-3.128 1.027L4.487 3.37a7.872 7.872 0 0 1 5.01-1.788zM3.37 4.49l1.88 1.88A5.234 5.234 0 0 0 4.224 9.5c0 1.14.36 2.23 1.028 3.13l-1.88 1.88a7.921 7.921 0 0 1 0-10.02zm6.127 12.928a7.843 7.843 0 0 1-5.01-1.788l1.88-1.88a5.243 5.243 0 0 0 3.13 1.027 5.232 5.232 0 0 0 3.063-.98l1.884 1.884a7.849 7.849 0 0 1-4.947 1.737z"></path>
                </svg>
            </a>

            <a className="custom-li">
            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g fill="none" fillRule="evenodd" stroke="#4A4A4A" strokeWidth="1.5">
                    <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 19 14)"></circle>
                    <path strokeLinecap="round" d="M8 16h7M9 16v3M11 16v2"></path>
                    <g transform="matrix(-1 0 0 1 15 1)">
                        <circle cx="5" cy="4" r="4"></circle>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.8 18H14A9 9 0 0 0 .043 10.487"></path>
                    </g>
                </g>
            </svg>
            </a>

            <a href="#" className="block bg-[#f2f3f3] h-full w-18 mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 58" className="translate-x-1/4 translate-y-1/4">
                <path className="path" fillRule="evenodd" strokeWidth=".3" d="M10.122 19.9c0-.578-.483-1.05-1.073-1.05s-1.073.472-1.073 1.05c0 .577.483 1.05 1.073 1.05s1.073-.473 1.073-1.05m1.073 0c0 1.155-.966 2.1-2.146 2.1s-2.147-.945-2.147-2.1c0-1.155.966-2.1 2.147-2.1 1.18 0 2.146.945 2.146 2.1m8.585 0c0-.578-.482-1.05-1.073-1.05-.59 0-1.073.472-1.073 1.05 0 .577.483 1.05 1.073 1.05s1.073-.473 1.073-1.05m1.074 0c0 1.155-.966 2.1-2.147 2.1-1.18 0-2.146-.945-2.146-2.1 0-1.155.966-2.1 2.146-2.1s2.147.945 2.147 2.1m-1.61-6.3H6.74v.105c.108 1.103-.053 1.995 1.127 1.995H21.39c.322 0 .537.21.537.525 0 .315-.215.525-.537.525H7.278c-1.46-.224-1.502-1.313-1.663-2.94L4.917 2.995c-.054-1.103-1.02-.945-2.146-.945H1.537C1.215 2.05 1 1.84 1 1.525 1 1.21 1.215 1 1.537 1H2.77c1.717 0 3.08 0 3.273 1.89l.59 9.66h12.61c.751 0 .805-.473 1.073-1.207l1.531-5.744c.25-1.17.67-.924.67-.924.16 0 .267.105.375.21.107.105.107.315.107.42l-1.61 6.3c-.429 1.207-.313 2-2.146 1.995"></path>
            </svg>
            </a>


        </nav>
        

    </div>;
}
export default Header;