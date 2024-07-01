package main

import (
	"fmt"
	"level-up/internal/config"
	"level-up/internal/storage/sqlite"
	"log"
	"net/http"
	"os"
)

func main() {
	storage, err := sqlite.New(config.Envs.DBPath)
	if err != nil {
		log.Println("Failed to init storage", err)
		os.Exit(1)
	}

	var _ = storage

	mux := http.NewServeMux()

	mux.HandleFunc("GET /route", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Route")
	})

	mux.HandleFunc("GET /route/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		fmt.Fprintf(w, "The route with id: %s", id)
	})

	fmt.Printf("Listening: %s", config.Envs.Address)

	http.ListenAndServe(config.Envs.Address, mux)
}
