import React, { useState, useEffect } from 'react';
import { DetailStyle } from './style';
import Axios from 'axios'

function Detail() {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        Axios.get('http://www.json-generator.com/api/json/get/bVcmdcFQrS?indent=2')
            .then(res => {
                if (res.status == 200) {
                    setDetail(res.data)
                }
            })
    }, []);

    return (
        <DetailStyle>
            {
                detail && detail.map(details => {
                    return (
                        <div key={details.id}>
                            <h4>Info</h4>
                            <div className="mobile">
                                <p>{details.mobile}</p>
                                <small>Mobile</small>
                            </div>
                            <div className="username">
                                <p>{details.username}</p>
                                <small>Username</small>
                            </div>
                            <div className="bio">
                                <p>{details.bio}</p>
                                <small>bio</small>
                            </div>
                        </div>
                    )
                })
            }
        </DetailStyle>
    )
}

export default Detail;
