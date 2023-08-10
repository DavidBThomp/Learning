---
title: "Variables"
date: 2023-08-10T12:46:38-05:00
draft: false
author: "DBT59"
---

## Variables Example

{{ .Title }} -- {{ .Date }} -- {{ .Permalink }}

  
{{ .Params.myVariable }}

### Custom Variable

{{ $myVarName := "aString"}}

#### {{ $myVarName }} - This changes color based on front matter