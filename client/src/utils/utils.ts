let id: any;
let test = 0;
export async function isValidUserName(str: string) {
    clearTimeout(id);
    if (str.length < 5) return false;
    let result = false;

    id = setTimeout(() => {
        test++;
        console.log(`Testing name: ${str} ->`, test);
        if (test >= 10) result = true;
        else result = false;
    }, 500);

    return result;
};