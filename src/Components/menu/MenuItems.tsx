import { ProductState, OrderCartState } from "../../Types";
import { Button, Card, Image } from "react-bootstrap";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, getQuantity } from "../../utils/Function";

const MenuItems = () => {
    const products = useSelector((state: ProductState) => state.Product);
    const dispatch = useDispatch();
    const ordersCart = useSelector((state: OrderCartState) => state.OrderCart);

    return (
        <div className="col-col pb-5 ">
            {products?.map((product) => {
                return (
                    <Card className="mb-1  p-3 " key={product?.id} >
                        <div className="gap-4 d-flex justify-content-evenly">
                            <div >
                                <Image width={130} src={require('../../Imgs/seafood pizza.png')} />
                            </div>
                            <div className="w-75">
                                <h4>{product?.name}</h4>
                                <div className="mb-2 text-muted">
                                    {product?.description}
                                </div>
                                <h4 style={{ color: '#ff9200' }}>Price: L.E {product?.price}</h4>
                                <div>
                                    <Button size="sm" type="button" className="btn btn-light" data-mdb-ripple-color="dark" onClick={() => addOrder('-', product, dispatch)}>
                                        <TiMinus />
                                    </Button>
                                    <span className="m-1">{getQuantity(product.id, ordersCart)}</span>
                                    <Button size="sm" type="button" className="btn btn-light" data-mdb-ripple-color="dark" onClick={() => addOrder('+', product, dispatch)}>
                                        <TiPlus />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div >
    )
}

export default MenuItems;
