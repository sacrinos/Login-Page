import { AuthLayout } from './components/auth/AuthLayout';
import { AuthSidebar } from './components/auth/AuthSidebar';
import { LoginForm } from './components/auth/LoginForm';

function App() {
  return (
    <AuthLayout>
      <AuthSidebar />
      <LoginForm />
    </AuthLayout>
  );
}

export default App;