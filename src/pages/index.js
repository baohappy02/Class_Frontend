import React from 'react';
import useAxios from 'axios-hooks';
import { Layout } from '../components/layout/';
import '../scss/loading.scss';
import { Link } from 'gatsby';

const IndexPage = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://127.0.0.1:8000/api/users/view'
  )

  if (loading) return (
    <Layout>
      <div classNameName="w-screen h-screen bg-transparent px-auto py-auto">
        <div classNameName="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mx-auto"></div>
        <h2 classNameName="text-center text-white text-xl font-semibold">Loading...</h2>
        <p classNameName="w-1/3 mx-auto text-center text-white">This may take a few seconds, please don't close this page.</p>
      </div>
    </Layout>
  )
  if (error) return (
    <p>Error!</p>
  )
  console.log(data.data);

  const columns = [
    {
      name: "first_name",
      label: "First name",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "last_name",
      label: "Last name",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "phone",
      label: "Phone number",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "email",
      label: "Email account",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "created_at",
      label: "Ngày tham gia",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "updated_at",
      label: "Chỉnh sửa lần cuối",
      options: {
        filter: true,
        sort: false,
      }
    },
  ];

  const result = data.data

  const options = {
    filterType: 'checkbox',
  };

  return (
    <Layout>
      <div className="py-10 px-4">
        <button className="flex-shrink bg-white py-2 px-3 mb-4 text-xl font-semibold border rounded-full" onClick={refetch}>refetch</button>
        <div className="font-sans min-h-screen antialiased bg-transparent pt-24 pb-5">
          <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
            <h1 className="font-bold text-center text-4xl text-yellow-500">Your<span className="text-blue-500">App</span></h1>
            <form action="#">
              <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
                <h1 className="font-bold text-xl text-center">Sign in to your account</h1>

                <div className="flex flex-col space-y-1">
                  <input type="text" name="username" id="username" className="border-2 rounded px-3 py-2 w-full hover:bg-green-200 focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" />
                </div>

                <div className="flex flex-col space-y-1">
                  <input type="password" name="password" id="password" className="border-2 rounded px-3 py-2 w-full hover:bg-green-200 focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" />
                </div>

                <div className="relative">
                  <input type="checkbox" name="remember" id="remember" checked className="inline-block align-middle" />
                  <label className="inline-block align-middle" for="remember">Remember me</label>
                </div>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  <a href="#" className="inline-block text-blue-500 hover:text-blue-800 hover:underline">Forgot your password?</a>
                  <button type="submit" className="bg-blue-500 ring ring-purple-600 ring-offset-4 ring-offset-purple-100 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-indigo-500 hover:text-black transition-colors">Log In</button>
                </div>
              </div>
            </form>
            <div className="flex justify-center text-black text-sm">
              <p>&copy;2021. All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/users">User table</Link>
    </Layout>
  )
}

export default IndexPage;