class Payment {
    #discount
    #ppn

    constructor (discount) {
        this.#discount = discount ? discount : 0
        this.#ppn = 0.1
    }

    checkItem(item) {
        return `Nama Item: ${item}`
    }

    hitungPayment(cash) {
        const price = cash * this.#discount
        const total = cash - price
        const pajak = total * this.#ppn
        const total_price = total + pajak
        return `Total Pembayaran: ${total_price}`
    }

    summary(cash, item){
        alert(`Summary: 
            ${this.checkItem(item)}
            ${this.hitungPayment(cash)}
            `)
    }
}

const inject = (cash, item, discount) => {
    const payment = new Payment(discount)
    payment.summary(cash, item)
};