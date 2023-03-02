import '../styles/Content-4.css';

const Content4 = () =>{
    return(
        <div className="content-container3">
            <div>
                <div className="title">
                        <p><b>4. ГАЗРЫН МЭДЭЭЛЭЛ</b>/Шинээр газар ашиглах болон эрх зүйн харилцаа үүссэн нэгж талбарын мэдээллийг нөхнө/</p>
                </div>
                <div className='content3'>
                    <div className="row">
                        <div className="num-place">
                            <div>
                                <p>1. Нэгж талбарын дугаар:</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="dedication-place">
                            <div>
                                <p>2. Газрын зориулалт:</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="size-place">
                            <div>
                                <p>3. Талбайн хэмжээ (м 2 /га):</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="registed-place">
                            <div>
                                <p>4. Газрын эрхийн улсын бүртгэлийн дугаар:</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="time-place">
                            <div>
                                <p>5. Газар ашиглах хугацаа (жил):</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="time-place1">
                                <p>6. Газрын байршилын хаяг:</p>
                                <input type="text" />
                                <p>аймаг/нийслэл/,</p>
                                <input type="text" />
                                <p>сум /дүүрэг/</p>
                                <input type="text" />
                                <p>баг/хороо/,</p>
                                <input type="text" />
                                <p>гудамж/хороолол/,</p>
                                <input type="text" />
                                <p>байр/хашааны дугаар/</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content4;