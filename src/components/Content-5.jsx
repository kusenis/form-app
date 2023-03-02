import '../styles/Content-5.css';

const Content5 = () => {
    return(
        <div className="content-container4">
            <div>
                <div className="title">
                    <p><b>5. ГАЗАР АШИГЛАХ ХҮСЭЛТИЙН ДЭЛГЭРЭНГҮЙ АГУУЛГА</b>/Та хүснэгтээс сонгоод хийнэ үү/</p>
                </div>
                <div className="content4">
                    <div className="permission">
                        <div className="checkss">
                            <input type="checkbox" />
                        </div>
                        <div className="question">
                            <div>
                                <p><b>1. Газар ашиглах эрхийн гэрчилгээний хугацаа сунгуулах:/хүсэлт гаргаж буй хугацаа/</b></p>
                                <div className='time'>
                                    <p>Хугацаа:</p>
                                    <input type="text" />
                                    <p>жил</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="changing">
                        <div className="checkss1">
                            <input type="checkbox" />
                        </div>
                        <div className="question1">
                            <div>
                                <p><b>2. Ашиглаж буй газрын зориулалт өөрчлүүлэх:</b>/хүсэлт гаргаж буй газар ашиглалтын зориулалт/</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="plus">
                        <div>
                            <p><b>3. Хүсэлтийн нэмэлт агуулга:</b></p>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content5;