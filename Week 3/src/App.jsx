import { TextUpdater } from './components/textU';
import { SimpleForm } from './components/simpleF';
import { UserCard } from './components/userC';
import { CustomButton } from './components/customB';
import { LoginForm } from './components/loginF';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          🌟 React Assignment Components 🌟
        </h1>

        <section className="p-4 border border-blue-200 rounded-lg shadow-sm bg-blue-50">
          <h2 className="text-xl font-semibold mb-2 text-blue-500">Text Updater</h2>
          <TextUpdater />
        </section>

        <section className="p-4 border border-green-200 rounded-lg shadow-sm bg-green-50">
          <h2 className="text-xl font-semibold mb-2 text-green-500">Simple Form</h2>
          <SimpleForm />
        </section>

        <section className="p-4 border border-purple-200 rounded-lg shadow-sm bg-purple-50">
          <h2 className="text-xl font-semibold mb-2 text-purple-500">User Card</h2>
          <UserCard name="John Doe" email="john@example.com" />
        </section>

        <section className="p-4 border border-yellow-200 rounded-lg shadow-sm bg-yellow-50">
          <h2 className="text-xl font-semibold mb-2 text-yellow-500">Custom Button</h2>
          <CustomButton />
        </section>

        <section className="p-4 border border-red-200 rounded-lg shadow-sm bg-red-50">
          <h2 className="text-xl font-semibold mb-2 text-red-500">Login Form</h2>
          <LoginForm />
        </section>
      </div>
    </div>
  );
}

export default App;
