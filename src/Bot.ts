import { Client, ClientOptions } from 'discord.js'

export type BotOptions = {
  token: string
} & ClientOptions

export class Bot extends Client {
  constructor(options: BotOptions) {
    super(options)
    this.token = options.token
  }

  async start(token = this.token): Promise<void> {
    await this.login(token)
  }
}
