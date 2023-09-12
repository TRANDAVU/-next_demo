// Ví dụ sử dụng trong một thành phần khác
import Link from 'next/link';

const Navigation = () => {
    return (
        <div>
            <div className="py-1 bg-black top">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="row d-flex">
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                        <span className="icon-phone2" />
                                    </div>
                                    <span className="text">+ 1235 2355 98</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                        <span className="icon-paper-plane" />
                                    </div>
                                    <span className="text">
                                        <a
                                            href="https://preview.colorlib.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="562f392324333b373f3a16333b373f3a7835393b"
                                        >
                                            [email&nbsp;protected]
                                        </a>
                                    </span>
                                </div>
                                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                                    <p className="mb-0 register-link">
                                        <span>Open hours:</span> <span>Monday - Sunday</span>{" "}
                                        <span>8:00AM - 9:00PM</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
            >
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        Feliciano
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="index.html" className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="menu.html" className="nav-link">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">
                                    Stories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item cta">
                                <a href="reservation.html" className="nav-link">
                                    Book a table
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
