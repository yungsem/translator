package main

import (
	"context"
	"fmt"
	"github.com/go-resty/resty/v2"
)

// App struct
type App struct {
	ctx    context.Context
	client *resty.Client
}

// NewApp creates a new App application struct
func NewApp(client *resty.Client) *App {
	return &App{
		client: client,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

type Result struct {
	English            string
	TraditionalChinese string
}

// Translate returns a greeting for the given name
func (a *App) Translate(chinese string) *Result {
	fmt.Println(chinese)
	english := doTranslate(a.client, chinese, "zh", "en")
	tw := convertTW(chinese)
	return &Result{
		English:            english,
		TraditionalChinese: tw,
	}
}
