// utils/handleError.js

/* Gestion centralisée des erreurs serveur. */
function handleError(res, error, message = "Erreur serveur.") {
  console.error(error);
  res.status(500).json({ error: message });
}

module.exports = handleError;