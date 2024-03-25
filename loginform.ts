import inquirer from "inquirer";

console.log("\nWelcome to Daraz Online Shopping Store\n");
console.log("Login in or Sign up to your account\n");

const list = await inquirer.prompt([{
    message: "Login in or Sign up?",
    type: "list",
    name: "page",
    choices: ["Sign up", "Sign in"]
}]);

if(list.page == "Sign up"){
    
    // Example database
    const users: { username: string, password: string, email: string }[] = [
        { username: 'user1', password: 'password1', email: 'email@example.com' },
        { username: 'user2', password: 'password2', email: 'email@example.com' },
        // Add more users as needed
    ];

    const login = async () => {
        const credentials = await inquirer.prompt([
            {
                type: 'input',
                name: 'username',
                message: 'Enter your username:'
            },
            {
                type: 'password',
                name: 'password',
                message: 'Enter your password:'
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email"
            }
        ]);

        // Trim input
        const username = credentials.username.trim();
        const password = credentials.password.trim();
        const email = credentials.email.trim();

        console.log("Entered username:", username);
        console.log("Entered password:", password);

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log('Login successful');
        } else {
            console.log('Incorrect username or password');
        }
    };

login();
} else {
    const credentials = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your username:'
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter your password:'
        }
    ]);
    console.log("Entered username:", credentials.username);
    console.log("Entered password:", credentials.password);
    console.log("Sign in successful");

    let dashboard = await inquirer.prompt([{
        message: "Dashboard",
        type: "list",
        name: "page",
        choices: ["Dashboard", "Logout"]
    }]);
    if(dashboard.page == "Dashboard"){
        console.log("Dashboard");
        // Sample list of items
const items = [
    { name: "T-Shirt", price: 20 },
    { name: "Jeans", price: 40 },
    { name: "Shoes", price: 60 },
    { name: "Bags", price: 80 },
    { name: "Wallet", price: 100 },
    { name: "Mobile", price: 120 },
    { name: "Laptop", price: 140 },
    { name: "TV", price: 160 },
    { name: "Headphones", price: 180 },
    { name: "Watch", price: 200 },
    { name: "Camera", price: 220 },
    { name: "Mic", price: 240 },
    { name: "Headset", price: 260 },
    { name: "Mouse", price: 280 },
    { name: "Keyboard", price: 300 },
    { name: "Mousepad", price: 320 },
    { name: "Tablet", price: 340 },
    { name: "Laptop", price: 360 },
    // Add more items as needed
];

// Cart to store selected items
let cart: any[] = [];

// Function to display items and prompt user to select
async function selectItems() {
    console.log("Available Items:");
    items.forEach(item => console.log(`${item.name} - ${item.price}`));

    const answers = await inquirer.prompt([
        { type: 'checkbox', name: 'selectedItems', message: 'Select items:', choices: items.map(item => ({ name: `${item.name} - ${item.price}`, value: item })) }
    ]);
    
    cart.push(...answers.selectedItems);
}

// Function to calculate total amount in the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Main function
async function main() {
    await selectItems();
    console.log("\nItems added to cart:");
    cart.forEach(item => console.log(`${item.name} - ${item.price}`));
    console.log("\nTotal Amount:", calculateTotal());
}

// Run the main function
main();

}
    else {
        console.log("Logout");
    }
}
