import BackgroundImage from '../../assets/human_resource_wallpaper.jpg';
import LoginForm from './components/LoginForm';
const Login = ({ setSessionUser }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <main
          style={{ backgroundImage: `url(${BackgroundImage})` }}
          className="flex justify-center items-center h-screen bg-cover bg-center"
        >
          <div className="w-4/5 p-8 rounded bg-white sm:w-96">
            <h1 className="title text-center">Iniciar Sesión</h1>
            <LoginForm setSessionUser={setSessionUser} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
