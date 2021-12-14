import { Module } from '@nestjs/common'
import { SenderService } from './sender.service'
import { KafkaModule } from '@rob3000/nestjs-kafka'

@Module({
	imports: [
		KafkaModule.register([
			{
				name: 'BUS_SERVICE',
				options: {
					client: {
						clientId: 'sender',
						brokers: ['localhost:9092'],
					},
					consumer: {
						groupId: 'sender-consumer'
					}
				}
			},
		]),
	],
	providers: [SenderService]
})
export class SenderModule {}
