import React, { useEffect } from 'react';
import Image from 'next/image';
const CustomerComponent = () => {
    return (
        <div className="center">
            <div className="wrapper">
                <div className="inner">
                    <div className="card">
                        <Image src='/images/person_1.jpg' width={100} height={250} alt='' />
                        <div className="content">
                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <p className="name">Jason McClean</p>
                            <span className="position">Customer</span>
                        </div>
                    </div>
                    <div className="card">
                        <Image src='/images/person_2.jpg' width={100} height={250} alt='' />
                        <div className="content">
                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <p className="name">Jason McClean</p>
                            <span className="position">Customer</span>
                        </div>
                    </div>
                    <div className="card">
                        <Image src='/images/person_3.jpg' width={100} height={250} alt='' />
                        <div className="content">
                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <p className="name">Jason McClean</p>
                            <span className="position">Customer</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CustomerComponent;
