import './CardStile.css';

const CardProfile = (props) => {
    return (
        <div className='CardStile'>
            <p className='fontStyleCard'>Nome: {props.name}</p>
            <p className='fontStyleCard'>Idade: {props.age}</p>
            <p className='fontStyleCard'>Bio: {props.bio}</p>
        </div>


    );

};

export default CardProfile;
