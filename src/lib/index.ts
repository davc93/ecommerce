export const formatPrice = (amount:number) => {
    const formater = new Intl.NumberFormat('es-CL',{
        currency:'CLP'
    })

    return formater.format(amount)
}