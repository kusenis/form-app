import '../styles/Content-7.css';

const Content7 = () =>{
    return(
        <div className="content-container-6">
            <div>
                <div className="top-text">
                    <p>Хүсэлтэд</p>
                    <input type="text" />
                    <p>хуудас баримт бичиг хавсаргасан болно.</p>
                </div>
                <div className="content6">
                    <div className="row">
                        <div className="request">
                            <p><b>Хүсэлт хүлээн авсан:</b></p>
                        </div>
                        <div className="request">
                            <p><b>Хүсэлт гаргасан:</b></p>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="input">
                            <p>Газрын асуудал эрхэлсэн албан тушаалтан</p>
                            <input type="text" />
                            <p>хүлээн авч, хүсэлтийн</p>
                            <input type="text" />
                            <p>дугаарт бүртгэв.</p>
                        </div>
                        <div className="input">
                            <input type="text" />
                            <p>/хүсэлт гаргагчийн овог, нэр/</p>
                        </div>
                    </div>
                    <div className="date">
                        <p>2</p>
                        <input type="text" />
                        <p>оны</p>
                        <input type="text" />
                        <p>сарын</p>
                        <input type="text" />
                        <p>өдөр</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content7;