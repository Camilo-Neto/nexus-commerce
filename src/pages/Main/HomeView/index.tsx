import { Header } from "../../../components/Header"
import { Snacks } from "../../../components/Snacks"
import { TitleCommerce } from "../../../components/TitleCommerce"


export default function HomeView() {

    const data = [
        {
            id: 1,
            snack: 'burguer',
            name: 'Mega Nexus',
            description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
            price: 35,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 2,
            snack: 'burguer',
            name: 'Extra bacon',
            description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
            price: 23.5,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 3,
            snack: 'burguer',
            name: 'Extra Nexus bacon',
            description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda quiejo e carne.',
            price: 25,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
        {
            id: 4,
            snack: 'burguer',
            name: 'Tradicional Nexus Burguer',
            description: 'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda quiejo e carne.',
            price: 20,
            image: 'https://i.imgur.com/upjIUnG.jpg'
        },
    ]

    return (
        <>
            <Header title="Home" />
            <TitleCommerce>Home</TitleCommerce>
            <Snacks snacks={data}></Snacks>
        </>
    )
}
