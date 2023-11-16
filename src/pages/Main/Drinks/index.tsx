import { Header } from "../../../components/Header"
import { Snacks } from "../../../components/Snacks"
import { TitleCommerce } from "../../../components/TitleCommerce"

export default function Drinks(){

    const data = [
        {
            id: 1,
            snack: 'drink',
            name: 'Guarana Antactica',
            description: 'O irressistível e saboroso guaraná pronto para matar a sua sede.',
            price: "8,00",
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 2,
            snack: 'drink',
            name: 'coca-cola',
            description: 'A tradicional Coca-Cola que a família brasileira ama.',
            price: "10,00",
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 3,
            snack: 'drink',
            name: 'suco de laranja',
            description: 'Suco natural de laranja para fortificar a sua saúde.',
            price: "11,00",
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