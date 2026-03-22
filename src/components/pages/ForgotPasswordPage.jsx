import { Link, useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/reset-password");
  }

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-12 text-white">
          <div>
            <h1 className="text-4xl font-bold">LocalConnect</h1>
            <p className="mt-4 max-w-md text-slate-300">
              Espace d’administration pour gérer les étudiants, les commerçants,
              les avis et les paramètres de la plateforme.
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Back-office
            </p>
            <p className="mt-2 text-2xl font-semibold">
              Réinitialise ton mot de passe pour retrouver l’accès
            </p>
          </div>
        </div>

        <div className="flex min-h-screen items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-lg md:p-10">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold leading-tight text-slate-900">
                Mot de passe oublié
              </h1>
              <p className="mt-3 text-base text-slate-500">
                Entre ton adresse e-mail pour recevoir un lien de réinitialisation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="resetEmail"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="resetEmail"
                  placeholder="admin@localconnect.ch"
                  required
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Envoyer le lien de réinitialisation
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                ← Retour à la connexion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;