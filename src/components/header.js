import Nav from "./nav";

const Header = {
    render() {
        return /* html */ `
        <header class="max-w-5xl mx-auto">
        <div class="bg-slate-600 py-4">
           
         <div class="text-white pl-120 pl-3 inline-block"><a href="/signin">Đăng nhập</a></div>
        <div class="text-white pl-3 inline-block"><a a href="/signup">Đăng kí</a></div>
            <img src="https://picsum.photos/150/50" class="mx-auto"/>
           
            
        </div>
       
        </header>
        <div class="bg-yellow-600 max-w-5xl mx-auto "> ${Nav.render()}</div>
        
        `;
    },
};

export default Header;