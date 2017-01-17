# typescript-truncate-pipe

This pipe is written in TypeScript for Angular2. It takes a string with HTML characters included, strips the HTML and limits to a specified number of characters without cutting off any words in the middle.

When using this in an Angular2 app, you'd just call it inside a template with something like...

## Only using the 'limit' argument
`<p>{{ item.description | truncate: [75] }}</p>`

## Using both 'limit' and 'trail' arguments
`<p>{{ item.description | truncate: [75, '...'] }}</p>`
