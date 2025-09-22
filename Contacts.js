import './ContactStile.css';


const Contacts = () => {
    return (
        <div className='ContactStile'>
            <h3 className='fontStyle'>
                Entrar em contato através dos seguintes canais:
                <ul className='fontStyle'>
                    <li className='fontStyle'>Email: teste123@gmail.com</li>
                    <li className='fontStyle'>Telefone: (91) 0000-0000 </li>
                    <li className='fontStyle'>LinkedIn: teste-usuario </li>
                    <li className='fontStyle'>GitHub: @teste-usuario</li>  
                </ul>        
            </h3>
        </div>
    );
}
export default Contacts;
