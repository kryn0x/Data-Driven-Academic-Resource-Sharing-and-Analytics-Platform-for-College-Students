import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFE3] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center">
          <h1 className="text-3xl font-bold text-[#6D8196]">AcadIntel</h1>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold text-[#4A4A4A]">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-[#6D8196]">
          Or{' '}
          <Link to="/register" className="font-medium text-[#6D8196] hover:text-[#4A4A4A]">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10 border border-[#CBCBCB]">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A]">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#CBCBCB] rounded-md placeholder-[#CBCBCB] focus:outline-none focus:ring-[#6D8196] focus:border-[#6D8196]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#4A4A4A]">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#CBCBCB] rounded-md placeholder-[#CBCBCB] focus:outline-none focus:ring-[#6D8196] focus:border-[#6D8196]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#6D8196] focus:ring-[#6D8196] border-[#CBCBCB] rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#4A4A4A]">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#6D8196] hover:text-[#4A4A4A]">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6D8196] hover:bg-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6D8196]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;