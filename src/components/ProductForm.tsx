import React from 'react';
import axios from 'axios';
import { API } from '../config/constants';
import { useNavigate } from 'react-router-dom';

export interface ProductForm {

    productId?: number,
    name: string,
    salePrice: number,
    buyPrice: number,
    quantity: number,
    isActive?: boolean

}

export default function ProductList() {
    const navigate = useNavigate();
    const [productForm, setProductForm] = React.useState<ProductForm>({
        buyPrice: 0,
        quantity: 0,
        name: '',
        salePrice: 0,
    });


    const createProduct = React.useCallback(async () => {
        try {
            await axios.post(`${API}/Product`, productForm);
            navigate('../products', { replace: true });
        } catch (error) {
            console.error(error);
        }

    }, [productForm])


    const onSaveClick = () => {
        createProduct();
    }

    return (
        <form className='product-form'>
            <div className='product-form-header'>
                <h3>Register Product</h3>
            </div>
            <div className="product-form-main">
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" value={productForm.name} onChange={(e) =>
                        setProductForm({ ...productForm, name: e.target.value })} />
                </div>
                <div className="form-field">
                    <label>Sale Price</label>
                    <input type="number" min={0} value={productForm.salePrice} onChange={(e) =>
                        setProductForm({ ...productForm, salePrice: parseInt(e.target.value) })} />
                </div>
                <div className="form-field">
                    <label>Buy Price</label>
                    <input type="number" min={0} value={productForm.buyPrice} onChange={(e) =>
                        setProductForm({ ...productForm, buyPrice: parseInt(e.target.value) })} />
                </div>
                <div className="form-field">
                    <label>Quantity</label>
                    <input type="number" min={0} value={productForm.quantity} onChange={(e) =>
                        setProductForm({ ...productForm, quantity: parseInt(e.target.value) })} />
                </div>
                <div className="product-form-footer">
                    <button type='button' onClick={() => navigate('../products', { replace: true })}>
                        Cancel
                    </button>
                    <button type='button' onClick={() => onSaveClick()}>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
