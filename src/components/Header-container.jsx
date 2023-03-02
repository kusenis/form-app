import '../styles/Header-container.css';

const Header = () => {
    return (
        <div className='main-container'>
            <h3>ГЗБГЗЗГ-ын даргын 2019 оны А/156<br/>
                дугаар тушаалын гуравдугаар хавсралт</h3>
            <h2>ГАЗАР АШИГЛАХ ТУХАЙ ХҮСЭЛТ</h2>
        <div className="header-input">
            <div>
                <div className='input'>
                    <input type="text" />
                    <p>аймаг /нийслэл/-ийн</p>
                </div>
                <div className='input'>
                    <input type="text" />
                    <p>сумын газрын даамал</p>
                </div>
                <div className='input1'>
                    <p>/дүүргийн Газрын алба/-д</p>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Header;