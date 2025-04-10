import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import InfoComponent from './InfoComponent';
import Parent from './Parent';
import Counter from './Counter';
import LoggerComponent from './LoggerComponent';
import LoginStatus from './LoginStatus';
import ProductList from './ProductList';
import Button from './newD-9/Button';
import Input from './newD-9/Input'; 
import Card from './newD-9/Card';
import AppPage from './newD-9/AppPage';
import AppChild from './newD-9/AppChild';

function App(){
    return(
        <div className='bg-black text-white'>
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