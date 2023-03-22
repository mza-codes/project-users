import useAuthService from "../services/authService";

let id: any;
let test = 0;
let result = false;

export async function isValidUserName(str: string) {
    clearTimeout(id);
    if (str.length < 5 || (/\s/).test(str)) return false;
    if (useAuthService.getState().previous.value === str)
        return useAuthService.getState().previous.result;

    id = setTimeout(async () => {
        useAuthService.getState().cancelRequest("sec");
        result = await useAuthService.getState().validateUName(str);
        console.count(`Testing name: ${str} => ${result}`);
    }, 600);

    console.log("Returning res: ", { result, old: useAuthService.getState().previous.result });

    return result;
};

/** id = setTimeout(() => {
    previous.value = str;
    test++;
    console.log(`Testing name: ${str} ->`, test);
    if (test >= 10 && str.length > 6) return result = true;
    else return result = false;
}, 500); */