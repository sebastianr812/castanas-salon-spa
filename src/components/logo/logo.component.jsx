import logo from '../../assets/castanas-salon-logo.jpeg';

const MyLogo = () => {
    return (
        <div  >
            <img className='block w-auto h-8 lg:hidden' alt='logo' src={logo} />
        </div >
    );
};

export default MyLogo;