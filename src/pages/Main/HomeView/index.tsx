import { Header } from "../../../components/Header"
import { TitleCommerce } from "../../../components/TitleCommerce"

export default function HomeView() {

    const data = [
        {
            id: 1,
            snack: 'burguer',
            name: 'mega',
            description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
            price: 35.00,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 2,
            snack: 'burguer',
            name: 'Extra bacon',
            description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda quiejo e carne.',
            price: 23.5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 3,
            snack: 'burguer',
            name: 'Extra bacon',
            description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda quiejo e carne.',
            price: 23.5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
    ]

    return (
        <>
            <Header title="Home" />
            <TitleCommerce>Home</TitleCommerce>
        </>
    )
}