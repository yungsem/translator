package main

import (
	"embed"
	"github.com/go-resty/resty/v2"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend-bak/dist
var assets embed.FS

func main() {
	client := resty.New()

	// Create an instance of the app structure
	app := NewApp(client)

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "translator",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
