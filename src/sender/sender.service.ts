import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { KafkaService } from '@rob3000/nestjs-kafka'

@Injectable()
export class SenderService implements OnModuleInit {
	constructor(@Inject('BUS_SERVICE') private client: KafkaService,
	) {}

	async onModuleInit(): Promise<any> {

		setInterval(async () => {
			const result = await this.client.send({
				topic: 'hero.kill.dragon',
				messages: [
					{
						key: new Date().toISOString(),
						value: 'test',
					},
				],
			})

			console.log({ result })
		}, 2000)
	}
}
