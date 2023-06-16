/* eslint-disable prettier/prettier */

import { Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common"
import { Job } from "bull";

@Processor('send')
export class SendComsumer {
  private readonly logger = new Logger(SendComsumer.name);

  @Process()
  async send(job: Job<unknown>) {
    console.log(JSON.stringify(job));
    let progress = 0;
    for (let i = 0; i < 10; i++) {
      console.log(job.data);
      progress += 1;
      await job.progress(progress);
    }
    return {};
  }
}
