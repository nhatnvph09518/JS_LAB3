import Navigo from "navigo"; // import(nhập) Navigo
import Homepage from "./pages/home";
import Newspage from "./pages/news";
import Product from "./pages/product";
import Footer from "./components/footer";
import Header from "./components/header";
import Detail from "./pages/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" }); // lấy tất cả thẻ a & add data-navigo

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

// phương thức của class Navigo
router.on({
    "/": () => {
        print(Homepage.render());
    },
    "/news": () => {
        print(Newspage.render());
    },
    "/product": () => {
        print(Product.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(Detail.render(id));
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/signup": () => {
        print(Signup.render());
    },
});

router.resolve(); // giải quyết