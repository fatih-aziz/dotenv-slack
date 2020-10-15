# DotENV Slack for Team (Sync .ENV to your team)
Just run `yarn env:bc` or `npm run env:bc` and your .env will be sent to your team. 
Its recommended to use `--name "My Name"` for better tracking who send share the .env

## How to Use
- Run `yarn install` or `npm install`
- Copy `.env.example` content to your `.env`
- Run `yarn env:bc` or `npm run env:bc`

## Reason
Why i made this sh*t? well i sometimes my team and i got problem with running our apps. The frequent reason is because .env got ignored by git, and team dont know if there is change to it.
Well for security reason we dont push our secrets or .env,
but our team need to know what changed right?

thats why i make simple script to notify if there is change with the .env or other needed secret to slack.

## Keywords:
- Keep .env in sync with teammates on Slack : node
- Sync your team's local .env variables - Envault
- How do you keep your environment variable synchronized among your development team. - DEV