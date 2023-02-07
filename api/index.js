var data = [
  {unicode:"←" ,title:"arrow-left", category: "arrow, all"},
  {unicode:"↑" ,title:"arrow-up", category: "arrow, all"},
  {unicode:"→" ,title:"arrow-right", category: "arrow, all"},
  {unicode:"↓" ,title:"arrow-down", category: "arrow, all"},
  {unicode:"↖" ,title:"arrow-up-left", category: "arrow, all"},
  {unicode:"↗︎" ,title:"arrow-up-right", category: "arrow, all"},
  {unicode:"↙" ,title:"arrow-down-left", category: "arrow, all"},
  {unicode:"↘" ,title:"arrow-down-right", category: "arrow, all"},
  {unicode:"⟶" ,title:"arrow-long-right", category: "arrow, all"},
  {unicode:"⟵" ,title:"arrow-long-left", category: "arrow, all"},
  {unicode:"↩" ,title:"arrow-left-hook", category: "arrow, all"},
  {unicode:"↪" ,title:"arrow-right-hook", category: "arrow, all"},
  {unicode:"↺" ,title:"undo", category: "arrow, all"},
  {unicode:"↻" ,title:"redo", category: "arrow, all"},
  {unicode:"⌘" ,title:"command", category: "macos, all"},
  {unicode:"⇪" ,title:"caps-lock", category: "macos, all"},
  {unicode:"⌥" ,title:"option", category: "macos, all"},
  {unicode:"⌫" ,title:"delete", category: "macos, all"},
  {unicode:"®" ,title:"registered", category: "misc, all"},
  {unicode:"©" ,title:"copyright", category: "misc, all"},
  {unicode:"℗" ,title:"published", category: "misc, all"},
  {unicode:"™" ,title:"trademark", category: "misc, all"},
  {unicode:"№" ,title:"numero-sign", category: "number, all"},
  {unicode:"$" ,title:"dollar", category: "currency, all"},
  {unicode:"£" ,title:"sterling", category: "currency, all"},
  {unicode:"€" ,title:"euro", category: "currency, all"},
  {unicode:"¥" ,title:"yen", category: "currency, all"},
  {unicode:"℃" ,title:"celsius", category: "misc, all"},
  {unicode:"℉" ,title:"fahrenheit", category: "misc, all"},
  {unicode:"❖" ,title:"diamond", category: "misc, all"},
  {unicode:"☀" ,title:"sun", category: "misc, all"},
  {unicode:"★" ,title:"star-filled", category: "misc, all"},
  {unicode:"☆" ,title:"star-outline", category: "misc, all"},
  {unicode:"✓" ,title:"check", category: "misc, all"},
  {unicode:"※" ,title:"reference-mark", category: "misc, all"},
  {unicode:"⁂" ,title:"asterism", category: "misc, all"},
  {unicode:"⁖" ,title:"three-dot-punctuation", category: "misc, all"},
  {unicode:"⁘" ,title:"four-dot-punctuation", category: "misc, all"},
  {unicode:"⁙" ,title:"five-dot-punctuation", category: "misc, all"},
  {unicode:"⁜" ,title:"dotted-cross", category: "misc, all"},
  {unicode:"●" ,title:"circle", category: "misc, all"},
  {unicode:"…" ,title:"horizontal-ellipsis", category: "misc, all"},
  {unicode:"×" ,title:"multiplication", category: "number, all"},
  {unicode:"" ,title:"apple", category: "macos, all"},
  {unicode:"½" ,title:"one-half", category: "number, all"},
  {unicode:"⅓" ,title:"one-third", category: "number, all"},
  {unicode:"¼" ,title:"one-quarter", category: "number, all"},
  {unicode:"¾" ,title:"three-quarters", category: "number, all"},
  {unicode:"⅚" ,title:"five-sixths", category: "number, all"},
  {unicode:"⅟" ,title:"one-fracion", category: "number, all"},
  {unicode:"⅞" ,title:"seven-eighths", category: "number, all"},
  {unicode:"⅛" ,title:"one-eighth", category: "number, all"},
  {unicode:"⅝" ,title:"five-eighths", category: "number, all"},
  {unicode:"⅜" ,title:"three-eighths", category: "number, all"},
  {unicode:"▲" ,title:"triangle", category: "misc, all"},
]


const Handler = (request, response) =>  {
  let filteredUnicodes = []
  console.log(request.query)
  // This only runs if there's a ? query
  if (request.query.query) {
    filteredUnicodes = data.filter((unicode) => {
      return unicode.title === request.query.query
    })
    if (filteredUnicodes.length === 0) {
      response.send(['No results found'])
      return
    }
  }
  else if (request.query.category) {
    filteredUnicodes = data.filter((unicode) => {
      return unicode.category.includes(request.query.category)
    })
    if (filteredUnicodes.length === 0) {
      response.send(['No category found'])
      return
    }
  }
  else if (!request.query.query && !request.query.category) {
    response.send(['No query found'])
    return
  }


  response.send(filteredUnicodes)
  return
}
export default Handler

