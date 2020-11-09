import './Subtotal.css';
import CurrencyFormate from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormate
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            {
                user ? 
                <button style={{ display: !basket.length && 'none' }} onClick={e => history.push('/payment')}>Proceed to Checkout</button> :
                <button style={{ display: !basket.length && 'none' }} onClick={e => history.push('/login')}>Login to Checkout</button>
            }

            
        </div>
    );
};

export default Subtotal;