import { Link, useNavigate } from "react-router-dom";

function ResetPasswordPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-12 text-white">
          <div>
            <h1 className="text-4xl font-bold">LocalConnect</h1>
            <p className="mt-4 max-w-md text-slate-300">
              Espace d'administration pour gérer les étudiants, les commerçants,
              les avis et les paramètres de la plateforme.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Back-office</p>
            <p className="mt-2 text-2xl font-semibold">
              Choisis un nouveau mot de passe pour retrouver l'accès
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Nouveau mot de passe</h2>
              <p className="mt-2 text-sm text-slate-500">
                Saisis ton nouveau mot de passe ci-dessous.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="newPassword" className="mb-2 block text-sm font-medium text-slate-700">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="newPassword"
                  placeholder="••••••••"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Réinitialiser le mot de passe
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/login" className="text-sm font-medium text-slate-500 hover:text-slate-900">
                ← Retour à la connexion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;