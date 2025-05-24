export interface Product {
    id: number;
    productName: string;
    image: string;
    from: string;
    nutrients: string;
    quantity: string;
    price: string;
    organic: boolean;
    description: string;
};

export const replaceTemp = (temp: string, product: Product) => {
    let outPut = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    outPut = outPut.replace(/{%IMAGE%}/g, product.image);
    outPut = outPut.replace(/{%PRICE%}/g, product.price);
    outPut = outPut.replace(/{%ID%}/g, product.id.toString());
    outPut = outPut.replace(/{%FROM%}/g, product.from);
    outPut = outPut.replace(/{%NUTRIENTS%}/g, product.nutrients);
    outPut = outPut.replace(/{%QUANTITY%}/g, product.quantity);
    outPut = outPut.replace(/{%DESCRIPTION%}/g, product.description);
    outPut = outPut.replace(/{%NOT_ORGANIC%}/g, product.organic ? '' : 'not-organic');
    return outPut;
}