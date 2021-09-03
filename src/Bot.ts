import { Client, ClientOptions } from 'discord.js'

export type BotOptions = {
  token: string
} & ClientOptions

export class Bot extends Client {
  constructor(options: BotOptions) {
    super(options)
    this.token = options.token

    this.on('ready', () => {
      console.log(`Logged in as ${this.user.tag}!`)
    })
  }

  async start(token = this.token): Promise<void> {
    await this.login(token)
  }
}
