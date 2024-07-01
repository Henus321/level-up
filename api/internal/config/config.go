package config

import (
	"github.com/joho/godotenv"
	"os"
)

type Config struct {
	Address string
	DBPath  string
}

var Envs = initConfig()

func initConfig() Config {
	godotenv.Load()

	return Config{
		Address: getEnv("ADDRESS", "localhost:8080"),
		DBPath:  getEnv("DB_PATH", "./storage/storage.db"),
	}
}

// Gets the env by key or fallbacks
func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}

	return fallback
}
