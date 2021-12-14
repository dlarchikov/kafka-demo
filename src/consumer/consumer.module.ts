import { Module } from '@nestjs/common'
import { ConsumerService } from './consumer.service'
import { KafkaModule } from '@rob3000/nestjs-kafka'

@Module({
	imports: [
		KafkaModule.register([
			{
				name: 'BUS_SERVICE',
				options: {
					client: {
						clientId: 'consumer',
						brokers: ['localhost:9092'],
					},
					consumer: {
						groupId: 'sender-consumer2'
					}
				}
			},
		])
	],
	providers: [ConsumerService]
})
export class ConsumerModule {}
