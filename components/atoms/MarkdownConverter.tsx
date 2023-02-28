import React from "react"
import showdown from "showdown"

const converter = new showdown.Converter({simpleLineBreaks: true})

function MarkdownConverter(children: string) {
    return <div
        dangerouslySetInnerHTML={{
            __html: converter.makeHtml(children),
        }}
    />
}

export default MarkdownConverter