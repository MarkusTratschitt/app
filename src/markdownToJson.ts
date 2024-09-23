import { marked }  from 'marked';

export function convertMarkdownToJson(markdown: string): any {
    const tokens = marked.lexer(markdown)
    return tokens 
}