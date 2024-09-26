package main

import (
	"fmt"
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
		Post("http://127.0.0.1:1188/translate")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(string(resp.Body()))
	fmt.Println(res)

	return res.Data
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
