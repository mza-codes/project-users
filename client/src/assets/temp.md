const [source, setSource] = useState<user[]>([]);

useEffect(() => {
let arr: user[] = [];
function populateTable() {
return new Promise((res, rej) => {
users.forEach((user) => {
arr.push({
Name: `${user.name.title} ${user.name.first} ${user.name.last}`,
Email: user.email,
Gender: user.gender,
Country: user.location.country,
Phone: user.phone,
});
});
res(true);
});
}

        populateTable().then(() => {
            setSource(arr);
        });

        return () => {
            console.log("UNMOUNT");
        };
    }, []);

let tableUser = {
Name: "",
Email: "",
Gender: "",
Country: "",
Phone: "",
};

type user = typeof tableUser;
