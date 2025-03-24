interface CartItemProps {
    id?: string,
    count: number,
    items: object,
    title: string,
    price: string,
    callback?: (index: number, count:number) => void; 
}
export default function CartItem({...a}: CartItemProps) {
    return (
        <>
            <h2>{a.count}x &nbsp; {a.title} -- {a.price}:-</h2>
        </>
    )
}