package main

import (
	"fmt"
	"github.com/OwO-Network/gdeeplx"
	"github.com/go-resty/resty/v2"
	"github.com/liuzl/gocc"
)

type TranslateParam struct {
	Text       string `json:"text"`
	SourceLang string `json:"source_lang"`
	TargetLang string `json:"target_lang"`
}

type TranslateResult struct {
	Code string `json:"code"`
	Data string `json:"data"`
}

func doTranslate(client *resty.Client, text string, sourceLang, targetLang string) string {
	param := TranslateParam{
		Text:       text,
		SourceLang: sourceLang,
		TargetLang: targetLang,
	}
	res := TranslateResult{}
	resp, err := client.R().
		SetHeader("Content-Type", "application/json").
		SetBody(param).
		SetResult(&res).
		Post("http://101.35.235.214:1188/translate")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(resp.Body()))
	fmt.Println(res)

	return res.Data
}

func translateByDeepL(text string, sourceLang, targetLang string) (string, error) {
	result, err := gdeeplx.Translate(text, sourceLang, targetLang, 0)
	if err != nil {
		fmt.Printf("Error: %v\n", err)
		return "", err
	}
	m, ok := result.(map[string]interface{})
	if !ok {
		return "", err
	}
	return fmt.Sprintf("%v", m["data"]), nil
}

func convertTW(chinese string) string {
	s2t, err := gocc.New("s2t")
	if err != nil {
		fmt.Println(err)
		return ""
	}
	out, err := s2t.Convert(chinese)
	if err != nil {
		fmt.Println(err)
		return ""
	}
	return out
}
