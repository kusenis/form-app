import '../styles/Content-1.css';
import * as React from 'react';

const Content1 = () => {
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
    return(
        <div className="content-container">
            <div>
                <div className="title">
                    <p><b>1. ХҮСЭЛТ ГАРГАГЧ</b> /Та хүснэгтээс сонгон холбогдох мэдээллийг нөхнө үү/</p>
                </div>
                <div className="main-content">
                    <div className='content-1'>
                        <div className='check'>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='titles'>
                            <p>
                                Гадаадын <br/> иргэн
                            </p>
                        </div>
                        <div className='main'>
                            <p>
                                Харьяалал /аль улсын/:
                            </p>
                            <input type="text" />
                            <p>
                                Овог:
                            </p>
                            <input type="text" />
                            <p>
                                Эцэг/эх/-ийн нэр:
                            </p>
                            <input type="text" />
                            <p>
                                Нэр:
                            </p>
                            <input type="text" />
                            <p>
                                Регистрийн дугаар:
                            </p>
                            <input type="text" />
                            <p>
                                Утасны дугаар:
                            </p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='content-2'>
                        <div className='check1'>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='titles1'>
                            <p>Гадаадын <br/> улсын <br/> хуулийн <br/> этгээд</p>
                        </div>
                        <div className='main1'>
                            <p>Оноосон нэр:</p>
                            <input type="text" />
                            <p>Регистрын дугаар:</p>
                            <input type="text" />
                            <p>Утасны дугаар:</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='content-2'>
                        <div className='check1'>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='titles1'>
                            <p>Гадаадын <br/> хөрөнгө <br/> оруулалттай <br/> аж ахуйн<br/> нэгж</p>
                        </div>
                        <div className='main1'>
                            <p>Оноосон нэр:</p>
                            <input type="text" />
                            <p>Регистрын дугаар:</p>
                            <input type="text" />
                            <p>Утасны дугаар:</p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content1;
