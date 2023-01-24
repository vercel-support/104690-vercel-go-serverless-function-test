package api

import (
	"encoding/json"
	"net/http"

	"vercel-go-serverless-function-test/models"
)

func TestHandler(w http.ResponseWriter, r *http.Request) {
	b := models.Test{Value: "Hi from the api bruh"}

	body, err := json.Marshal(b)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		_, _ = w.Write([]byte(http.StatusText(http.StatusInternalServerError)))
		return
	}

	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(body)
	return
}