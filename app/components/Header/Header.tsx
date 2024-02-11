import AppBar from "../AppBar/AppBar";





const Header = ({children}) => {
    return (
        <>
            <AppBar/>
            {children}
        </>
    );
}

export default Header;