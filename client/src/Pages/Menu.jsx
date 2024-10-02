import { Link } from "react-router-dom";

function Menu(){

    const starterItems=["Tandoori Paneer Tikka", "Hara Bhara Kebab", "Palak Chaat", "Dahi Ke Kebab", "Murg Malai Tikka", "Galouti Kebab", "Amritsari Fish Tikka"];
    const starterPrices = [800, 750, 850, 900, 1200, 1500, 1400];
    const soupItems = ["Tomato Shorba", "Mulligatawny Soup", "Lemon Coriander Soup", "Manchow Soup", "Sweet Corn Soup", "Hot and Sour Soup", "Cream of Mushroom Soup"];
    const soupPrices = [300, 350, 400, 350, 300, 450, 400];
    const saladItems = ["Greek Salad", "Caesar Salad", "Pasta Salad", "Kachumber Salad", "Fruit Salad", "Coleslaw", "Chicken Salad", "Tandoori Chicken Salad"];
    const saladPrices = [500, 600, 550, 300, 400, 250, 700, 750];
    const breadItems = ["Naan", "Roti", "Garlic Naan", "Lachha Paratha", "Missi Roti"];
    const breadPrices = [150, 100, 200, 180, 160];
    const riceItems = ["Jeera Rice", "Pulao", "Biryani", "Lemon Rice", "Vegetable Fried Rice", "Chicken Biryani", "Mutton Biryani"];
    const ricePrices = [250, 300, 600, 270, 350, 700, 800];
    const dessertItems = ["Gulab Jamun", "Rasgulla", "Kheer", "Mysore Pak", "Ice Cream", "Chocolate Mousse"];
    const dessertPrices = [150, 120, 200, 180, 100, 250];
    const beverageItems = ["Masala Chai", "Coffee", "Lassi", "Fresh Lime Soda", "Mojito", "Coconut Water", "Soft Drinks"];
    const beveragePrices = [100, 150, 120, 130, 250, 80, 60];


    return(
        <div className="bg-[url('./src/assets/menudark.avif')] bg-cover bg-fixed">
            <Link to = "/">
                <span className="material-symbols-outlined text-5xl text-white p-3">home</span>
            </Link>
        <div className="min-h-svh flex justify-center font-teko">
            <div className="m-16 bg-cyan-50 w-[60%] flex flex-col p-3 rounded-3xl">
                <h1 className="text-6xl text-center mb-3 font-monte-carlo">Menu</h1>
                <div className="flex flex-wrap justify-center gap-3">
                    <div className="w-[40%] border-cyan-400 border-2 rounded-md py-2 px-5 flex flex-col">
                        <h2 className="text-3xl font-semibold m-2">Starters</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{starterItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{starterPrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>
                            
                    </div>
                    <div className="w-[40%]  border-cyan-400 border-2 rounded-md py -2 px-5">
                        <h2 className="text-3xl font-semibold m-2">Soups</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{soupItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{soupPrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>
                    </div>
                    <div className="w-[40%]  border-cyan-400 border-2 rounded-md py-2 px-5">
                        <h2 className="text-3xl font-semibold m-2">Salads</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{saladItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{saladPrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>
                    </div>
                    <div className="w-[40%]  border-cyan-400 border-2 rounded-md py-2 px-5">
                        <h2 className="text-3xl font-semibold m-2">Breads</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{breadItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{breadPrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>
                    </div>
                    <div className="w-[40%]  border-cyan-400 border-2 rounded-md py-2 px-5">
                        <h2 className="text-3xl font-semibold m-2">Rice</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{riceItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{ricePrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>
                    </div>
                    <div className="w-[40%]  border-cyan-400 border-2 rounded-md py-2 px-5">
                        <h2 className="text-3xl font-semibold m-2">Desserts</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{dessertItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{dessertPrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>
                    </div>
                    <div className="w-[82%]  border-cyan-400 border-2 rounded-md py-2 mb-12 px-5">
                    <h2 className="text-3xl font-semibold m-2">Beverages</h2>
                        <div className="flex flex-wrap justify-between">
                            <div>{beverageItems.map((item)=><p className="font-sora">{item}</p>)}</div>
                            <div>{beveragePrices.map((price)=><p className="font-sora">₹{price}</p>)}</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}
export default Menu