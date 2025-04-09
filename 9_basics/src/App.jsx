import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import InfoComponent from './InfoComponent';
import Parent from './Parent';
import Counter from './Counter';
import LoggerComponent from './LoggerComponent';
import LoginStatus from './LoginStatus';
import ProductList from './ProductList';
import Button from './new/Button';
import Input from './new/Input'; 
import Card from './new/Card';
import AppPage from './new/AppPage';
import About from './new/About';
import AppChild from './new/AppChild';

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
            <Button/>
            <Input/>
            <Card/>
            <AppPage/>
            <AppChild/>
            
            <Card tittle="Card1" description="This is the first card."/>
            <Card tittle="Card2" description="This is the second card."/>
            <Card tittle="Card3" description="This is the third card."/>
    
        </div>
    
    );
}
export default App;