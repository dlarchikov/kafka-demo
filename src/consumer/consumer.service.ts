import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import { Payload } from '@nestjs/microservices'
import { KafkaService, SubscribeTo } from '@rob3000/nestjs-kafka'

@Injectable()
export class ConsumerService implements OnModuleInit {
	constructor(@Inject('BUS_SERVICE') private client: KafkaService) {
	}

	onModuleInit(): any {
		this.client.subscribeToResponseOf('hero.kill.dragon', this)
	}

	@SubscribeTo('hero.kill.dragon')
	async getWorld(@Payload() data: any, key: any, offset: number, timestamp: number): Promise<{ test: string }> {
		console.log({
			data, key,
			offset,
			timestamp
		})

		return { test: `return-${new Date().toISOString()}` }
	}
}
