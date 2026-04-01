import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFE3] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center">
          <h1 className="text-3xl font-bold text-[#6D8196]">AcadIntel</h1>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold text-[#4A4A4A]">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-[#6D8196]">
          Or{' '}
          <Link to="/login" className="font-medium text-[#6D8196] hover:text-[#4A4A4A]">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10 border border-[#CBCBCB]">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A]">
                Full name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#CBCBCB] rounded-md placeholder-[#CBCBCB] focus:outline-none focus:ring-[#6D8196] focus:border-[#6D8196]"
                />
              </div>
            </div>

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
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#CBCBCB] rounded-md placeholder-[#CBCBCB] focus:outline-none focus:ring-[#6D8196] focus:border-[#6D8196]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-[#4A4A4A]">
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-[#CBCBCB] rounded-md placeholder-[#CBCBCB] focus:outline-none focus:ring-[#6D8196] focus:border-[#6D8196]"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6D8196] hover:bg-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6D8196]"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;