//For example, the following uses the try…catch statement without the exception variable:
const isValidJSON = (str) => {
    try {
    JSON.parse(str);
    return true;
    } catch {
    return false;
    }
   };
   let valid = isValidJSON(`{"language":"JavaScript"}`);
   console.log(valid)