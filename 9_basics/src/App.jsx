import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import InfoComponent from './InfoComponent';
import Parent from './Parent';
import Counter from './Counter';
import LoggerComponent from './LoggerComponent';
import LoginStatus from './LoginStatus';
import ProductList from './ProductList';
 
function App(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
            <InfoComponent/>
            <Parent/>
            <Counter/>
            <LoggerComponent/>
            <LoginStatus/>
            <ProductList/>
           
        </div>
    );
}
export default App;