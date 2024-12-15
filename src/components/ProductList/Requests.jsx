
const fetchlist = async () => {
    const response = await fetch('https://kaaryar-ecom.liara.run/v1/products');
    const data = await response.json();
    return data;
}

export default fetchlist;