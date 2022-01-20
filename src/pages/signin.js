const Signin = {
    render() {
        return `
        <div class="max-w-5xl mx-auto flex flex-col justify-center">
        <div class="text-xl font-bold mb-2.5 mt-2.5 px-8"> Đăng nhập </div>
        <div class="">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Tên đăng nhập
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=" nhập tên đăng nhập">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="Mật khẩu">
              Mật khẩu
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3  focus:outline-none " id="password" type="password" placeholder="nhập mật khẩu">
            <input type="radio" name="re_pass" id="re_pass"> Nhớ mật khẩu
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        
      </div>
      </div>
        `;
    },
};

export default Signin;