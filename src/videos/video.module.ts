import { Module } from "@nestjs/common";
import { VideoService } from "./video.service";
import { VideoResolvers } from "./video.resolvers";

@Module({
    providers: [VideoService, VideoResolvers]
})
export class VideoModule {}
