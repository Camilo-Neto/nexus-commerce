import { Header } from "../../../components/Header"
import { Snacks } from "../../../components/Snacks"
import { TitleCommerce } from "../../../components/TitleCommerce"

export default function Drinks(){

    const data = [
        {
            id: 1,
            snack: 'drink',
            name: 'Guaraná Antactica',
            description: 'O irressistível e saboroso guaraná pronto para matar a sua sede.',
            price: 6,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 2,
            snack: 'drink',
            name: 'Coca-Cola',
            description: 'A tradicional Coca-Cola que a família brasileira ama.',
            price: 8,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 3,
            snack: 'drink',
            name: 'Suco de laranja',
            description: 'Suco natural de laranja para fortificar a sua saúde.',
            price: 15,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 4,
            snack: 'drink',
            name: 'Água mineral',
            description: 'Suco natural de laranja para fortificar a sua saúde.',
            price: 5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 4,
            snack: 'drink',
            name: 'Pepsi',
            description: 'Suco natural de laranja para fortificar a sua saúde.',
            price: 8,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
    ]


    return (
        <>
            <Header title="Drinks"/>
            <TitleCommerce>Drinks</TitleCommerce>
            <Snacks snacks={data}></Snacks>
        </>
    )
}
