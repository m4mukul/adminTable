
import './App.css'
import AdminTable from './components/AdminTable'

function App() {

  return (
    <div>
      <header className="bg-teal-500 text-white p-4">
        <h1 className="text-xl">Admin Dashboard</h1>
      </header>
      <main className="p-4">
        <AdminTable />
      </main>
    </div>
  )
}

export default App
