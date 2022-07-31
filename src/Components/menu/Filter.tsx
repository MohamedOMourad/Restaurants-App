import { useState } from 'react';
import { Image, Pagination } from 'react-bootstrap';
import { AppTypes } from "../../Types";

const Filter = ({ selecItem }: AppTypes) => {
    const [type, setType] = useState("popular")
    function selectCategori(val: string) {
        { selecItem && selecItem(val) }
        setType(val)
    }
    return (
        <Pagination className='gap-2 d-flex justify-content-center align-items-center'>
            <Pagination.Item onClick={() => selectCategori("popular")} active={type ==='popular'}>
                <Image
                    style={{ maxWidth: "4em", minHeight: "4em" }}
                    className='my-5'
                    src={require('../../Imgs/popular-icon-17.jpg')}
                />
            </Pagination.Item>
            <Pagination.Item onClick={() => selectCategori("chicken")} active={type === 'chicken'}>
                <Image
                    style={{ maxWidth: "4em", minHeight: "4em" }}
                    className='my-5'
                    src={require('../../Imgs/Chicken.png')}
                />
            </Pagination.Item>
            <Pagination.Item onClick={() => selectCategori("pizza")} active={type === 'pizza'}>
                <Image
                    style={{ maxWidth: "4em", minHeight: "4em" }}
                    className='my-5'
                    src={require('../../Imgs/Pizza.png')}
                />
            </Pagination.Item>
            <Pagination.Item onClick={() => selectCategori("burger")} active={type === 'burger'}>
                <Image
                    style={{ maxWidth: "4em", minHeight: "4em" }}
                    className='my-5'
                    src={require('../../Imgs/Burger.png')}
                />
            </Pagination.Item>
        </Pagination>
    )
}

export default Filter;








































































            //     <Button variant='outline-warning'>Popular</Button>
            //     <Button variant='outline-warning'>PIZZA</Button>
            //     <Button variant='outline-warning'>BURGER</Button>
            //     <Button variant='outline-warning'>CHICKEN</Button>
        // <div className=' py-3 my-3 d-flex justify-content-center '>
        //     <Carousel variant="dark" className='w-25 d-flex justify-content-center '>
        //         <Carousel.Item className='text-center'>
        //             <Image
        //                 style={{ maxWidth: "4.7em", maxHeight: "4.7em" }}
        //                 className='my-5'
        //                 src={require('../../Imgs/download (1).jpg')}
        //             />
        //         </Carousel.Item>
        //         <Carousel.Item className='text-center'>
        //             <Image
        //                 style={{ maxWidth: "5em", maxHeight: "5em" }}
        //                 className='my-5'
        //                 src={require('../../Imgs/Pizza.png')}
        //             />
        //         </Carousel.Item>
        //         <Carousel.Item className='text-center'>
        //             <Image
        //                 style={{ maxWidth: "6em", maxHeight: "6em" }}
        //                 className='my-5'
        //                 src={require('../../Imgs/Burger.png')}
        //             />
        //         </Carousel.Item>
        //     </Carousel>












            //         <Pagination>
            //     <Pagination.Item key={1} active={true}>
            //         <Image
            //             style={{ maxWidth: "4.7em", maxHeight: "4.7em" }}
            //             className='my-5'
            //             src={require('../../Imgs/download (1).jpg')}
            //         />
            //     </Pagination.Item>
            // </Pagination>
            // <br />

            // <Pagination size="lg">
            //     <Pagination.Item key={1} active={true}>
            //         <Image
            //             style={{ maxWidth: "4.7em", maxHeight: "4.7em" }}
            //             className='my-5'
            //             src={require('../../Imgs/download (1).jpg')}
            //         />
            //     </Pagination.Item>
            // </Pagination>
            // <br />