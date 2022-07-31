import { AppTypes } from "../../Types";
import { Button, Card, Image } from "react-bootstrap";
import { TiPlus, TiMinus } from "react-icons/ti";


const MenuItems = ({ menu }: AppTypes) => {
    return (
        <div className="col-col pb-5 ">
            {menu?.map((item) => {
                return (
                    <Card className="mb-1  p-3 " key={item?.id} >
                        <div className="gap-4 d-flex justify-content-evenly">
                            <div >
                                <Image width={130} src={require('../../Imgs/seafood pizza.png')} />
                            </div>
                            <div className="w-75">
                                <h4>{item?.title}</h4>
                                <div className="mb-2 text-muted">
                                    {item?.description}
                                </div>
                                <h4 style={{ color: '#ff9200' }}>Price: L.E {item?.price}</h4>
                                <div >
                                    <Button size="sm" type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                                        <TiMinus />
                                    </Button>
                                        <span className="m-1">10</span>
                                    <Button size="sm" type="button" className="btn btn-light" data-mdb-ripple-color="dark">
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
