import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/admin/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden flex-col justify-between bg-slate-900 p-12 text-white lg:flex">
          <div>
            <h1 className="text-4xl font-bold">LocalConnect</h1>
            <p className="mt-4 max-w-md text-slate-300">
              Espace d'administration pour gérer les étudiants, les commerçants,
              les avis et les paramètres de la plateforme.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Back-office
            </p>
            <p className="mt-2 text-2xl font-semibold">
              Connecte-toi pour accéder au tableau de bord
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Connexion</h2>
              <p className="mt-2 text-sm text-slate-500">
                Connecte-toi pour accéder au back-office LocalConnect
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="admin@localconnect.ch"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                  required
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Mot de passe
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-orange-600 hover:text-orange-700"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 font-medium text-black-700 transition hover:bg-slate-800"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;