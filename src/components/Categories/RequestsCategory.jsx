const RequestsCategory = async () => {
   const response = await fetch('https://kaaryar-ecom.liara.run/v1/categories');
   const data = await response.json();
   return data;
}
export default RequestsCategory;

