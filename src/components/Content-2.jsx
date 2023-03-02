import '../styles/Content-2.css';

const Content2 = () =>{
    return(
        <div className="content-container1">
            <div>
                <div className="title">
                        <p><b>2. ИРГЭНИЙ ИТГЭМЖЛЭГДСЭН ТӨЛӨӨЛӨГЧ/ ХУУЛИЙН ЭТГЭЭДИЙГ ТӨЛӨӨЛӨХ ЭРХ БҮХИЙ
                            ЭТГЭЭДИЙН МЭДЭЭЛЭЛ<br/></b> /зөвхөн иргэн, хуулийн этгээдийг төлөөлж буй тохиолдолд нөхнө/</p>
                </div>
                <div className='content'>
                    <p>Овог:</p>
                    <input type="text" />
                    <p>Эцэг/эх/-ийн нэр:</p>
                    <input type="text" />
                    <p>Нэр:</p>
                    <input type="text" />
                    <p>Регистерийн дугаар:</p>
                    <input type="text" />
                    <p  className='phone'>Утасны дугаар:</p>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}
export default Content2