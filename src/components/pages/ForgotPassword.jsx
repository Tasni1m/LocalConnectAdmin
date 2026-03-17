import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Mot de passe oublié</h1>
          <p className="mt-2 text-sm text-slate-500">
            Entre ton adresse e-mail pour recevoir un lien de réinitialisation
          </p>
        </div>
        <form className="space-y-5">
          <div>
            <label htmlFor="resetEmail" className="mb-2 block text-sm font-medium text-slate-700">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="resetEmail"
              placeholder="admin@localconnect.ch"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-orange-500 px-4 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Envoyer le lien
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;