import React from 'react';
import MUIDataTable from "mui-datatables";
import useAxios from 'axios-hooks';
import { Layout } from '../components/layout/';
import '../scss/loading.scss';

const UsersPage = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    'http://127.0.0.1:8000/api/users/view'
  )

  if (loading) return (
    <Layout>
      <div className="w-screen h-screen bg-transparent px-auto py-auto">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4 mx-auto"></div>
      <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
      <p className="w-1/3 mx-auto text-center text-white">This may take a few seconds, please don't close this page.</p>
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
        sort: true,
      }
    },
    {
      name: "phone",
      label: "Phone number",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "email",
      label: "Email account",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "created_at",
      label: "Ngày tham gia",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "updated_at",
      label: "Chỉnh sửa lần cuối",
      options: {
        filter: true,
        sort: true,
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
        <MUIDataTable
          title={"List"}
          data={result}
          columns={columns}
          options={options}
        />
      </div>

    </Layout>
  )
}

export default UsersPage;