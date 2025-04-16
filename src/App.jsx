import { useEffect, useState } from "react";
import { auth, provider, signInWithPopup, signOut, db, doc, getDoc, setDoc } from "./firebase";

export default function App() {
  const [user, setUser] = useState(null);
  const [estado, setEstado] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const ref = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          setEstado(docSnap.data().estado || {});
        }
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const ref = doc(db, "usuarios", user.uid);
      setDoc(ref, { estado }, { merge: true });
    }
  }, [estado, user]);

  const rutina = [
    { dia: "Día 1", ejercicios: ["Press banca", "Curl bíceps", "Vuelo lateral"] },
    { dia: "Día 2", ejercicios: ["Bici", "Plancha", "Dead bug"] }
  ];

  const toggle = (dia, ejercicio) => {
    const key = dia + ejercicio;
    setEstado((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetear = () => setEstado({});

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Rutina V4 con Firestore</h1>
      {user ? (
        <>
          <p className="mb-2">Hola, {user.displayName}</p>
          <button onClick={() => signOut(auth)} className="mb-4 bg-red-600 text-white px-3 py-1 rounded">
            Cerrar sesión
          </button>
          <button onClick={resetear} className="mb-4 ml-4 bg-gray-700 text-white px-3 py-1 rounded">
            Resetear rutina
          </button>
          {rutina.map((bloque) => (
            <div key={bloque.dia} className="bg-white rounded shadow p-4 mb-4">
              <h2 className="font-semibold text-lg">{bloque.dia}</h2>
              <ul className="mt-2 space-y-1">
                {bloque.ejercicios.map((ej) => {
                  const key = bloque.dia + ej;
                  return (
                    <li key={key} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={estado[key] || false}
                        onChange={() => toggle(bloque.dia, ej)}
                      />
                      <span>{ej}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </>
      ) : (
        <button onClick={() => signInWithPopup(auth, provider)} className="bg-blue-600 text-white px-4 py-2 rounded">
          Iniciar sesión con Google
        </button>
      )}
    </div>
  );
}
