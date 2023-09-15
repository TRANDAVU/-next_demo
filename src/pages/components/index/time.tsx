import React, { useEffect } from 'react';
import Image from 'next/image';
import CounterNew from '@/pages/components/couter'

const datas_1 = [
    {
        startNum: 0,
        endNum: 18,
        duration: 3,
        delay: 1,
        text: 'YEARS OF EXPERIENCED'
    },
    {
        startNum: 0,
        endNum: 100,
        duration: 3,
        delay: 1,
        text: 'Films/week'
    },
    {
        startNum: 0,
        endNum: 1000,
        duration: 3,
        delay: 1,
        text: 'Staffs'
    },
    {
        startNum: 0,
        endNum: 15000,
        duration: 3,
        delay: 1,
        text: 'Happy Customers'
    }
];

const TimeComponent = () => {
    return (
        <section className="ftco-section ftco-counter img ftco-no-pt" id="section-counter">
            <div className="container">
                <div className="row d-md-flex">
                    <div className="col-md-9">
                        <div className="row d-md-flex align-items-center">
                            {datas_1.map((data, i) => (
                                <CounterNew data={data} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3 text-center text-md-left">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeComponent;
